import React from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { ArticleParams } from "routes";
import Article from "components/Article";
import ArticleNotFound from "components/ArticleNotFound";
import { ArticlePageQuery } from "./__generated__/ArticlePageQuery.graphql";

const ArticlePage: React.FC = () => {
  const { title } = useParams<ArticleParams>();
  const { article } = useLazyLoadQuery<ArticlePageQuery>(
    graphql`
      query ArticlePageQuery($title: String!) {
        article(title: $title) {
          ...Article_article
        }
      }
    `,
    { title }
  );

  const classes = useStyles();
  return (
    <main className={classes.layout}>
      {article ? (
        <Article article={article} />
      ) : (
        <ArticleNotFound articleTitle={title} />
      )}
    </main>
  );
};

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

export default ArticlePage;
