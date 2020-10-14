/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type EditArticlePageQueryVariables = {
    title: string;
};
export type EditArticlePageQueryResponse = {
    readonly article: {
        readonly id: string;
        readonly title: string;
        readonly body: string;
    } | null;
};
export type EditArticlePageQuery = {
    readonly response: EditArticlePageQueryResponse;
    readonly variables: EditArticlePageQueryVariables;
};



/*
query EditArticlePageQuery(
  $title: String!
) {
  article(title: $title) {
    id
    title
    body
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "title"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Article",
    "kind": "LinkedField",
    "name": "article",
    "plural": false,
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditArticlePageQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditArticlePageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "664f3f6f9ff3b66d188f14de71acc22f",
    "id": null,
    "metadata": {},
    "name": "EditArticlePageQuery",
    "operationKind": "query",
    "text": "query EditArticlePageQuery(\n  $title: String!\n) {\n  article(title: $title) {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();
(node as any).hash = '599fd782d04190a6a6efda7287691543';
export default node;
