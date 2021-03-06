/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  babelrcRoots: ['examples/*'],
  overrides: [
    {
      plugins: [
        'babel-plugin-typescript-strip-namespaces',
        require.resolve(
          './scripts/babel-plugin-jest-replace-ts-export-assignment.js'
        ),
      ],
      presets: ['@babel/preset-typescript'],
      test: /\.tsx?$/,
    },
  ],
  plugins: [
    ['@babel/plugin-transform-modules-commonjs', {allowTopLevelThis: true}],
    '@babel/plugin-transform-strict-mode',
    '@babel/plugin-proposal-class-properties',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        shippedProposals: true,
        targets: {node: 6},
      },
    ],
  ],
};
