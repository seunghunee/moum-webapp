import React from "react";
import Grid from "@material-ui/core/Grid";

import ArticleCard from "./ArticleCard";

const ArticleCollection: React.FC = () => {
  return (
    <Grid container spacing={4}>
      {cards.map((card) => (
        <Grid key={card} item xs={12} sm={6} md={4}>
          <ArticleCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticleCollection;

const cards = [1, 2, 3, 4, 5, 6, 7, 8];
