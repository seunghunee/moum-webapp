/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AddArticleInput = {
    title: string;
    body: string;
};
export type EditorMutationVariables = {
    input: AddArticleInput;
};
export type EditorMutationResponse = {
    readonly addArticle: {
        readonly article: {
            readonly id: string;
            readonly title: string;
            readonly body: string;
        } | null;
    } | null;
};
export type EditorMutation = {
    readonly response: EditorMutationResponse;
    readonly variables: EditorMutationVariables;
};



/*
mutation EditorMutation(
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
    "name": "input",
    "type": "AddArticleInput!"
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
    "name": "EditorMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditorMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "EditorMutation",
    "operationKind": "mutation",
    "text": "mutation EditorMutation(\n  $input: AddArticleInput!\n) {\n  addArticle(input: $input) {\n    article {\n      id\n      title\n      body\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '79fe3163174ad34b4765e7e8403127c5';
export default node;
