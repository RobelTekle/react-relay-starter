/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserFragment_user$ref: FragmentReference;
declare export opaque type UserFragment_user$fragmentType: UserFragment_user$ref;
export type UserFragment_user = {|
  +name: string,
  +$refType: UserFragment_user$ref,
|};
export type UserFragment_user$data = UserFragment_user;
export type UserFragment_user$key = {
  +$data?: UserFragment_user$data,
  +$fragmentRefs: UserFragment_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserFragment_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '288f29e663f4cf8d4d92f351dd7b290f';
module.exports = node;
