import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Index from "../components/Index.jsx";

import "../styles/global/App.scss";

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={Index} />
    </Switch>
  </HashRouter>
);

export default App;
