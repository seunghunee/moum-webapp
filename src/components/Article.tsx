import React from "react";
import { useFragment } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { Typography } from "@material-ui/core";

import { Article_article$key } from "./__generated__/Article_article.graphql";

interface Props {
  article: Article_article$key;
}

const Article: React.FC<Props> = ({ article }) => {
  const { title, body } = useFragment<Article_article$key>(
    graphql`
      fragment Article_article on Article {
        id
        title
        body
      }
    `,
    article
  );

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography paragraph>{body}</Typography>
    </>
  );
};

export default Article;
