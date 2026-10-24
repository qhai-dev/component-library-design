// One-shot restructure: flat component files -> one directory per component
// (semi-design layout): components/<name>/index.tsx + <name>.test.tsx + <name>.stories.tsx
// Run from repo root: node scripts/per-component-dirs.mjs
import {
  readFileSync,
  writeFileSync,
  readdirSync,
  mkdirSync,
  renameSync,
  existsSync,
} from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const dir = join(root, "src/components")

const names = readdirSync(dir)
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => f.replace(/\.tsx$/, ""))

// 1. move files into directories
for (const name of names) {
  const target = join(dir, name)
  mkdirSync(target, { recursive: true })
  renameSync(join(dir, `${name}.tsx`), join(target, "index.tsx"))
  for (const suffix of ["test", "stories"]) {
    const src = join(dir, `${name}.${suffix}.tsx`)
    if (existsSync(src)) renameSync(src, join(target, `${name}.${suffix}.tsx`))
  }
}
console.log(`moved ${names.length} components into directories`)

// 2. rewrite imports inside every component directory
const nameSet = new Set(names)
for (const name of names) {
  const target = join(dir, name)
  for (const f of readdirSync(target)) {
    if (!f.endsWith(".tsx")) continue
    const p = join(target, f)
    let s = readFileSync(p, "utf8")
    s = s
      // cross-component imports: ./button -> ../button
      .replace(/from "\.\/([a-z0-9-]+)"/g, (m, other) =>
        nameSet.has(other) && other !== name ? `from "../${other}"` : m,
      )
      // same-component import in test/stories: ./<name> -> ./index
      .replace(`from "./${name}"`, 'from "./index"')
      // internal deps are one level deeper now
      .replace(/from "\.\.\/internal\//g, 'from "../../internal/')
    writeFileSync(p, s, "utf8")
  }
}
console.log("imports rewritten")
