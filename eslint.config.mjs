import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import eslintImport from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
      },
    },
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["**/dist/*", "eslint.config.mjs"],
    plugins: {
      "react-refresh": reactRefresh,
      "react-hooks": reactHooks,
      import: eslintImport,
      "typescript-eslint": tseslint.plugin,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
      "typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      "import/consistent-type-specifier-style": ["error", "prefer-inline"],
    },
  },
  prettier,
];
