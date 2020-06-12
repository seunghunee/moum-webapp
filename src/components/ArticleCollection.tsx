import React from "react";
import { useFragment } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import Grid from "@material-ui/core/Grid";

import ArticleCard from "./ArticleCard";
import { ArticleCollection_article$key } from "./__generated__/ArticleCollection_article.graphql";

interface Props {
  articles: ArticleCollection_article$key;
}

const ArticleCollection: React.FC<Props> = ({ articles }) => {
  const articlesData = useFragment<ArticleCollection_article$key>(
    graphql`
      fragment ArticleCollection_article on Article @relay(plural: true) {
        id
        ...ArticleCard_article
      }
    `,
    articles
  );

  return (
    <Grid container spacing={4}>
      {articlesData.map((article) => (
        <Grid key={article.id} item xs={12} sm={6} md={4}>
          <ArticleCard article={article} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticleCollection;
