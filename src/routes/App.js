import React from "react";
import { Route, Switch, HashRouter, BrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard.jsx";
import Login from "../containers/Login.jsx";
import Register from "../containers/Register.jsx";

import "../styles/global/App.scss";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/Register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default App;
