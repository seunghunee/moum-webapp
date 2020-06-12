/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArticleCard_article = {
    readonly title: string;
    readonly body: string;
    readonly " $refType": "ArticleCard_article";
};
export type ArticleCard_article$data = ArticleCard_article;
export type ArticleCard_article$key = {
    readonly " $data"?: ArticleCard_article$data;
    readonly " $fragmentRefs": FragmentRefs<"ArticleCard_article">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleCard_article",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
      "storageKey": null
    }
  ],
  "type": "Article"
};
(node as any).hash = '0ec26ad3561a9e29c09c36a97fcf5851';
export default node;
