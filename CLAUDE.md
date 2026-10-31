# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目定位

**shadcn/ui 的 API 架构 + Semi Design 的 1:1 视觉语言**,基于 **Base UI** 原语(不是 Radix)。组件对外暴露 shadcn 形态的复合组件与 `data-slot` 结构,内部所有视觉值取自 Semi Design 默认主题 token。

权威规格文档:`apps/docsite/spec.md`(硬性规则 §0、设计 token §1、组件映射表 §3、测试策略 §4、已知坑 §5)。**实现任何组件前先读它**,规则冲突时以 `spec.md` 为准。

## 仓库结构

pnpm workspace(`pnpm-workspace.yaml` → `apps/*`, `packages/*`),Node ≥ 20。

| 路径 | 说明 |
|---|---|
| `packages/ui` | 组件库 `shadcn-semi-design`,64 个组件,发布到 npm |
| `apps/docsite` | Rspress v2 单页文档站(包名 `docs`) |
| `apps/docsite/spec.md` | 实施规范(SPEC),唯一权威来源 |

### `packages/ui` 内部

```
src/components/<kebab-name>/index.tsx      # 组件本体,导出 Xxx + XxxVariants
src/components/<kebab-name>/<name>.test.tsx
src/components/<kebab-name>/<name>.stories.tsx
src/internal/<feature>/                    # 复杂组件的逻辑层(context/stores/hooks/geometry)
src/internal/use-render/                    # base-ui useRender 的自制替代
src/lib/cn.ts                              # twMerge(clsx(...)),全库唯一 className 合并入口
src/styles/semi-tokens.css                 # Semi 原始色板 + 语义 token(生成物,勿手改)
src/styles/base.css                        # data-* 自定义 variant、keyframes、动画 utility
src/styles/index.css                       # 入口:@theme inline 把 shadcn 变量映射到 Semi 变量
```

`src/index.ts` 是唯一导出面,新增组件必须在此加 `export * from "./components/<name>"`。

**样式三层**:`semi-tokens.css`(原始/语义 CSS 变量)→ `base.css`(自定义 variant)→ `index.css`(`@theme inline` 把 `--color-primary: var(--primary)` 之类的 shadcn 语义变量接到 Tailwind utility 上,并把 `--primary` 指向 `--semi-color-primary`)。暗色由 `.dark` 类下的 `--semi-*` 变量整体反转实现,**组件内不写 `dark:` 前缀颜色**。

### `apps/docsite` 内部

```
rspress.config.ts        # root=docs/、单页、sidebar 全为 /#comp-<slug> 锚点
docs/index.mdx           # 唯一页面:指南 + 64 个组件小节
demos/demo-registry.tsx  # 组件 demo 与描述(按分类注册)
demos/api-tables.ts      # 每个组件的 Props API 表
demos/preview.tsx        # <ComponentPreview slug> / <PropsTable>
demos/exports.generated.ts  # AUTO-GENERATED,勿手改
tailwind.css             # 全局样式(Tailwind v4 + Semi token + rp-doc 表格皮肤豁免)
```

改 demo / API 表 → 编辑 `demos/` → `pnpm --filter docs build`。(`apps/docsite/README.md` 里写的 `theme/` 目录已不存在,实际目录是 `demos/`,以文件树为准。)

## 常用命令

```bash
# 全库
pnpm build            # pnpm -r build
pnpm lint             # oxlint -c oxlint.config.ts packages
pnpm lint:fix
pnpm format           # oxfmt -c oxfmt.config.ts .
pnpm format:check
pnpm typecheck        # pnpm -r typecheck

# 组件库 packages/ui
pnpm --filter shadcn-semi-design test                    # vitest run(全量)
pnpm --filter shadcn-semi-design test -- src/components/button/button.test.tsx   # 单文件
pnpm --filter shadcn-semi-design test -t "renders a button"                     # 单个用例
pnpm --filter shadcn-semi-design test:watch
pnpm --filter shadcn-semi-design storybook                # http://localhost:6006
pnpm --filter shadcn-semi-design build-storybook
pnpm --filter shadcn-semi-design test-storybook           # 跑所有 story 的 play 函数 + a11y
pnpm --filter shadcn-semi-design test-storybook:ci       # build + serve + test-storybook

# 文档站 apps/docsite
pnpm --filter docs build      # 主验收标准,产物在 apps/docsite/doc_build/
pnpm --filter docs preview    # 预览生产产物(推荐,样式完整)
```

**文档站不要用 dev 模式开发**:`@tailwindcss/postcss@4.x` 在 rspack 增量管道中 utilities 输出为空,生产 build 才正确。用 `build` + `preview`。

## 组件实现约定(spec.md §0 硬性规则)

1. **Token 优先**:颜色一律用映射出的 utility(`bg-primary`、`text-text-2`、`border-border`),圆角用 `rounded-*`(3/6/12px 刻度),**禁止裸 hex**。
2. **`cn` 必须可覆盖**:消费者传入的 `className` 要能覆盖内置类(靠 `twMerge`)。
3. **交互态四件套**:hover / active / focus-visible / disabled 全部实现;颜色过渡 100ms(`transition-colors duration-100`)。
4. **焦点环**:用 Semi 实心主色 `--semi-color-focus-border`(#0064FA),不是半透明蓝。
5. **禁用态**:用 `cursor-not-allowed`,**不用 `pointer-events-none`** 吞掉光标。
6. **`data-slot`**:每个可寻址部分都有 `data-slot="kebab-name"`。
7. **cva**:有两个以上 variant/size 的组件一律用 `class-variance-authority`,文件顶部导出 `XxxVariants`。
8. **图标**:显式 `import { X } from "lucide-react"`,禁止 `import * as LucideIcons`;装饰性图标加 `aria-hidden`。
9. **无 `dark:` 颜色覆盖**:一切随 token 自动反转(结构性布局除外)。
10. **文件命名**:`index.tsx` / `<name>.test.tsx` / `<name>.stories.tsx`。

## 测试策略(spec.md §4)

每个组件交付四件套:vitest 单测(断言 data-slot、variant 类名、交互、回调、a11y 基线,**禁止无断言的冒烟测试**)、stories(每个 variant/size/状态一个 story,至少一个带 `play` 交互函数)、test-storybook(playwright 驱动)、light/dark 视觉抽查。

验收门槛:typecheck 通过、vitest 全绿、test-storybook 全绿、oxlint 无 error。

vitest 用 `globals: true`,`describe/it/expect` 无需 import;`@testing-library/jest-dom` 断言已在 `vitest.setup.ts` 注册。setup 文件为 jsdom 补了 PointerEvent / matchMedia / ResizeObserver / MutationObserver / IntersectionObserver / scrollIntoView 的 polyfill。

Storybook a11y 规则刻意禁用了若干条(`color-contrast`、`nested-interactive`、`aria-required-children` 等),原因记录在 `.storybook/preview.ts` 注释里——不要随手重新开启。

## 已知坑(spec.md §5,踩坑前先看)

- **Base UI 不是 Radix**:Menu.Item 的回调是 `onClick`(非 `onSelect`);状态用 `data-active:` / `data-open:` / `data-checked:` 变体,不是 `data-[state=...]`。
- **lucide 图标名**:`CircleInfo` / `TickCircle` / `CircleWarning` 不存在,用 `Info` / `CircleCheck` / `TriangleAlert` / `CircleAlert`。
- **jsdom + Tailwind**:带变体前缀的类在断言时要写完整字符串。
- `Avatar.Image` 在 jsdom 永远不触发 load,只渲染 Fallback。
- 断言类名时注意 `font-semibold`(600)而非 `font-bold`(700)。

## 样式/文档的特殊约定

- **Rspress 表格皮肤豁免**:Rspress 默认主题给 `.rp-doc` 内所有 `table/td/th` 加了未分层的 markdown 表格皮肤,优先级高于组件的 `@layer utilities`。`apps/docsite/tailwind.css` 里用 `revert-layer` 豁免 `table[data-slot='table']` 与 react-day-picker 的 `table.rdp-month_grid`。新增组件渲染表格出现皮肤污染时,把对应选择器加进该豁免块。
- **`semi-tokens.css` 是生成物**,由 `scripts/semi/convert-tokens.mts` 从 Semi Design 的 `semi-theme-default/scss` 转换而来,不要手改。
- **样式规格的权威来源**在仓库外的 `semi-design/packages/semi-foundation/<component>/*.scss` 与 `semi-theme-default/scss/*`,实现组件前对照它。
