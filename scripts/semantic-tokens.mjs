// Sweeps components from arbitrary [var(--semi-color-*)] values to official
// semantic utility classes. New tokens are defined in packages/ui/src/styles/index.css.
// Mirrors the official transform grammar: state prefixes (hover:, aria-invalid:,
// group-has-...:, in-data-...:) are preserved; only the bracketed color changes.
// Run from repo root: node scripts/semantic-tokens.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const compDir = join(root, "packages/ui/src/components");

/** --semi-color-X -> semantic token (values defined in styles/index.css) */
const VAR_TOKEN = {
  primary: "primary",
  "primary-hover": "primary-hover",
  "primary-active": "primary-active",
  "primary-light-default": "primary-light",
  "primary-light-hover": "primary-light-hover",
  "primary-light-active": "ring",
  "primary-disabled": "primary-disabled",
  tertiary: "secondary",
  "tertiary-hover": "secondary-hover",
  "tertiary-active": "secondary-active",
  danger: "destructive",
  "danger-hover": "destructive-hover",
  "danger-active": "destructive-active",
  "danger-light-default": "destructive-light",
  "danger-light-hover": "destructive-light-hover",
  "danger-light-active": "destructive-light-active",
  info: "info",
  "info-light-default": "info-light",
  success: "success",
  "fill-0": "muted",
  "fill-1": "muted-hover",
  "fill-2": "muted-active",
  "text-0": "foreground",
  "text-1": "foreground/80",
  "text-2": "muted-foreground",
  "text-3": "foreground/35",
  "disabled-bg": "disabled",
  "disabled-text": "disabled-foreground",
  "disabled-fill": "disabled-fill",
  "disabled-border": "disabled",
  border: "border",
  "focus-border": "primary",
  "overlay-bg": "overlay",
  "bg-2": "dialog",
  "bg-4": "surface",
  white: "primary-foreground",
};

// The bracket sits right after the utility stem ("bg-" + "[var(...)]"), so
// replacing the bracket with the token name yields the semantic utility.
const bracketRe = /\[var\(--semi-color-([a-z0-9-]+)\)\]/g;
// raw rgba() over grey triplets (tooltip bg / white-tag border)
const rgbaRe = /\[rgba\(var\(--semi-grey-([0-9]+)\),([^)]*)\)\]/g;
const RGBA_TOKEN = { 2: "border-strong", 7: "tooltip" };

const dirs = readdirSync(compDir).filter((d) => !d.endsWith(".tsx"));
let changed = 0;
const leftovers = new Set();

for (const dir of dirs) {
  const file = join(compDir, dir, "index.tsx");
  let src = readFileSync(file, "utf8");
  const before = src;

  src = src.replace(bracketRe, (full, semiName) => {
    const token = VAR_TOKEN[semiName];
    if (!token) {
      leftovers.add(`${dir}: ${full}`);
      return full;
    }
    return token;
  });
  src = src.replace(rgbaRe, (full, grey) => {
    const token = RGBA_TOKEN[grey];
    if (!token) {
      leftovers.add(`${dir}: ${full}`);
      return full;
    }
    // the token value (e.g. --border-strong) carries the exact rgba + alpha
    return token;
  });

  if (src !== before) {
    writeFileSync(file, src, "utf8");
    changed++;
  }
  for (const m of src.matchAll(/\[[^[\]]*--semi-[^[\]]*\]/g)) leftovers.add(`${dir}: ${m[0]}`);
}

console.log(`swept ${changed} files`);
if (leftovers.size) {
  console.error(`REMAINING arbitrary semi values (${leftovers.size}):`);
  for (const l of [...leftovers].slice(0, 40)) console.error(" ", l);
  process.exit(1);
}
console.log("no arbitrary semi values remain");
