import React from "react";
import { Switch, Route } from "react-router-dom";

import NewArticlePage from "../pages/NewArticlePage";
import ArticlePage from "../pages/ArticlePage";
import HomePage from "../pages/HomePage";
import { Paths } from "../routes";

const Body: React.FC = () => {
  return (
    <Switch>
      <Route path={Paths.NewArticle}>
        <NewArticlePage />
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

export default Body;
