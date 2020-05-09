import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import ArticleCollection from "../components/ArticleCollection";

const HomePage: React.FC = () => {
  const classes = useStyle();

  return (
    <Container className={classes.container} maxWidth="md">
      <ArticleCollection />
    </Container>
  );
};

const useStyle = makeStyles((theme) => ({
  container: { paddingTop: theme.spacing(8), paddingBottom: theme.spacing(8) },
}));

export default HomePage;
