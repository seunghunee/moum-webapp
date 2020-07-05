import React, { useContext } from "react";
import { useRouteMatch, useHistory, match } from "react-router-dom";
import { useMutation } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";

import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip";

import { Paths, ArticleParams } from "../routes";
import { ActionsMutation } from "./__generated__/ActionsMutation.graphql";
import { CurrentArticleIdContext } from "../contexts/CurrentAritlceId";

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

  const history = useHistory();
  const routeMatch = useRouteMatch(Object.values(Paths));

  const handleAddClick = () => {
    history.push(Paths.NewArticle);
  };

  const handleEditClick = () => {
    history.push(
      Paths.EditArticle.replace(
        ":title",
        (routeMatch as match<ArticleParams>).params.title
      )
    );
  };

  const [deleteArticle] = useMutation<ActionsMutation>(
    graphql`
      mutation ActionsMutation($input: DeleteArticleInput!) {
        deleteArticle(input: $input) {
          deletedId
        }
      }
    `
  );
  const { currentArticleId } = useContext(CurrentArticleIdContext);
  const handleDeleteClick = () => {
    if (!currentArticleId) return;
    deleteArticle({
      variables: { input: { id: currentArticleId } },
      onCompleted() {
        history.push(Paths.Home);
      },
    });
  };

  let items = [
    { Icon: AddIcon, text: "New article", onClick: handleAddClick },
    { Icon: EditIcon, text: "Edit", onClick: handleEditClick },
    { Icon: DeleteIcon, text: "Delete", onClick: handleDeleteClick },
  ];
  switch (routeMatch?.path) {
    case Paths.EditArticle:
    case Paths.NewArticle:
      return null;
    case Paths.Home:
      items = items.filter((item) => item.Icon === AddIcon);
      break;
  }

  const overflowMenu = (
    <Menu
      anchorEl={overflowMenuAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      open={isOverflowMenuOpen}
      onClose={handleOverflowMenuClose}
    >
      {items.map(({ Icon, text, onClick }) => (
        <MenuItem key={text} onClick={onClick}>
          <IconButton color="inherit">
            <Icon />
          </IconButton>
          <Typography>{text}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <Hidden xsDown>
        {items.map(({ Icon, text, onClick }) => (
          <Tooltip key={text} title={text}>
            <IconButton onClick={onClick} color="inherit">
              <Icon />
            </IconButton>
          </Tooltip>
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
