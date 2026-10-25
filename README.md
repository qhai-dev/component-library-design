# shadcn-semi-design

shadcn/ui 架构 × **Semi Design 视觉 1:1** —— 基于 [Base UI](https://base-ui.com) 基座的 React 组件库（pnpm monorepo）。

- **64 个组件**：Button、Dialog、Table、Select、Tabs…以及 AI 聊天组件（Bubble / Message / Questionnaire 等）
- **Semi Design 令牌体系**：完整 `--semi-*` 调色板与语义变量（明暗自动翻转），圆角 3/6/12px、控件高度 24/32/40、focus 规范、浮层阴影等与 `@douyinfe/semi-ui@2.104.0` 逐像素对齐
- **Tailwind CSS v4** 源码分发模型：组件自包含（Semi 工具类直接内联，与官方 shadcn 分发形态一致），消费方自带 Tailwind 编译
- **全 Rust/Vite 工具链**：Vite（Storybook/Playground/测试）+ Rolldown（tsdown 构建）+ Oxc（oxlint/oxfmt）+ Vitest
- **测试三层**：Vitest 单测/交互测试（77 用例）+ test-runner 真浏览器 story 回归（72 用例）+ a11y 检查

## 仓库结构

```
packages/ui/          # 组件库本体（shadcn-semi-design 包）
├─ src/components/    # 一组件一目录（<name>/index.tsx + 就近 test/stories）
├─ src/internal/      # icon-placeholder、message-scroller、questionnaire、use-render、use-mobile
├─ src/styles/        # semi-tokens / base / index.css（消费方入口：仅令牌 + runtime）
└─ .storybook/        # Storybook 9（react-vite + @tailwindcss/vite）
playground/           # Vite 应用：验证 dist 产物与消费方接入（workspace:* 依赖）
```

## 快速开始（仓库根）

```bash
pnpm install
pnpm test              # 单元测试（packages/ui）
pnpm storybook         # http://localhost:6006
pnpm test-storybook    # 真浏览器跑全部 story（需先起 storybook）
pnpm dev:playground    # playground（验证 dist 产物，端口 5173）
pnpm dev:playground:src  # playground（源码直连热更模式，端口 5174）
pnpm build             # 构建全部包（ui dist + playground）
pnpm lint              # oxlint
pnpm format            # oxfmt（含 Tailwind 类排序）
pnpm typecheck         # 全部包
```

CI（`.github/workflows/ci.yml`）：push/PR 自动跑 lint / format / typecheck / 单测 / 全包构建 + Storybook 静态构建的真浏览器回归。

## 在应用中使用

1. 安装：`pnpm add shadcn-semi-design`，并确保已有 `tailwindcss@^4`。

2. 在全局样式中引入（Tailwind v4 入口）：

```css
@import "tailwindcss";
@import "shadcn-semi-design/styles";

@layer base {
  html {
    @apply bg-background text-foreground;
  }
}
```

3. 使用组件：

```tsx
import { Button, Input, Dialog } from "shadcn-semi-design";

export function Demo() {
  return <Button>主要按钮</Button>;
}
```

暗色模式：给 `<html>` 加 `class="dark"`，全部 `--semi-*` 令牌自动翻转。

## Button 对照速查（Semi API → 本库写法）

| Semi 写法                                     | 本库等价写法                                                       |
| --------------------------------------------- | ------------------------------------------------------------------ |
| `<Button theme="solid" type="primary">`       | `<Button>`（default = Semi primary solid）                         |
| `<Button theme="solid" type="tertiary">`      | `<Button variant="secondary">`（灰实心）                           |
| `<Button theme="light" type="primary">`       | —（light 形态未启用，见 BUTTON-PLAN.md）                           |
| `<Button theme="borderless" type="tertiary">` | `<Button variant="ghost">`                                         |
| `<Button theme="outline" type="tertiary">`    | `<Button variant="outline">`                                       |
| `<Button theme="solid" type="danger">`        | `<Button variant="destructive">`                                   |
| `<Button size="small">`                       | `<Button size="sm">`（24px）                                       |
| `<Button size="large">`                       | `<Button size="lg">`（40px）                                       |
| `<Button loading>`                            | `<Button disabled><LoaderCircleIcon className="animate-spin" /> …` |
| `<Button icon={<IconPlus/>}>`                 | `<Button><IconPlus /> …`（children 组合）                          |
| `<Button block>`                              | `<Button className="w-full">`                                      |
| `<Button htmlType="submit">`                  | `<Button type="submit">`                                           |

完整规格与状态矩阵见 [BUTTON-PLAN.md](./BUTTON-PLAN.md)。

## 设计映射要点

| shadcn 令牌        | Semi 来源                        | 亮色                 | 暗色                    |
| ------------------ | -------------------------------- | -------------------- | ----------------------- |
| `--primary`        | `--semi-color-primary`（blue-5） | `rgb(0,100,250)`     | `rgb(84,169,255)`       |
| `--background`     | bg-0                             | `#FFFFFF`            | `#16161A`               |
| `--secondary`      | tertiary 灰按钮                  | `rgb(107,112,117)`   | `rgb(136,141,146)`      |
| `--muted/--accent` | fill-0                           | `rgba(46,50,56,.05)` | `rgba(255,255,255,.12)` |
| `--border`         | `--semi-color-border`            | `rgba(28,31,35,.08)` | `rgba(255,255,255,.08)` |

焦点体系：文本控件 = 1px `--semi-color-focus-border` 实边框；其余组件 = 2px `--semi-color-primary-light-active` outline（无 ring 阴影）。

变体映射决策：shadcn `secondary` 按钮 = Semi tertiary solid 灰（light-blue "secondary" 无对应变体）；`outline` = Semi outline（透明底 + 1px --semi-color-border + text-1）；`ghost` = Semi borderless（hover fill-0）；Alert = Semi Banner（默认 info light 底）；Badge = Semi Tag 规格（20px 高、3px 圆角、12px 字）；Toast = Semi Toast（bg-3、6px 圆角、shadow-elevated）。Semi 组件级规格的权威来源是各组件的 `semi-foundation/<component>` 源码。

## License

MIT
