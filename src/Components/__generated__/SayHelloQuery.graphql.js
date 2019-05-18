/**
 * @flow
 * @relayHash fbef8adc0c368ceedfe1090b46cc5269
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SayHelloQueryVariables = {|
  name: string
|};
export type SayHelloQueryResponse = {|
  +hello: string
|};
export type SayHelloQuery = {|
  variables: SayHelloQueryVariables,
  response: SayHelloQueryResponse,
|};
*/


/*
query SayHelloQuery(
  $name: String!
) {
  hello(name: $name)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "hello",
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "storageKey": null
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
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SayHelloQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "SayHelloQuery",
    "id": null,
    "text": "query SayHelloQuery(\n  $name: String!\n) {\n  hello(name: $name)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2e9911e3dce24a9373d19e8108c792d5';
module.exports = node;
