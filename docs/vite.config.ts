import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
// default: verify the built dist artifacts; VITE_LIB_SOURCE=src: hot dev against source
const libSource = process.env.VITE_LIB_SOURCE === "src";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: libSource
    ? {
        alias: [
          {
            find: /^shadcn-semi-design$/,
            replacement: resolve(here, "../packages/ui/src/index.ts"),
          },
          {
            find: /^shadcn-semi-design\/styles$/,
            replacement: resolve(here, "../packages/ui/src/styles/index.css"),
          },
        ],
      }
    : {},
  server: { port: libSource ? 5174 : 5173, strictPort: true },
});
