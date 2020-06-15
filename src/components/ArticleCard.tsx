import React from "react";
import { useFragment } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

import { ArticleCard_article$key } from "./__generated__/ArticleCard_article.graphql";

interface Props {
  article: ArticleCard_article$key;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
  const { title, body } = useFragment<ArticleCard_article$key>(
    graphql`
      fragment ArticleCard_article on Article {
        title
        body
      }
    `,
    article
  );

  const classes = useStyles();
  return (
    <Card>
      <CardActionArea component={Link} to={`/${title}`}>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" noWrap>
            {title}
          </Typography>
          <Typography color="textSecondary">{body}</Typography>
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
