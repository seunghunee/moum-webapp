import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Grid from "@material-ui/core/Grid";

const Header: React.FC = () => {
  const classes = useStyles();
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <AddIcon />
        </IconButton>
        <p>New article</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <EditIcon />
        </IconButton>
        <p>Edit</p>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <p>Delete</p>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Link
              component={RouterLink}
              to="/"
              variant="h5"
              color="inherit"
              underline="none"
            >
              moum
            </Link>
          </Grid>
          <Grid item>
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <AddIcon />
              </IconButton>
              <IconButton color="inherit">
                <EditIcon />
              </IconButton>
              <IconButton color="inherit">
                <DeleteIcon />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton onClick={handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
            {renderMobileMenu}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default Header;
