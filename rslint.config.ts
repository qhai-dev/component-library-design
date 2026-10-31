// Migrated from oxlint.config.ts (see docs/README for mapping notes).
// Oxlint's `categories: { correctness: "error" }` maps here to the
// recommended presets of the same plugin groups; the per-file overrides
// below preserve the original suppression intents.
import {
  defineConfig,
  js,
  ts,
  reactPlugin,
  reactHooksPlugin,
} from "@rslint/core";

export default defineConfig([
  js.configs.recommended,
  ts.configs.recommended,
  reactPlugin.configs.recommended,
  reactHooksPlugin.configs.recommended,
  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/storybook-static/**",
      "**/coverage/**",
      "**/public/**",
    ],
  },
  {
    files: ["scripts/**/*.mjs", "**/*.config.{js,ts,mjs}"],
    languageOptions: {
      globals: {
        process: "readonly",
        console: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
  },
  {
    // Vendored sources keep their original shape; lint noise here is not actionable.
    files: ["**/src/internal/**"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/rules-of-hooks": "off",
      "no-useless-assignment": "off",
    },
  },
  {
    // Upstream shadcn carousel wiring calls setter props inside effects by design.
    files: ["**/src/components/carousel/**"],
    rules: {
      "react-hooks/exhaustive-deps": "off",
    },
  },
  {
    files: ["**/*.{test,stories}.tsx"],
    plugins: ["react-hooks"],
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
      "react-hooks/rules-of-hooks": "off",
    },
  },
]);
