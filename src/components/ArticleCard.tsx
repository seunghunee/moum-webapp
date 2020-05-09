import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ArticleCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5">
          Heading
        </Typography>
        <Typography>
          This is a card. You can use this section to describe the content.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
