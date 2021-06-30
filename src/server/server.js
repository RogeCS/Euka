import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";
import helmet from "helmet";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import serverRoutes from "../frontend/routes/serverRoutes";
import reducer from "../frontend/reducers";
import getManifest from "./getManifest";

import cookieParser from "cookie-parser";
import boom from "@hapi/boom";
import passport from "passport";
import axios from "axios";

dotenv.config();

const { ENV, PORT, API_URL } = process.env;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

require("./utils/auth/strategies/basic");

if (ENV === "development") {
  console.log("development config");
  const webpackConfig = require("../../webpack.config");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable("x-powered-by");
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest["vendors.css"] : "assets/app.css";
  const mainBuild = manifest ? manifest["main.js"] : "assets/app.js";
  const vendorBuild = manifest ? manifest["vendors.js"] : "assets/vendor.js";

  return `
  <!doctype html>
  <html>
    <head>
      <link rel="stylesheet" href=${mainStyles} type="text/css" />
      <meta charset="UTF-8" />
      <meta name="description" content="Personal budget tracker app">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="id=edge" />
      <link rel="shortcut icon" href="https://i.imgur.com/GkvfRTa.png" />
      <title>euka</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          "\\u003c"
        )}
      </script>
      <script src=${mainBuild} type"text/javascript"></script>
      <script src=${vendorBuild} type"text/javascript"></script>
    </body>
  </html>`;
};

const renderApp = async (req, res) => {
  let initialState;
  const { token, email, name, id } = req.cookies;

  try {
    let transactionList = await axios({
      url: `${API_URL}/api/transactions`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "get",
    });
    let transactions = transactionList.data.data;
    initialState = {
      user: {
        id,
        email,
        name,
      },
      totalBalance: 0,
      transactionsList: transactions,
    };
  } catch (error) {
    initialState = {
      user: {},
      totalBalance: 0,
      transactionsList: [],
    };
  }

  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const isLogged = initialState.user.id;
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes(isLogged))}
      </StaticRouter>
    </Provider>
  );

  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.post("/auth/sign-in", async function (req, res, next) {
  passport.authenticate("basic", function (error, data) {
    try {
      if (error || !data) {
        next(boom.unauthorized());
      }

      req.login(data, { session: false }, async function (err) {
        if (err) {
          next(err);
        }

        const { token, ...user } = data;

        res.cookie("token", token, {
          httpOnly: !(ENV === "development"),
          secure: !(ENV === "development"),
        });

        res.status(200).json(user);
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

app.post("/auth/sign-up", async function (req, res, next) {
  const { body: user } = req;

  try {
    const userData = await axios({
      url: `${API_URL}/api/auth/sign-up`,
      method: "post",
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
        isAdmin: user.isAdmin,
      },
    });

    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: userData.data.id,
    });
  } catch (error) {
    next(error);
  }
});

app.get("*", renderApp);

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  else
    console.log(`server in mode ${ENV} is running on port ${process.env.PORT}`);
});
