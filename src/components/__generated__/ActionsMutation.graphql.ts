/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteArticleInput = {
    id: string;
};
export type ActionsMutationVariables = {
    input: DeleteArticleInput;
};
export type ActionsMutationResponse = {
    readonly deleteArticle: {
        readonly deletedId: string;
    } | null;
};
export type ActionsMutation = {
    readonly response: ActionsMutationResponse;
    readonly variables: ActionsMutationVariables;
};



/*
mutation ActionsMutation(
  $input: DeleteArticleInput!
) {
  deleteArticle(input: $input) {
    deletedId
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
    "concreteType": "DeleteArticlePayload",
    "kind": "LinkedField",
    "name": "deleteArticle",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedId",
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
    "name": "ActionsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ActionsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "acea1b4fe45c35e0664108685976a82d",
    "id": null,
    "metadata": {},
    "name": "ActionsMutation",
    "operationKind": "mutation",
    "text": "mutation ActionsMutation(\n  $input: DeleteArticleInput!\n) {\n  deleteArticle(input: $input) {\n    deletedId\n  }\n}\n"
  }
};
})();
(node as any).hash = '3fa5109fdbad39ace1cc2a41b407fe5f';
export default node;
