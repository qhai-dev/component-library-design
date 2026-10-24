import { defineConfig } from "oxfmt"

export default defineConfig({
  semi: false,
  singleQuote: false,
  printWidth: 80,
  sortPackageJson: false,
  sortTailwindcss: {
    stylesheet: "./packages/ui/.storybook/preview.css",
  },
  ignorePatterns: [],
})
