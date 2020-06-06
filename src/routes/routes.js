import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "../pages/Main";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
    </Switch>
  );
};

export default App;
