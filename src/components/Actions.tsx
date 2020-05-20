import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";

const Actions: React.FC = () => {
  const classes = useStyles();
  const [
    overflowMenuAnchorEl,
    setOverflowMenuAnchorEl,
  ] = React.useState<null | HTMLElement>(null);
  const isOverflowMenuOpen = Boolean(overflowMenuAnchorEl);

  const handleOverflowMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOverflowMenuAnchorEl(event.currentTarget);
  };
  const handleOverflowMenuClose = () => {
    setOverflowMenuAnchorEl(null);
  };

  const overflowMenuItems = [
    { Icon: AddIcon, text: "New article", onClick: () => alert("New article") },
    { Icon: EditIcon, text: "Edit", onClick: () => alert("Edit") },
    { Icon: DeleteIcon, text: "Delete", onClick: () => alert("Delete") },
  ];

  const overflowMenu = (
    <Menu
      anchorEl={overflowMenuAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      open={isOverflowMenuOpen}
      onClose={handleOverflowMenuClose}
    >
      {overflowMenuItems.map(({ Icon, text, onClick }) => (
        <MenuItem key={text} onClick={onClick}>
          {Icon && (
            <IconButton color="inherit">
              <Icon />
            </IconButton>
          )}
          <Typography>{text}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <div className={classes.sectionDefault}>
        {overflowMenuItems.map(({ Icon, text, onClick }) => (
          <IconButton key={text} onClick={onClick} color="inherit">
            <Icon />
          </IconButton>
        ))}
      </div>
      <div className={classes.sectionSmallScreen}>
        <IconButton onClick={handleOverflowMenuOpen} color="inherit">
          <MoreIcon />
        </IconButton>
        {overflowMenu}
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  sectionDefault: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionSmallScreen: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default Actions;
