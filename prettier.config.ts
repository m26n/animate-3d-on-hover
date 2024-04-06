import type { Options } from "prettier";
import type { PluginConfig } from "@ianvs/prettier-plugin-sort-imports";

const config = {
  overrides: [
    {
      editorconfig: true,
    },
  ],
  arrowParens: "always",
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
} satisfies Options & PluginConfig;

export default config;
