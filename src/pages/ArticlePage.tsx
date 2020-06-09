import React from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { ArticlePageQuery } from "./__generated__/ArticlePageQuery.graphql";
import Article from "../components/Article";
import { ArticleParams } from "../routes";

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
      {/* TODO: 글을 찾을 수 없을 때 메시지표시를 보기 좋게 하기 */}
      {article ? <Article article={article} /> : `${title}: No such article`}
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
