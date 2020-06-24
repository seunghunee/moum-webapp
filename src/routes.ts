export enum Paths {
  Article = "/:title",
  NewArticle = "/edit",
  EditArticle = "/edit/:title",
  Home = "/",
}

export interface ArticleParams {
  title: string;
}

export interface EditArticleParams {
  title: string;
}
