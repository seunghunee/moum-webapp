/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AddArticleInput = {
    title: string;
    body: string;
};
export type NewArticlePageMutationVariables = {
    input: AddArticleInput;
};
export type NewArticlePageMutationResponse = {
    readonly addArticle: {
        readonly article: {
            readonly id: string;
            readonly title: string;
            readonly body: string;
        } | null;
    } | null;
};
export type NewArticlePageMutation = {
    readonly response: NewArticlePageMutationResponse;
    readonly variables: NewArticlePageMutationVariables;
};



/*
mutation NewArticlePageMutation(
  $input: AddArticleInput!
) {
  addArticle(input: $input) {
    article {
      id
      title
      body
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddArticlePayload",
    "kind": "LinkedField",
    "name": "addArticle",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NewArticlePageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NewArticlePageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8ab4ada2ea8cb8ae14847c0709ed7988",
    "id": null,
    "metadata": {},
    "name": "NewArticlePageMutation",
    "operationKind": "mutation",
    "text": "mutation NewArticlePageMutation(\n  $input: AddArticleInput!\n) {\n  addArticle(input: $input) {\n    article {\n      id\n      title\n      body\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8581f59720ed89cec3d4871a81472a6c';
export default node;
