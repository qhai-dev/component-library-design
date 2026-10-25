# Button 改造方案（定稿）— API = shadcn 官方 · 视觉 = Semi Design

> 原则（全局适用）：**API 与组件形态 1:1 对齐官方 shadcn Button，不增不减；UI 样式 1:1 取自 Semi Design**。
> Semi 的配置式 API（type/theme/loading/icon/block/colorful/noHorizontalPadding/iconPosition）一律不引入，
> 全部有 shadcn 惯用写法替代（§5）。

---

## 1. 双基准

| 基准         | 文件                                                                  | 用途                                                                        |
| ------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **API 基准** | `shadcn-demo/src/components/ui/button.tsx`（官方 base-nova）          | props 签名、variant/size 枚举、渲染结构（data-slot/data-variant/data-size） |
| **视觉基准** | `semi-design/packages/semi-foundation/button/{button,variables}.scss` | 20 组合态颜色、高度、padding、圆角                                          |

---

## 2. API 对照（与官方 shadcn Button）

| 项         | 官方 shadcn                                                 | 本库           | 状态                         |
| ---------- | ----------------------------------------------------------- | -------------- | ---------------------------- |
| props 签名 | `ButtonPrimitive.Props & VariantProps`                      | 同             | ✅ 一致                      |
| `variant`  | default / secondary / destructive / outline / ghost / link  | 同六值         | ✅ 一致                      |
| `size`     | default / xs / sm / lg / icon / icon-xs / icon-sm / icon-lg | 同八值         | ✅ 一致                      |
| 渲染 attrs | `data-slot` + `data-variant` + `data-size`                  | 仅 `data-slot` | ⚠️ 补 data-variant/data-size |
| `asChild`  | Base UI render prop 天然支持                                | 透传           | ✅                           |
| 原生属性   | 透传（type/aria-*/onClick/ref…）                            | 透传           | ✅                           |

---

## 3. 视觉映射（shadcn variant → Semi 形态，已实现）

| variant       | Semi 形态                    | default                                      | hover                  | active                  | disabled                      |
| ------------- | ---------------------------- | -------------------------------------------- | ---------------------- | ----------------------- | ----------------------------- |
| `default`     | primary + solid（蓝实心）    | `bg-primary` 白字                            | `bg-primary-hover`     | `bg-primary-active`     | `bg-disabled` + disabled-text |
| `secondary`   | tertiary + solid（灰实心）   | `bg-secondary`（=--semi-color-tertiary）白字 | `bg-secondary-hover`   | `bg-secondary-active`   | 同上                          |
| `destructive` | danger + solid（红实心）     | `bg-destructive` 白字                        | `bg-destructive-hover` | `bg-destructive-active` | 同上                          |
| `outline`     | tertiary + outline（灰描边） | 透明 + `border-border` + text-1              | `bg-muted`             | `bg-muted-hover`        | 透明 + `border-disabled`      |
| `ghost`       | tertiary + borderless        | 透明 + text-1                                | `bg-muted`             | `bg-muted-hover`        | 透明 + disabled-text          |
| `link`        | borderless 链接              | `text-primary`                               | 下划线                 | —                       | disabled-text                 |

公共：圆角 3px、default 高 32 / sm 24 / lg 40（Semi 控件高度）、字重 600、无过渡（Semi 即时切换）、
focus-visible = `outline-2 outline-ring`（destructive 用 destructive-light-active）。

**刻意保留的 shadcn 行为**（不随 Semi）：

- `disabled: pointer-events-none`（官方做法；Semi 用 cursor-not-allowed，二者取 shadcn，代价是不显示禁用光标）
- hover/active 色值直接写在 disabled 之外的分支，无 `transition`（Semi 即时）

---

## 4. 审计结论与微调项

逐行比对后的结论：**API 已 1:1、视觉已 Semi 1:1，仅两处微调**：

| #   | 微调                                               | 说明                                                                                                                    |
| --- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1   | 补 `data-variant={variant}` `data-size={size}`     | 官方渲染结构对齐；同时为使用方提供 CSS 定点能力（`data-[variant=outline]:`）                                            |
| 2   | 移除死代码 `has-data-[icon=inline-start/end]:px-*` | 该模式要求元素带 `data-icon` 属性——children 组合模式下永不触发；Semi 是均匀 padding（px-3 + gap-2），无需图标内边距微调 |

**已确认的刻意差异**（对照官方 shadcn，均源自 Semi）：

- 官方 `sm=h-7(28px)` → 本库 `sm=h-6(24px)`（Semi small）
- 官方 `active:translate-y-px`、`transition-all` → 无（Semi 即时、无位移）
- 官方 `disabled:opacity-50` → 实色 disabled 令牌（Semi）
- 官方 destructive 为浅色底（bg-destructive/10）→ Semi danger 实心
- 官方 focus 用 ring-3 → Semi outline-2

---

## 5. Semi API → shadcn 惯用写法对照（不引入 Semi props 的替代）

| Semi API                                   | shadcn 惯用写法                                                                |
| ------------------------------------------ | ------------------------------------------------------------------------------ |
| `<Button loading>`                         | `<Button disabled><LoaderCircleIcon className="animate-spin" /> 继续</Button>` |
| `<Button icon={<IconPlus/>}>新建</Button>` | `<Button><IconPlus /> 新建</Button>`                                           |
| `<Button iconPosition="right">`            | `<Button>新建 <IconPlus /></Button>`                                           |
| `<Button block>`                           | `<Button className="w-full">`                                                  |
| `<Button circle>`                          | `<Button size="icon" className="rounded-full">`                                |
| `<Button noHorizontalPadding>`             | `<Button className="px-0">`                                                    |
| `<Button htmlType="submit">`               | `<Button type="submit">`（原生属性）                                           |
| `<Button theme="solid" type="danger">`     | `<Button variant="destructive">`                                               |
| `<Button theme="light" type="warning">`    | —（无对应变体；Semi warning 形态按需时加 `variant="warning"`，视觉令牌已备）   |

---

## 6. 实施步骤

1. **微调**：button/index.tsx 补 `data-variant/data-size`、删两处死代码 `has-data-[icon=…]`
2. **验证**：typecheck → 单测 → storybook `Button` 矩阵目视（六变体 × 尺寸 × 暗色）
3. **文档**：README 补 §"Button 对照速查"（§5 表）

---

## 7. 验收

- 与 `shadcn-demo/src/components/ui/button.tsx` 逐 props 对比：签名/枚举/attrs 完全一致
- 视觉值抽查：default=rgb(0,100,250)、secondary=灰、destructive=rgb(249,57,32)、高 32px、圆角 3px、字重 600
- 20 组合态中未采用的 14 组（light/borderless/outline × 各色）保留在 compoundVariants 之外——如未来需要
  Semi 的 light/borderless 形态，按视觉矩阵（§3）扩展 variant 值即可，令牌层已就绪
