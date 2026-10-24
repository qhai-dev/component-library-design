docs deployment shell. `pnpm -r build` builds:

1. packages/ui -> dist/ (library) + storybook-static/ (via docs build step)
2. apps/docs -> dist/ (copy of storybook-static; deploy this folder)
3. apps/playground -> dist/ (static demo of the built library artifacts)
