import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard.jsx";
import Login from "../containers/Login.jsx";

import "../styles/global/App.scss";

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Dashboard} />
    </Switch>
  </HashRouter>
);

export default App;
