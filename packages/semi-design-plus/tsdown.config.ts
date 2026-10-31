import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: "esm",
  dts: true,
  sourcemap: true,
  clean: true,
  // keep .js/.d.ts names (this is an ESM-only package under "type": "module")
  outExtensions: () => ({ js: ".js", dts: ".d.ts" }),
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "@base-ui/react",
    "class-variance-authority",
    "cn",
    "cmdk",
    "embla-carousel-react",
    "input-otp",
    "lucide-react",
    "next-themes",
    "react-day-picker",
    "react-hook-form",
    "react-resizable-panels",
    "recharts",
    "sonner",
  ],
});
