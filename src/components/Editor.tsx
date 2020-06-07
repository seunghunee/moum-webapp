import React from "react";
import { useMutation } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { EditorMutation } from "./__generated__/EditorMutation.graphql";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Fab from "@material-ui/core/Fab";

const Editor: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const [body, setBody] = React.useState<string>("");
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
