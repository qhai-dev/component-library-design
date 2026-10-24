// Builds the docs site: runs the ui package's storybook build and copies the
// static output here. Deploy target for GitHub Pages / Vercel / Netlify.
// Run from apps/docs: pnpm build   (or repo root: pnpm -r build)
import { spawnSync } from "node:child_process"
import { cpSync, existsSync, rmSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const ui = join(here, "..", "..", "..", "packages", "ui")
const out = join(here, "..", "dist")

// Invoke the storybook CLI from node_modules (pnpm hoists bins to the
// workspace root; prefer the ui package's own copy when present).
const binName = process.platform === "win32" ? "storybook.CMD" : "storybook"
const candidates = [
  join(ui, "node_modules", ".bin", binName),
  join(ui, "..", "..", "node_modules", ".bin", binName),
]
const sbCli = candidates.find((p) => existsSync(p))
if (!sbCli) {
  console.error("storybook CLI not found in", candidates)
  process.exit(1)
}
const result = spawnSync(`"${sbCli}"`, ["build", "--quiet"], {
  cwd: ui,
  stdio: "inherit",
  shell: process.platform === "win32",
})
if (result.status !== 0) {
  console.error("storybook build failed")
  process.exit(result.status ?? 1)
}

const built = join(ui, "storybook-static")
if (!existsSync(built)) {
  console.error("storybook-static not found — ui build-storybook failed?")
  process.exit(1)
}

rmSync(out, { recursive: true, force: true })
cpSync(built, out, { recursive: true })
console.log(`docs built at ${out}`)
