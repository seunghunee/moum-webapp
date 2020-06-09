import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import EditPage from "../pages/EditPage";
import ArticlePage from "../pages/ArticlePage";
import { Paths } from "../routes";

const BodyCon: React.FC = () => {
  return (
    <Switch>
      <Route path={Paths.Edit}>
        <EditPage />
      </Route>
      <Route path={Paths.Article}>
        <ArticlePage />
      </Route>
      <Route path={Paths.Home}>
        <HomePage />
      </Route>
    </Switch>
  );
};

export default BodyCon;
