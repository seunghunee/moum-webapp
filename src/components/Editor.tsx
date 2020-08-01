import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Fab from "@material-ui/core/Fab";

interface Props {
  submit: (title: string, body: string) => void;
  defaultTitle?: string;
  defaultBody?: string;
}

const Editor: React.FC<Props> = ({
  submit,
  defaultTitle = "",
  defaultBody = "",
}) => {
  const [title, setTitle] = useState<string>(defaultTitle);
  const [body, setBody] = useState<string>(defaultBody);

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
      <Fab onClick={() => submit(title, body)}>Submit</Fab>
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
