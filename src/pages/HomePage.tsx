import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import ArticleCollection from "../components/ArticleCollection";

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="md">
      <ArticleCollection />
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default HomePage;
