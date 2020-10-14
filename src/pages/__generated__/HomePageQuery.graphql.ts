/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HomePageQueryVariables = {};
export type HomePageQueryResponse = {
    readonly articles: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"ArticleCollection_article">;
    }>;
};
export type HomePageQuery = {
    readonly response: HomePageQueryResponse;
    readonly variables: HomePageQueryVariables;
};



/*
query HomePageQuery {
  articles {
    ...ArticleCollection_article
    id
  }
}

fragment ArticleCard_article on Article {
  title
  body
}

fragment ArticleCollection_article on Article {
  id
  ...ArticleCard_article
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomePageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "articles",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArticleCollection_article"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomePageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "articles",
        "plural": true,
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
    "cacheID": "6a572e25bfa26e2096f74dcddbd712d1",
    "id": null,
    "metadata": {},
    "name": "HomePageQuery",
    "operationKind": "query",
    "text": "query HomePageQuery {\n  articles {\n    ...ArticleCollection_article\n    id\n  }\n}\n\nfragment ArticleCard_article on Article {\n  title\n  body\n}\n\nfragment ArticleCollection_article on Article {\n  id\n  ...ArticleCard_article\n}\n"
  }
};
(node as any).hash = '227f55420b9099d9a21f14823105a571';
export default node;
