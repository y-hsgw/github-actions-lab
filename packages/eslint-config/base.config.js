// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import vitest from "@vitest/eslint-plugin";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    files: ["**/__tests__/**"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      "vitest/consistent-test-it": ["error", { fn: "it" }],
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  }
);
