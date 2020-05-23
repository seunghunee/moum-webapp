import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import EditPage from "../pages/EditPage";
import ArticlePage from "../pages/ArticlePage";

const BodyCon: React.FC = () => {
  return (
    <Switch>
      <Route path="/edit">
        <EditPage />
      </Route>
      <Route path="/:article">
        <ArticlePage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default BodyCon;
