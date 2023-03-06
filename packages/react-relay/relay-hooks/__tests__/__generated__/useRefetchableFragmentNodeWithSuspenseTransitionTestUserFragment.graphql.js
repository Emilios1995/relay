/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<42c25ecb0a29889b36a467d88b1f28a5>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import type { useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$fragmentType } from "./useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment.graphql";
import type { FragmentType } from "relay-runtime";
declare export opaque type useRefetchableFragmentNodeWithSuspenseTransitionTestUserFragment$fragmentType: FragmentType;
type useRefetchableFragmentNodeWithSuspenseTransitionTestUserFragmentRefetchQuery$variables = any;
export type useRefetchableFragmentNodeWithSuspenseTransitionTestUserFragment$data = {|
  +id: string,
  +name: ?string,
  +profile_picture: ?{|
    +uri: ?string,
  |},
  +$fragmentSpreads: useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$fragmentType,
  +$fragmentType: useRefetchableFragmentNodeWithSuspenseTransitionTestUserFragment$fragmentType,
|};
export type useRefetchableFragmentNodeWithSuspenseTransitionTestUserFragment$key = {
  +$data?: useRefetchableFragmentNodeWithSuspenseTransitionTestUserFragment$data,
  +$fragmentSpreads: useRefetchableFragmentNodeWithSuspenseTransitionTestUserFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "scale"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./useRefetchableFragmentNodeWithSuspenseTransitionTestUserFragmentRefetchQuery.graphql'),
      "indentifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "useRefetchableFragmentNodeWithSuspenseTransitionTestUserFragment",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "scale",
          "variableName": "scale"
        }
      ],
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profile_picture",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "uri",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "5667a4d9b630416b46fa8e8124d4470c";
}

module.exports = ((node/*: any*/)/*: RefetchableFragment<
  useRefetchableFragmentNodeWithSuspenseTransitionTestUserFragment$fragmentType,
  useRefetchableFragmentNodeWithSuspenseTransitionTestUserFragment$data,
  useRefetchableFragmentNodeWithSuspenseTransitionTestUserFragmentRefetchQuery$variables,
>*/);
