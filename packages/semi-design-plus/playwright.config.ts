import { defineConfig } from "playwright/test";

/**
 * test-storybook drives its own Playwright browser; this config only pins
 * browser/chromium and CI-friendly settings (retries, workers).
 */
export default defineConfig({
  use: {
    browserName: "chromium",
  },
  retries: process.env.CI ? 2 : 0,
  workers: 4,
  reporter: process.env.CI ? [["line"], ["html", { open: "never" }]] : "line",
});
