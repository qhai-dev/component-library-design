// Deterministic rebuild of the library from the git-restored shadcn sources.
// Run from repo root: node scripts/rebuild-all.mjs
import {
  readFileSync,
  writeFileSync,
  readdirSync,
  mkdirSync,
  cpSync,
  existsSync,
} from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const SRC_UI = join(root, "apps/v4/registry/bases/base/ui")
const SRC_HOOKS = join(root, "apps/v4/registry/bases/base/hooks")
const REACT_PKG = join(root, "packages/react/src")
const comp = join(root, "src/components")
const internal = join(root, "src/internal")

const rewrite = (src) =>
  src
    .replaceAll("@/registry/bases/base/ui/", "../")
    .replaceAll(
      "@/app/(create)/components/icon-placeholder",
      "../internal/icon-placeholder",
    )
    .replaceAll("@shadcn/react/questionnaire", "../../internal/questionnaire")
    .replaceAll(
      "@shadcn/react/message-scroller",
      "../../internal/message-scroller",
    )
    .replaceAll(
      "@/registry/bases/base/hooks/use-mobile",
      "../../internal/use-mobile",
    )

// ---------- A. components ----------
mkdirSync(comp, { recursive: true })
const files = readdirSync(SRC_UI).filter(
  (f) => f.endsWith(".tsx") && f !== "_registry.ts",
)
for (const f of files) {
  let src = rewrite(readFileSync(join(SRC_UI, f), "utf8"))
  // mechanical Semi cleanup: disabled dimming + color transitions (Semi is instant)
  src = src
    .replace(
      /(^|[\s"'`,(])([^\s"'`,]*disabled[^\s"'`,]*:opacity-50)(?=$|[\s"'`,)])/gm,
      "$1",
    )
    .replace(
      /(^|[\s"'`,(])(transition-all|transition-colors)(?=$|[\s"'`,)])/gm,
      "$1",
    )
  mkdirSync(join(comp, f.replace(/.tsx$/, "")), { recursive: true })
  writeFileSync(join(comp, f.replace(/.tsx$/, ""), "index.tsx"), src, "utf8")
}
console.log(`A. components: ${files.length}`)

// ---------- B. internals ----------
for (const name of ["questionnaire", "message-scroller", "use-render"]) {
  const dst = join(internal, name)
  mkdirSync(dst, { recursive: true })
  for (const f of readdirSync(join(REACT_PKG, name))) {
    if (/\.(ts|tsx)$/.test(f) && !/\.test\.|\.perf\.|browser\.test/.test(f)) {
      cpSync(join(REACT_PKG, name, f), join(dst, f))
    }
  }
}
cpSync(join(SRC_HOOKS, "use-mobile.ts"), join(internal, "use-mobile.ts"))
console.log("B. internals vendored")

// ---------- C. fixed overrides ----------
writeFileSync(
  join(comp, "resizable", "index.tsx"),
  `"use client"

import { cn } from "cn"
import * as ResizablePrimitive from "react-resizable-panels"

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "cn-resizable-panel-group flex h-full w-full aria-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "cn-resizable-handle relative flex w-px items-center justify-center bg-[var(--semi-color-border)] outline-none after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline focus-visible:outline-[var(--semi-color-primary-light-active)] aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="cn-resizable-handle-icon z-10 flex shrink-0" />
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizableHandle, ResizablePanel, ResizablePanelGroup }
`,
  "utf8",
)

writeFileSync(
  join(internal, "icon-placeholder.tsx"),
  `import * as React from "react"
import * as LucideIcons from "lucide-react"

/**
 * Stand-in for the registry's icon placeholder: renders the requested lucide
 * icon by name. Kept as the single icon surface so components stay
 * icon-library-agnostic (the site version swapped lucide/tabler/... at runtime;
 * the alternate library names are accepted and ignored).
 */
function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  className,
  ...props
}: React.ComponentProps<"svg"> & {
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
}) {
  const icons = LucideIcons as unknown as Record<
    string,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  >
  const Component = icons[lucide || "SquareIcon"] ?? icons.SquareIcon
  return <Component className={className} {...props} />
}

export { IconPlaceholder }
`,
  "utf8",
)
console.log("C. overrides: resizable / icon-placeholder")

// ---------- D. questionnaire patch (process + FormEvent cast) ----------
{
  const p = join(internal, "questionnaire", "use-questionnaire-root.ts")
  if (existsSync(p)) {
    let s = readFileSync(p, "utf8")
    s = s.replace(
      "    onSubmit?.(event)",
      "    onSubmit?.(event as unknown as Parameters<NonNullable<typeof onSubmit>>[0])",
    )
    writeFileSync(p, s, "utf8")
  }
}

// ---------- E. barrel ----------
{
  const names = files.map((f) => f.replace(/\.tsx$/, "")).sort()
  const barrel =
    `export { Toaster as SonnerToaster } from "./components/sonner"\n` +
    names.map((n) => `export * from "./components/${n}"`).join("\n") +
    "\n"
  writeFileSync(join(root, "src/index.ts"), barrel, "utf8")
  console.log(`E. barrel: ${names.length} modules`)
}

console.log(
  "rebuild-all: components/internals done (tests & stories via gen-tests/fix-tests)",
)
