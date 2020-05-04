import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/article">
          <ArticlePage />
        </Route>
        <Route path="/edit">
          <EditPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
