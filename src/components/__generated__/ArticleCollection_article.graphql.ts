/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArticleCollection_article = ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentRefs": FragmentRefs<"ArticleCard_article">;
    readonly " $refType": "ArticleCollection_article";
}>;
export type ArticleCollection_article$data = ArticleCollection_article;
export type ArticleCollection_article$key = ReadonlyArray<{
    readonly " $data"?: ArticleCollection_article$data;
    readonly " $fragmentRefs": FragmentRefs<"ArticleCollection_article">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ArticleCollection_article",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleCard_article"
    }
  ],
  "type": "Article",
  "abstractKey": null
};
(node as any).hash = 'cc7e2896a7f6b832fd9be3058465fe12';
export default node;
