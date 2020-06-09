import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import Actions from "./Actions";
import { Paths } from "../routes";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Link
              component={RouterLink}
              to={Paths.Home}
              variant="h5"
              color="inherit"
              underline="none"
            >
              moum
            </Link>
          </Grid>
          <Grid item>
            <Actions />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
