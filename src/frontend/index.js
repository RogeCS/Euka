import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import reducer from "./reducers";
import App from "./routes/App.js";

const history = createBrowserHistory();

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(reducer, preloadedState, composeEnhancers);
delete window.__PRELOADED_STATE__;
hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App isLogged={preloadedState.user.id} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
