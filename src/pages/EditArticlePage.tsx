import React from "react";
import { useLazyLoadQuery, useMutation } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { useHistory, useParams, Redirect } from "react-router-dom";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import { EditArticlePageQuery } from "./__generated__/EditArticlePageQuery.graphql";
import { EditArticlePageMutation } from "./__generated__/EditArticlePageMutation.graphql";
import Editor from "../components/Editor";
import { Paths, EditArticleParams } from "../routes";

const EditArticlePage: React.FC = () => {
  const { title } = useParams<EditArticleParams>();
  const { article } = useLazyLoadQuery<EditArticlePageQuery>(
    graphql`
      query EditArticlePageQuery($title: String!) {
        article(title: $title) {
          id
          title
          body
        }
      }
    `,
    { title }
  );

  const [editArticle] = useMutation<EditArticlePageMutation>(
    graphql`
      mutation EditArticlePageMutation($input: UpdateArticleInput!) {
        updateArticle(input: $input) {
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
    editArticle({
      variables: {
        input: {
          id: article!.id,
          title,
          body,
        },
      },
      onCompleted(response) {
        history.push(`/${response.updateArticle?.article?.title}`);
      },
    });

  const classes = useStyles();
  if (article === null) {
    return <Redirect to={Paths.NewArticle} />;
  }
  return (
    <Container className={classes.root} maxWidth="md">
      <Editor
        submit={submit}
        defaultTitle={article.title}
        defaultBody={article.body}
      />
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default EditArticlePage;
