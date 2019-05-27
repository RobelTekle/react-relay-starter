/**
 * @flow
 * @relayHash 4e719c1680c1ee9dd76b9b2de6614c1d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserFragment_user$ref = any;
export type SayHelloQueryVariables = {|
  id: string
|};
export type SayHelloQueryResponse = {|
  +user: ?{|
    +$fragmentRefs: UserFragment_user$ref
  |}
|};
export type SayHelloQuery = {|
  variables: SayHelloQueryVariables,
  response: SayHelloQueryResponse,
|};
*/


/*
query SayHelloQuery(
  $id: ID!
) {
  user(id: $id) {
    ...UserFragment_user
    id
  }
}

fragment UserFragment_user on User {
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SayHelloQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "UserFragment_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SayHelloQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SayHelloQuery",
    "id": null,
    "text": "query SayHelloQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    ...UserFragment_user\n    id\n  }\n}\n\nfragment UserFragment_user on User {\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '836153fe19036eb61672e9ef39472f36';
module.exports = node;
