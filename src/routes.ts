export enum Paths {
  Article = "/:title",
  Edit = "/edit",
  Home = "/",
}

export interface ArticleParams {
  title: string;
}
