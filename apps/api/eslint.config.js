import base from '@repo/eslint-config/base.config.js';

/** @type {import("typescript-eslint").Config} */
export default [
  ...base,
  {
    rules: {
      '@typescript-eslint/no-extraneous-class': [
        'error',
        {
          allowEmpty: true,
        },
      ],
    },
  },
  {
    ignores: ['dist'],
  },
];
