/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Article_article = {
    readonly id: string;
    readonly title: string;
    readonly body: string;
    readonly " $refType": "Article_article";
};
export type Article_article$data = Article_article;
export type Article_article$key = {
    readonly " $data"?: Article_article$data;
    readonly " $fragmentRefs": FragmentRefs<"Article_article">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Article_article",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
(node as any).hash = 'dacdb9a812ba7376c35d0233227cd719';
export default node;
