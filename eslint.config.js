// @ts-check
import config from '@seokminhong/configs/eslint';
import jsx from '@seokminhong/configs/eslint/jsx';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
const configs = [
  ...config({
    envs: ['node'],
    extensions: [jsx()],
  }),
  {
    ignores: ['dist'],
  },
];

export default configs;
