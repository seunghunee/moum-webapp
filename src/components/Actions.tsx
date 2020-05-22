import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const Actions: React.FC = () => {
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
      <Hidden xsDown>
        {overflowMenuItems.map(({ Icon, text, onClick }) => (
          <IconButton key={text} onClick={onClick} color="inherit">
            <Icon />
          </IconButton>
        ))}
      </Hidden>
      <Hidden smUp>
        <IconButton onClick={handleOverflowMenuOpen} color="inherit">
          <MoreIcon />
        </IconButton>
        {overflowMenu}
      </Hidden>
    </>
  );
};

export default Actions;
