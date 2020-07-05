// useRouteMatch의 인수로도 쓰이기 때문에 순서가 중요하다.
export enum Paths {
  EditArticle = "/edit/:title",
  NewArticle = "/edit",
  Article = "/:title",
  Home = "/",
}

export interface EditArticleParams {
  title: string;
}
export interface ArticleParams {
  title: string;
}
