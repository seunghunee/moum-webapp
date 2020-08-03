/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArticlePageQueryVariables = {
    title: string;
};
export type ArticlePageQueryResponse = {
    readonly article: {
        readonly " $fragmentRefs": FragmentRefs<"Article_article">;
    } | null;
};
export type ArticlePageQuery = {
    readonly response: ArticlePageQueryResponse;
    readonly variables: ArticlePageQueryVariables;
};



/*
query ArticlePageQuery(
  $title: String!
) {
  article(title: $title) {
    ...Article_article
    id
  }
}

fragment Article_article on Article {
  id
  title
  body
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
    "kind": "Variable",
    "name": "title",
    "variableName": "title"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArticlePageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "article",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Article_article"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ArticlePageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "94a27b246d016069aafcfc9cc2c50e0e",
    "id": null,
    "metadata": {},
    "name": "ArticlePageQuery",
    "operationKind": "query",
    "text": "query ArticlePageQuery(\n  $title: String!\n) {\n  article(title: $title) {\n    ...Article_article\n    id\n  }\n}\n\nfragment Article_article on Article {\n  id\n  title\n  body\n}\n"
  }
};
})();
(node as any).hash = '1ea16d46a7fa300a959c9e764f8b401f';
export default node;
