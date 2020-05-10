import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Article from "../components/Article";

const ArticlePage: React.FC = () => {
  const classes = useStyle();

  return (
    <main className={classes.layout}>
      <Article />
    </main>
  );
};

const useStyle = makeStyles((theme) => ({
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
