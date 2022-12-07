/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<8d6be460861aa843b3ed594f98e1b612>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { TodoDescription____relay_model_instance$data } from "./../../../relay-runtime/store/__tests__/resolvers/__generated__/TodoDescription____relay_model_instance.graphql";
import type { TodoModel____relay_model_instance$data } from "./../../../relay-runtime/store/__tests__/resolvers/__generated__/TodoModel____relay_model_instance.graphql";
import type { TodoDescription__some_client_type_with_interface$normalization } from "./../../../relay-runtime/store/__tests__/resolvers/__generated__/TodoDescription__some_client_type_with_interface$normalization.graphql";
import type { TodoDescription__some_interface$normalization } from "./../../../relay-runtime/store/__tests__/resolvers/__generated__/TodoDescription__some_interface$normalization.graphql";
import type { TodoModel__fancy_description$normalization } from "./../../../relay-runtime/store/__tests__/resolvers/__generated__/TodoModel__fancy_description$normalization.graphql";
import type { FragmentType } from "relay-runtime";
import {some_client_type_with_interface as todoDescriptionSomeClientTypeWithInterfaceResolver} from "../../../relay-runtime/store/__tests__/resolvers/TodoDescription.js";
// Type assertion validating that `todoDescriptionSomeClientTypeWithInterfaceResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(todoDescriptionSomeClientTypeWithInterfaceResolver: (
  __relay_model_instance: TodoDescription____relay_model_instance$data['__relay_model_instance'], 
) => ?TodoDescription__some_client_type_with_interface$normalization);
import {some_interface as todoDescriptionSomeInterfaceResolver} from "../../../relay-runtime/store/__tests__/resolvers/TodoDescription.js";
// Type assertion validating that `todoDescriptionSomeInterfaceResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(todoDescriptionSomeInterfaceResolver: (
  __relay_model_instance: TodoDescription____relay_model_instance$data['__relay_model_instance'], 
) => ?TodoDescription__some_interface$normalization);
import {fancy_description as todoModelFancyDescriptionResolver} from "../../../relay-runtime/store/__tests__/resolvers/TodoModel.js";
// Type assertion validating that `todoModelFancyDescriptionResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(todoModelFancyDescriptionResolver: (
  __relay_model_instance: TodoModel____relay_model_instance$data['__relay_model_instance'], 
) => ?TodoModel__fancy_description$normalization['__relay_model_instance']);
declare export opaque type RelayResolverModelTestInterfaceFragment$fragmentType: FragmentType;
export type RelayResolverModelTestInterfaceFragment$data = {|
  +fancy_description: ?{|
    +some_client_type_with_interface: {|
      +client_interface: {|
        +__typename: string,
        +description: ?string,
      |},
    |},
    +some_interface: ?$Call<<R>((...empty[]) => R) => R, typeof todoDescriptionSomeInterfaceResolver>,
  |},
  +$fragmentType: RelayResolverModelTestInterfaceFragment$fragmentType,
|};
export type RelayResolverModelTestInterfaceFragment$key = {
  +$data?: RelayResolverModelTestInterfaceFragment$data,
  +$fragmentSpreads: RelayResolverModelTestInterfaceFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "TodoDescription____relay_model_instance"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true
  },
  "name": "RelayResolverModelTestInterfaceFragment",
  "selections": [
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "TodoDescription",
      "backingField": {
        "alias": null,
        "args": null,
        "fragment": {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TodoModel____relay_model_instance"
        },
        "kind": "RelayResolver",
        "name": "fancy_description",
        "resolverModule": require('relay-runtime/experimental').weakObjectWrapper(require('relay-runtime/experimental').resolverDataInjector(require('./../../../relay-runtime/store/__tests__/resolvers/__generated__/TodoModel____relay_model_instance.graphql'), require('./../../../relay-runtime/store/__tests__/resolvers/TodoModel').fancy_description, '__relay_model_instance', false), '__relay_model_instance', false),
        "path": "fancy_description",
        "normalizationInfo": {
          "concreteType": "TodoDescription",
          "plural": false,
          "normalizationNode": require('./../../../relay-runtime/store/__tests__/resolvers/__generated__/TodoModel__fancy_description$normalization.graphql')
        }
      },
      "linkedField": {
        "alias": null,
        "args": null,
        "concreteType": "TodoDescription",
        "kind": "LinkedField",
        "name": "fancy_description",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "fragment": (v0/*: any*/),
            "kind": "RelayResolver",
            "name": "some_interface",
            "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./../../../relay-runtime/store/__tests__/resolvers/__generated__/TodoDescription____relay_model_instance.graphql'), require('./../../../relay-runtime/store/__tests__/resolvers/TodoDescription').some_interface, '__relay_model_instance', false),
            "path": "some_interface",
            "normalizationInfo": {
              "concreteType": null,
              "plural": false,
              "normalizationNode": require('./../../../relay-runtime/store/__tests__/resolvers/__generated__/TodoDescription__some_interface$normalization.graphql')
            }
          },
          {
            "kind": "ClientEdgeToClientObject",
            "concreteType": "ClientTypeWithNestedClientInterface",
            "backingField": {
              "alias": null,
              "args": null,
              "fragment": (v0/*: any*/),
              "kind": "RelayResolver",
              "name": "some_client_type_with_interface",
              "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./../../../relay-runtime/store/__tests__/resolvers/__generated__/TodoDescription____relay_model_instance.graphql'), require('./../../../relay-runtime/store/__tests__/resolvers/TodoDescription').some_client_type_with_interface, '__relay_model_instance', false),
              "path": "some_client_type_with_interface",
              "normalizationInfo": {
                "concreteType": "ClientTypeWithNestedClientInterface",
                "plural": false,
                "normalizationNode": require('./../../../relay-runtime/store/__tests__/resolvers/__generated__/TodoDescription__some_client_type_with_interface$normalization.graphql')
              }
            },
            "linkedField": {
              "alias": null,
              "args": null,
              "concreteType": "ClientTypeWithNestedClientInterface",
              "kind": "LinkedField",
              "name": "some_client_type_with_interface",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "client_interface",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "__typename",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "description",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          }
        ],
        "storageKey": null
      }
    }
  ],
  "type": "TodoModel",
  "abstractKey": null
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "ed136c08f4befa6c468235625659645a";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayResolverModelTestInterfaceFragment$fragmentType,
  RelayResolverModelTestInterfaceFragment$data,
>*/);
