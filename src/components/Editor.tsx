import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Fab from "@material-ui/core/Fab";

const Editor: React.FC = () => {
  const classes = useStyle();

  return (
    <>
      <TextField
        className={classes.title}
        required
        id="title"
        label="Title"
        fullWidth
      />
      <TextareaAutosize
        className={classes.content}
        id="body"
        placeholder="Write your article..."
      />
      <Fab>Save</Fab>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
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
