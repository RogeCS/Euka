import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Dashboard from "../containers/Dashboard.jsx";
import Login from "../containers/Login.jsx";
import Register from "../containers/Register.jsx";

import "../styles/global/App.scss";

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={isLogged ? Dashboard : Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default App;
