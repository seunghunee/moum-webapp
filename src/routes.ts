export enum Paths {
  Article = "/:title",
  NewArticle = "/edit",
  Home = "/",
}

export interface ArticleParams {
  title: string;
}
