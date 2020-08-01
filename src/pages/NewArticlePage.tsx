import React from "react";
import { useMutation } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { useHistory } from "react-router-dom";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import { NewArticlePageMutation } from "./__generated__/NewArticlePageMutation.graphql";
import Editor from "../components/Editor";

const NewArticlePage: React.FC = () => {
  const [addArticle] = useMutation<NewArticlePageMutation>(
    graphql`
      mutation NewArticlePageMutation($input: AddArticleInput!) {
        addArticle(input: $input) {
          article {
            id
            title
            body
          }
        }
      }
    `
  );
  const history = useHistory();
  const submit = (title: string, body: string) =>
    addArticle({
      variables: {
        input: {
          title,
          body,
        },
      },
      onCompleted(response) {
        history.push(`/${response.addArticle?.article?.title}`);
      },
    });

  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <Editor submit={submit} />
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default NewArticlePage;
