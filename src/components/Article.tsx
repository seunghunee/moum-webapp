import React, { useContext, useEffect } from "react";
import { useFragment } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { Typography } from "@material-ui/core";

import { Article_article$key } from "./__generated__/Article_article.graphql";
import { CurrentArticleIdContext } from "../contexts/CurrentAritlceId";
import ViwerTitle from "./ViewerTitle";

interface Props {
  article: Article_article$key;
}

const Article: React.FC<Props> = ({ article }) => {
  const { id, title, body } = useFragment<Article_article$key>(
    graphql`
      fragment Article_article on Article {
        id
        title
        body
      }
    `,
    article
  );
  const { setCurrentArticleId } = useContext(CurrentArticleIdContext);
  useEffect(() => {
    setCurrentArticleId(id);
    return () => setCurrentArticleId("");
  }, [id, setCurrentArticleId]);

  return (
    <>
      <ViwerTitle>{title}</ViwerTitle>
      <Typography paragraph>{body}</Typography>
    </>
  );
};

export default Article;
