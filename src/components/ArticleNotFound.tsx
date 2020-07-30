import React from "react";

import { Typography } from "@material-ui/core";

interface Props {
  articleTitle: string;
}

const ArticleNotFound: React.FC<Props> = ({ articleTitle }) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {articleTitle}
      </Typography>
      <Typography variant="h2" align="center">
        Article Not Found
      </Typography>
    </>
  );
};

export default ArticleNotFound;
