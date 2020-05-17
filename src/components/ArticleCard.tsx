import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const ArticleCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" noWrap>
            Heading
          </Typography>
          <Typography color="textSecondary">
            This is a card. You can use this section to describe the content.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const useStyles = makeStyles(() => ({
  media: {
    paddingTop: "56.25%", // 16:9
  },
}));

export default ArticleCard;
