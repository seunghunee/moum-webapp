import React from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import ArticleCollection from "../components/ArticleCollection";
import { HomePageQuery } from "./__generated__/HomePageQuery.graphql";

const HomePage: React.FC = () => {
  const { articles } = useLazyLoadQuery<HomePageQuery>(
    graphql`
      query HomePageQuery {
        articles {
          ...ArticleCollection_article
        }
      }
    `,
    {}
  );

  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <ArticleCollection articles={articles} />
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
