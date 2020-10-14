/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateArticleInput = {
    id: string;
    title: string;
    body: string;
};
export type EditArticlePageMutationVariables = {
    input: UpdateArticleInput;
};
export type EditArticlePageMutationResponse = {
    readonly updateArticle: {
        readonly article: {
            readonly id: string;
            readonly title: string;
            readonly body: string;
        } | null;
    } | null;
};
export type EditArticlePageMutation = {
    readonly response: EditArticlePageMutationResponse;
    readonly variables: EditArticlePageMutationVariables;
};



/*
mutation EditArticlePageMutation(
  $input: UpdateArticleInput!
) {
  updateArticle(input: $input) {
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
    "concreteType": "UpdateArticlePayload",
    "kind": "LinkedField",
    "name": "updateArticle",
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
    "name": "EditArticlePageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditArticlePageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "82e751755a9e2cec3a9f9ba334da34b7",
    "id": null,
    "metadata": {},
    "name": "EditArticlePageMutation",
    "operationKind": "mutation",
    "text": "mutation EditArticlePageMutation(\n  $input: UpdateArticleInput!\n) {\n  updateArticle(input: $input) {\n    article {\n      id\n      title\n      body\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f0953325aa475466d22a7a9d1d1b4050';
export default node;
