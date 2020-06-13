import React, { useState } from "react";
import { useMutation } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Fab from "@material-ui/core/Fab";

import { EditorMutation } from "./__generated__/EditorMutation.graphql";

const Editor: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [addArticle] = useMutation<EditorMutation>(
    graphql`
      mutation EditorMutation($input: AddArticleInput!) {
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

  const classes = useStyles();
  return (
    <>
      <TextField
        className={classes.title}
        required
        id="title"
        label="Title"
        fullWidth
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextareaAutosize
        className={classes.content}
        id="body"
        placeholder="Write your article..."
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />
      <Fab
        onClick={() =>
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
          })
        }
      >
        Save
      </Fab>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(4),
  },
  content: {
    border: "none",
    outline: "none",
    resize: "none",
    width: "100%",
    backgroundColor: theme.palette.background.default,
    marginBottom: theme.spacing(4),
  },
}));

export default Editor;
