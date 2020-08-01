import React from "react";

import { Typography } from "@material-ui/core";

import ViwerTitle from "./ViewerTitle";

interface Props {
  articleTitle: string;
}

const ArticleNotFound: React.FC<Props> = ({ articleTitle }) => {
  return (
    <>
      <ViwerTitle>{articleTitle}</ViwerTitle>
      <Typography variant="h2" align="center">
        Article Not Found
      </Typography>
    </>
  );
};

export default ArticleNotFound;
