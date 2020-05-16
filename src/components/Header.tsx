import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link
          component={RouterLink}
          to="/"
          variant="h5"
          color="inherit"
          underline="none"
        >
          moum
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
