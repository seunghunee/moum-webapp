import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h5">moum</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
