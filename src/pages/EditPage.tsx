import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Editor from "../components/Editor";

const EditPage: React.FC = () => {
  const classes = useStyle();

  return (
    <Container className={classes.root} maxWidth="md">
      <Editor />
    </Container>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default EditPage;
