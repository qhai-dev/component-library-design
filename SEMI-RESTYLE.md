# shadcn-semi-design — Semi Design 1:1 风格改造说明

本仓库是 [shadcn-ui/ui](https://github.com/shadcn-ui/ui) 的 fork，已按需求将**整体 UI 风格 1:1 替换为 [Semi Design](https://semi.design)（@douyinfe/semi-ui v2.104.0）**。原 `ui/` 与 `semi-design/` 两个 fork 目录仅作只读参考，未做任何修改；全部改造在本目录完成。

## 改造总览

| 层       | 文件                                            | 说明                                                                                                                                                                                                                                                                                      |
| -------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 设计令牌 | `apps/v4/app/semi-tokens.css`                   | 由 `scripts/semi/convert-tokens.mts` 从 `semi-theme-default`（_palette.scss + global.scss）1:1 转译：完整 `--semi-*` 调色板（RGB 三元组）+ 语义色 + 圆角 + 阴影，`.dark` 下自动翻转                                                                                                       |
| 令牌接入 | `apps/v4/app/globals.css`                       | shadcn 全部 CSS 变量（--primary/--background/--secondary/--muted/--border/--ring/--chart-_/sidebar-_/code 等）改为 `var(--semi-color-*)` 引用；圆角体系固定为 Semi 的 3/6/12px；`--font-sans` 追加 Semi 中文回退栈；body 14px/20px；新增 `shadow-elevated` 工具类                         |
| 颜色主题 | `apps/v4/registry/themes.ts`                    | 7 个基础色 + 17 个 accent 主题全部重写为 Semi 调色板引用（var() 自动翻转明暗）；RADII 档位改为 Semi 圆角语义                                                                                                                                                                              |
| 皮肤     | `apps/v4/registry/styles/style-semi.css`        | 单一事实来源：61 个组件分节、约 440 条 `cn-*` 规则全部按 Semi 规格重写（控件高 24/32/40、圆角 3/6/12、focus=文本控件 1px 实边框/其余 2px outline primary-light-active、hover 走 fill-0/1/2、浮层 shadow-elevated、菜单项 0 圆角 px16/py8、Switch 开启=success 绿、Progress=success 绿等） |
| 皮肤散射 | `scripts/semi/merge-and-scatter.mjs`            | 将 style-semi.css 散射到 8 个皮肤文件（vega/nova/lyra/maia/mira/luma/sera/rhea 全部替换为同一 Semi 内容，仅作用域类名不同——“彻底替换”）                                                                                                                                                   |
| 组件源   | `apps/v4/registry/new-york-v4/ui/*`             | 61 个硬编码样式组件同步 Semi 化（站点外壳大量直接引用这些组件）                                                                                                                                                                                                                           |
| 基座微调 | `apps/v4/registry/bases/{radix,base,aria}/ui/*` | 移除 `*:disabled:opacity-50` 与 `transition-all/colors`（Semi 禁用态用 disabled-bg/disabled-text 实色、状态即时切换），视觉全部交给皮肤层                                                                                                                                                 |

## 关键映射（light / dark）

- `--primary` = `--semi-color-primary` = rgb(0,100,250) / rgb(84,169,255)（blue-5）
- `--background` = bg-0：#FFFFFF / #16161A；`--popover` = bg-3（浮层）；dialog 用 bg-2；`--card` = bg-0/bg-1
- `--secondary`（按钮灰）= `--semi-color-tertiary`（Semi tertiary solid 灰按钮）
- `--muted/--accent` = fill-0（rgba(46,50,56,.05) / rgba(255,255,255,.12)）
- `--border/--input` = `--semi-color-border`（rgba(28,31,35,.08) / rgba(255,255,255,.08)）
- `--destructive` = danger red-5；`--ring` = primary-light-active（焦点 outline）
- `--chart-1..5` = Semi vchart 数据色板 data-0..4
- 圆角：rounded-sm/md/lg=3px（控件）、xl/2xl=6px（菜单/浮层/卡片）、3xl=12px（Modal）
- 阴影：浮层统一 `shadow-elevated` = `0 0 1px rgba(0,0,0,.3), 0 4px 14px rgba(0,0,0,.1)`（dark 含 inset 1px 白描边）

## 与 Semi 的差异决策

- shadcn `secondary` 按钮映射为 Semi **tertiary solid 灰**（Semi 的 neutral 实心按钮）；Semi 的 light-blue “secondary” 无对应变体
- shadcn `outline` = Semi **outline（tertiary）**：透明底 + 1px --semi-color-border + text-1
- shadcn `ghost` = Semi **borderless（tertiary）**：hover fill-0
- Alert 默认变体 = Semi Banner info（蓝底 light）；destructive = danger light
- Badge = Semi Tag 规格（20px 高、3px 圆角、12px 字）
- Toast(toaster) = Semi Toast（bg-3、6px 圆角、shadow-elevated）
- CLI preset/发布链路按需求暂未改动（PRESET_STYLES 未加 semi 项）；themes.ts 的值是 var() 引用，独立于本站使用时需带上 semi-tokens.css

## 参照与校验

- `reference/semi/`：独立 npm + Vite playground，安装 `@douyinfe/semi-ui@2.104.0`（与 fork 源码同版本）渲染对照组件（`npm run dev`，端口 4173；CSS 走 vite alias，绕过包 exports 限制）
- 校准方式：双侧 `getComputedStyle` 数值比对。已验证（light）：Button default/secondary/ghost、Input 语法（fill-0→fill-1→focus 蓝边）、Switch 开启=success 绿 rgb(59,179,70)、tokens 全量一致；dark 模式经 `.dark` 自动翻转验证
- 重新构建：`pnpm --filter=v4 registry:build --style all`（皮肤改动后必须重跑，`apps/v4/styles/` 为生成物）
- 本地运行：`pnpm --filter=v4 dev`（端口 4000，首编译较慢）

## 维护脚本

- `scripts/semi/convert-tokens.mts` — Semi SCSS → semi-tokens.css（令牌升级时重跑）
- `scripts/semi/merge-and-scatter.mjs` — 合并代理分节产物并散射 8 皮肤
- `scripts/semi/strip-disabled-opacity.mjs` — 基座源码去除 disabled 透明度/过渡（幂等）
- `scripts/semi/CONVENTIONS.md` — Semi 皮肤转换规范（后续新组件遵循）

---

## 2026-10 组件库化重构

仓库已从 shadcn 文档站 monorepo 重构为**单包组件库**（保留 .git 历史）：

- 组件 = **Base UI 基座** 64 个（`src/components/`，全部 Semi 化，含 AI 聊天组件）
- 样式 = `src/styles/`：`semi-tokens.css`（Semi 全量令牌）+ `base.css`（data-* 变体）+ `skin.css`（去作用域的 .cn-* Semi 皮肤）+ `index.css`（消费方入口，含 shadcn→Semi 变量映射与固定圆角体系）
- 测试 = Vitest + Testing Library（64 文件 77 用例全绿；jsdom polyfill：PointerEvent/matchMedia/ResizeObserver/IntersectionObserver/scrollIntoView）
- Storybook 9 = `.storybook/`（react-vite + @tailwindcss/vite，明暗切换），样式经 preview.css 的 `@import "tailwindcss" + 库样式` 引入——同时验证了消费方接入模型
- 构建 = tsup ESM+dts；`package.json` exports：`.` 与 `./styles`
- 已删除：apps/（v4 文档站）、packages/（CLI 等）、templates/、skills/、reference/（Semi 参照 playground）等全部非库内容
- radix / aria 两套基座已按需求移除，仅保留 base

维护脚本（`scripts/`）：`migrate.mjs`（初始迁移，留档）、`gen-tests.mjs` + `fix-tests.mjs`（测试/故事生成）。
