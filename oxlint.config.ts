import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["typescript", "unicorn", "react", "react-hooks"],
  categories: {
    correctness: "error",
  },
  overrides: [
    {
      files: ["scripts/**/*.mjs", "*.config.{js,ts,mjs}"],
      env: { node: true },
    },
    {
      // Vendored sources keep their original shape; lint noise here is not actionable.
      files: ["**/src/internal/**"],
      rules: {
        "typescript/no-explicit-any": "off",
        "no-unused-vars": "off",
        "react/set-state-in-effect": "off",
        "react/refs": "off",
        "react/immutability": "off",
        "react-hooks/exhaustive-deps": "off",
        "react-hooks/rules-of-hooks": "off",
      },
    },
    {
      // Upstream shadcn carousel wiring calls setter props inside effects by design.
      files: ["**/src/components/carousel/**"],
      rules: {
        "react/set-state-in-effect": "off",
      },
    },
    {
      files: ["**/*.{test,stories}.tsx"],
      rules: {
        "typescript/no-non-null-assertion": "off",
      },
    },
  ],
  ignorePatterns: ["dist", "node_modules", "storybook-static", "coverage", "public"],
});
