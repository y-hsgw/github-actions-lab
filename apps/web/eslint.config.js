// @ts-check

import base from "@repo/eslint-config/base.config.js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/** @type {import("typescript-eslint").Config} */
const config = [
  ...compat.config({ extends: "next/core-web-vitals" }),
  ...base,
  {
    rules: {
      "react/self-closing-comp": "error",
    },
  },
  {
    ignores: [".next"],
  },
];

export default config;
