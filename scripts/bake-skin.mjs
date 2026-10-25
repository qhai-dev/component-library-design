// Bakes the Semi skin into components — faithful re-implementation of the
// official shadcn transform (shadcn/dist/utils createStyleMap + transformStyle):
//   1. .cn-* rules in skin.css -> utilities, merged via twMerge (original literal wins conflicts)
//   2. keep-set tokens (cn-font-heading, cn-rtl-flip, cn-menu-target,
//      cn-menu-translucent, cn-logical-sides) are NEVER replaced or dropped
//   3. unmapped tokens are dropped
// Run from repo root: node scripts/bake-skin.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(join(root, "packages/ui", "package.json"));
const { twMerge } = require("cn");

const skinPath = join(root, "packages/ui/src/styles/skin.css");
const compDir = join(root, "packages/ui/src/components");

/** tokens the official transform never touches */
const KEEP = new Set([
  "cn-menu-target",
  "cn-menu-translucent",
  "cn-logical-sides",
  "cn-rtl-flip",
  "cn-font-heading",
]);
const TOKEN_RE = /\bcn-[\w-]+\b/g;

// ---- 1. style map ----
const css = readFileSync(skinPath, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
const map = new Map();
for (const m of css.matchAll(/(^|\n)\s*(\.cn-[\w-]+)\s*\{([^}]*)\}/g)) {
  const utilities = [...m[3].matchAll(/@apply([^;]*);?/g)]
    .map((a) => a[1].trim())
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  if (!utilities) continue;
  const key = m[2].slice(1);
  if (map.has(key)) throw new Error(`duplicate selector: ${m[2]}`);
  map.set(key, utilities);
}
console.log(`style map: ${map.size} classes`);

// ---- 2. per-literal transform (mirrors official M()/p()/E()) ----
function bakeLiteral(literal) {
  const tokens = [...new Set(literal.match(TOKEN_RE) || [])];
  if (!tokens.length) return null;
  const utilities = tokens.filter((t) => !KEEP.has(t) && map.has(t)).map((t) => map.get(t));
  const rest = literal
    .replace(TOKEN_RE, (t) => (KEEP.has(t) ? t : ""))
    .replace(/\s+/g, " ")
    .trim();
  const merged = utilities.length ? twMerge(utilities.join(" "), rest) : rest;
  return merged;
}

function transformSource(src) {
  let changed = 0;
  // process double- and single-quoted string literals that contain cn- tokens
  const out = src.replace(/"([^"\\\n]*)"|'([^'\\\n]*)'/g, (full, dq, sq) => {
    const literal = dq !== undefined ? dq : sq;
    if (!/cn-[\w-]+/.test(literal)) return full;
    const baked = bakeLiteral(literal);
    if (baked === null || baked === literal) return full;
    changed++;
    const q = dq !== undefined ? '"' : "'";
    return baked === "" ? q + q : q + baked + q;
  });
  return { out, changed };
}

const HOOK_RE =
  /use(State|Effect|Ref|Context|Reducer|Memo|Callback|LayoutEffect|Optimistic|Transition|Id)\b/;

let filesChanged = 0;
let totalReplaced = 0;
const dropped = new Map();
const dirs = readdirSync(compDir).filter((d) => !d.endsWith(".tsx"));

for (const dir of dirs) {
  const file = join(compDir, dir, "index.tsx");
  let src = readFileSync(file, "utf8");
  const before = src;

  // snapshot tokens pre-transform for the dropped report
  for (const t of new Set(src.match(TOKEN_RE) || [])) {
    if (!KEEP.has(t) && !map.has(t)) {
      dropped.set(t, (dropped.get(t) || 0) + 1);
    }
  }

  const { out, changed } = transformSource(src);
  if (changed > 0) {
    src = out;
    totalReplaced += changed;
  }
  if (src.startsWith('"use client"') && !HOOK_RE.test(src)) {
    src = src.replace(/^"use client"\r?\n\r?\n/, "");
  }
  if (src !== before) {
    writeFileSync(file, src, "utf8");
    filesChanged++;
  }
}

// ---- 3. leftovers must be keep-set only (inside string literals) ----
const leftovers = new Set();
for (const dir of dirs) {
  const src = readFileSync(join(compDir, dir, "index.tsx"), "utf8");
  for (const m of src.matchAll(/"([^"\\\n]*)"|'([^'\\\n]*)'/g)) {
    const literal = m[1] ?? m[2] ?? "";
    for (const t of literal.match(TOKEN_RE) || []) leftovers.add(t);
  }
}
const unexpected = [...leftovers].filter((t) => !KEEP.has(t));
console.log(`done: ${filesChanged} files, ${totalReplaced} literals baked`);
console.log(`kept tokens: ${[...leftovers].sort().join(", ") || "(none)"}`);
if (unexpected.length) {
  console.error(`UNEXPECTED leftovers:`, unexpected.join(", "));
  process.exit(1);
}
if (dropped.size) {
  console.log(`dropped markers (${dropped.size}):`, [...dropped.keys()].sort().join(", "));
}
