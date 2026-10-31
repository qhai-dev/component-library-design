# semi-design-plus 实施规范(SPEC)

> **文档站(2026-11-01 更新)**:docs 重构为 Rspress v2 单页站——打开 / 即全部内容(指南在上 + 64 个组件在下,右侧大纲锚点导航)。构建 pnpm --filter docs build(主验收);预览 pnpm --filter docs preview。dev 模式 Tailwind utilities 为空(@tailwindcss/postcss 与 rspack 增量管道的兼容问题),用 build+preview 开发,详见 docs/README.md。

> 定位:**shadcn/ui 的 API 架构 + Semi Design 的 1:1 视觉语言**。
> 组件对外暴露 shadcn 形态的复合组件与 data-slot 结构;内部所有视觉值(颜色/圆角/阴影/字号/间距/动效)取自 Semi Design 默认主题 token,禁止拍脑袋写值。
> 样式规格的权威来源:`D:\qhai-dev\web_design_system\semi-design\packages\semi-foundation\<component>\*.scss` 与 `packages\semi-theme-default\scss\*`。

---

## 0. 硬性规则(每个组件都必须满足)

1. **Token 优先**:任何颜色用 `--semi-color-*` 映射出的 Tailwind utility(如 `bg-primary`、`text-text-2`、`border-border`),任何圆角用 `rounded-*`(映射 3/6/12px),不允许出现裸 hex。
2. **cn 必须可覆盖**:使用 `clsx + tailwind-merge` 实现的 `cn`(修复 `cn@0.2.2` 纯拼接问题),保证消费方 `className` 能覆盖内置类。
3. **交互态三件套**:hover / active / focus-visible / disabled 全部按 Semi 规格实现;所有可交互元素带 `transition-colors duration-100`(Semi 按钮背景过渡 100ms)或组件对应的 Semi 时长。
4. **焦点环**:聚焦用 Semi 的实心主色 `--semi-color-focus-border`(#0064FA),而不是 40% 透明蓝。
5. **禁用态**:必须显示 `cursor-not-allowed`(不得用 `pointer-events-none` 吞掉光标),文字/背景用 `disabled-*` token。
6. **data-slot**:每个可寻址部分都有 `data-slot="kebab-name"`,与 shadcn 惯例一致。
7. **cva**:有两个以上 variant/size 的组件一律用 `class-variance-authority` 定义 variants,并在文件顶部导出 `XxxVariants`。
8. **图标**:显式 import 所需 lucide 图标(禁止 `import * as LucideIcons` 运行时取),装饰性图标加 `aria-hidden`。
9. **暗色模式**:一切颜色随 `.dark` 下的 Semi token 自动反转,组件内不得写 `dark:` 前缀的颜色覆盖(结构性布局除外)。
10. **代码风格**:遵循仓库 oxlint/oxfmt;组件文件命名 `index.tsx`,测试 `<name>.test.tsx`,故事 `<name>.stories.tsx`。

---

## 1. 设计 Token 规范(权威值)

### 1.1 语义色(light / dark 由 `.dark` 类整体反转)

| 语义 | light | dark |
|---|---|---|
| primary | #0064FA(hover #0062D6 / active #004FB3 / disabled #98CDFD) | #54A9FF(hover #7FC1FF / active #A9D7FF / disabled #135CB8) |
| secondary | #0095EE | #40B4F3 |
| tertiary | #6B7075 | #888D92 |
| success | #3BB346 | #5DC264 |
| warning | #FC8800 | #FFAE43 |
| danger | #F93920 | #FC725A |
| link | #0064FA | 同 primary |
| text-0/1/2/3 | #1C1F23 @ 1 / .8 / .62 / .35 | #F9F9F9 @ 1 / .8 / .60 / .35 |
| bg-0..4 | #FFFFFF | #16161A / #232429 / #35363C / #43444A / #4F5159 |
| fill-0/1/2 | #2E3238 @ .05 / .09 / .13 | #FFF @ .12 / .16 / .20 |
| border | #1C1F23 @ .08 | #FFF @ .08 |
| focus-border | #0064FA | #54A9FF |
| overlay-bg | rgba(22,22,26,.6)(两种模式相同) | 同左 |

- `*-light-default/hover/active`:light 模式取对应色板 -0/-1/-2 阶;**dark 模式改为主色 -5 的 .2/.3/.4 透明度**(token 层已处理,组件直接引用)。
- danger/warning **没有** disabled token(需要时用 -light 系列)。

### 1.2 圆角

| token | 值 | 典型用途 |
|---|---|---|
| extra-small / small | 3px | button、tag、tabs、input、checkbox |
| medium | 6px | dropdown、select 弹层、菜单类 |
| large | 12px | modal、card(大容器) |
| circle | 50% | avatar、badge-dot |
| full | 9999px | 胶囊 |

### 1.3 字体排印

- 字体栈:`Inter, -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif`
- 字号-行高绑定:12/16(small)、**14/20(正文基准)**、16/22(h6)、18/24(h5)、20/28(h4)、24/32(h3)、28/40(h2)、32/44(h1)
- 字重:regular 400、**semibold 600(Semi 的 bold)**、light 200。`font-bold`(700)禁用,一律 `font-semibold`。

### 1.4 尺寸 / 间距

- 控件高度:small 24px / **default 32px** / large 40px
- 间距刻度:2 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40
- 图标:12 / 16 / 20 / 24(常用 medium 16px)
- 描边:控件 1px

### 1.5 阴影 / 动效 / 层级

- 浮层阴影 `--semi-shadow-elevated`:`0 0 1px rgba(0,0,0,.3), 0 4px 14px rgba(0,0,0,.1)`;dark 下为 `inset 0 0 0 1px rgba(255,255,255,.1), 0 4px 14px rgba(0,0,0,.25)`。
- 组件级阴影:shadow-2 `0 2px 4px rgba(0,0,0,.14), 0 0 1px rgba(0,0,0,.16)`;knob(slider)`0 4px 6px rgba(0,0,0,.1), 0 0 1px rgba(0,0,0,.3)`。
- transition:背景/边框色 100ms ease;弹层入场 fade+scale(菜单 100~150ms,modal 200ms);主题 token 层默认 0ms 的 `--semi-transition_duration-*` 不用于组件,组件写具体时长。
- z-index:modal 1000、toast 1010、popover 1030、dropdown 1050、tooltip 1060。

---

## 2. 工程基建(实现组件前先完成)

| # | 事项 | 说明 |
|---|---|---|
| B1 | 重写 `cn` | `packages/ui/src/lib/cn.ts`:`twMerge(clsx(...))`,全库替换 `from "cn"` 的 import |
| B2 | token 映射补全 | `styles/index.css` 补 `--warning`、`--warning-light`、`--focus-border`(实心主色)等缺失映射;`--ring` 改指实心 focus-border |
| B3 | 清死代码 | 删除 `button/button.css`(引用不存在 token 的遗留文件);修复 semi-tokens.css 中重复定义的 ai-background 变量;base.css 的 radix keyframes 换成自有变量 |
| B4 | 图标内联化 | 逐组件实现时用具体 lucide 图标替换 `internal/icon-placeholder` |
| B5 | 测试基建 | vitest + @testing-library 已就绪;新增 Storybook 交互测试(play 函数)+ test-storybook 接线(playwright.config + wait-on + http-server 脚本) |

---

## 3. 组件映射表(shadcn API → Semi 视觉)

> 规格列给出实现时必须先读的 semi-foundation scss。P0 = 基础件,P1 = 常用,P2 = 复杂/次要。

| # | shadcn 组件 | Semi 对应 | 规格来源(scss) | 优先级 | 实现要点 |
|---|---|---|---|---|---|
| 1 | button | Button | `button/button.scss` | P0 | 6 variant(default/outline/secondary/ghost/destructive/link)对齐 Semi light/solid/borderless/warning-danger;高 32/24/40;loading 态 |
| 2 | input | Input | `input/input.scss` | P0 | fill 底三态、focus 主色描边、size 24/32/40、prefix/suffix、validateStatus |
| 3 | textarea | TextArea | `input/textarea.scss` | P0 | 同 Input 三态;resize 行为 |
| 4 | label | Form.Label | `form/label.scss` | P0 | required 星号、disabled、optional |
| 5 | checkbox | Checkbox | `checkbox/checkbox.scss` | P0 | 16px 方框、圆角 3px、checked 主色、indeterminate |
| 6 | radio-group | Radio | `radio/radio.scss` | P0 | 16px 圆点、checked 主色 |
| 7 | switch | Switch | `switch/switch.scss` | P0 | 选中**主色蓝**(非绿)、knob 阴影、loading 态 |
| 8 | slider | Slider | `slider/slider.scss` | P1 | 轨道 4px、knob 阴影、range、tooltip |
| 9 | select | Select | `select/select.scss` | P0 | trigger 同 input;弹层 6px、同宽、选中加粗+Check |
| 10 | combobox | AutoComplete | `autoComplete/*.scss` | P2 | 可搜索输入 + 弹层 |
| 11 | native-select | Select(native) | `select/select.scss` | P2 | 外观同 Select trigger |
| 12 | date-picker / calendar | DatePicker / Calendar | `datePicker/*.scss` | P2 | react-day-picker 皮 + Semi 日历规格 |
| 13 | time-picker(并入 calendar 或独立) | TimePicker | `timePicker/*.scss` | P2 | 列表滚动选择 |
| 14 | input-otp | PinCode | `pincode/*.scss` | P2 | 等宽格子、focus 组描边 |
| 15 | input-group | InputGroup | `input/inputGroup.scss` | P1 | 拼接/包裹布局 |
| 16 | dialog | Modal | `modal/modal.scss` | P0 | 默认宽 448、标题 18px/600、header/footer 固定、mask overlay、12px 圆角 |
| 17 | alert-dialog | Modal(danger 确认) | `modal/modal.scss` | P1 | 无关闭 X、danger 主按钮 |
| 18 | sheet / drawer | SideSheet | `sideSheet/sideSheet.scss` | P1 | 右滑抽屉、header/body/footer |
| 19 | dropdown-menu | Dropdown | `dropdown/dropdown.scss` | P0 | item 高 32、hover fill-0、title 分组、danger item |
| 20 | context-menu | Dropdown | `dropdown/dropdown.scss` | P2 | 右键触发,视觉同 dropdown |
| 21 | menubar | Navigation | `navigation/navigation.scss` | P2 | 横向导航条 |
| 22 | navigation-menu | Navigation | `navigation/navigation.scss` | P2 | 同上 |
| 23 | popover | Popover | `popover/popover.scss` | P0 | 12px 内边距、6px 圆角、elevated 阴影、箭头 |
| 24 | hover-card | Popover(hover) | `popover/popover.scss` | P2 | hover 触发 |
| 25 | tooltip | Tooltip | `tooltip/tooltip.scss` | P0 | 深底 #1C1F23 90%、白字 12px、4px 圆角、三角 |
| 26 | tabs | Tabs | `tabs/tabs.scss` | P0 | line/card/button 三型;下划线 2px 主色 |
| 27 | accordion | Collapse | `collapse/collapse.scss` | P1 | header hover fill-0、展开动画 |
| 28 | collapsible | Collapsible | `collapsible/collapsible.scss` | P1 | 同上简化 |
| 29 | table | Table | `table/table.scss` | P1 | 表头 bg-1、1px 分隔、16px 水平/12px 垂直内边距、hover fill-0 |
| 30 | data-table(由 table 扩展) | Table | `table/*.scss` | P2 | 排序/选择列样式 |
| 31 | breadcrumb | Breadcrumb | `breadcrumb/breadcrumb.scss` | P1 | 分隔符、hover 色、ellipsis |
| 32 | pagination | Pagination | `pagination/pagination.scss` | P1 | item 32px、hover fill、active 主色 |
| 33 | progress | Progress | `progress/progress.scss` | P1 | 轨道 6px(fill-0)、主色条、circle 型 |
| 34 | spinner | Spin | `spin/spin.scss` | P1 | 旋转圆环、尺寸 xs~xl |
| 35 | skeleton | Skeleton | `skeleton/skeleton.scss` | P1 | fill-0 底 + shimmer |
| 36 | empty | Empty | `empty/empty.scss` | P1 | 插画区 + 标题 + 描述 |
| 37 | avatar | Avatar | `avatar/avatar.scss` | P0 | 32px、圆、overlay 计数 |
| 38 | badge | Tag/Badge | `tag/tag.scss`、`badge/badge.scss` | P0 | Tag:3px 圆角、light 系列;Badge:小红点 |
| 39 | separator | Divider | `divider/divider.scss` | P0 | 1px、虚线变体、带文字 |
| 40 | alert | Banner | `banner/banner.scss` | P1 | light 系列底色、语义图标、可关闭 |
| 41 | card | Card | `card/card.scss` | P1 | 边框 + 12px 圆角 + header/body/footer |
| 42 | scroll-area | (滚动条样式) | `global.scss` | P2 | 细滚动条 |
| 43 | resizable | Resizable | `resizable/*.scss` | P2 | handle hover 主色 |
| 44 | carousel | Carousel | `carousel/carousel.scss` | P2 | 指示点、箭头 |
| 45 | command | (cmdk 皮) | `dropdown/dropdown.scss` | P2 | 视觉套 dropdown 弹层规格 |
| 46 | toast / sonner | Toast | `toast/toast.scss` | P1 | 右上角堆叠、语义图标、关闭按钮 |
| 47 | toggle / toggle-group | Button(checked) | `button/button.scss` | P2 | 选中态 fill-2/主色 light |
| 48 | kbd | (无对应) | — | P2 | Semi 边框风格 + mono 字体 |
| 49 | field | Form.Field | `form/form.scss` | P1 | label + 控件 + 错误信息布局 |
| 50 | item | (base-nova 原语) | — | P2 | 保持中性,套 Semi fill/border |
| 51 | aspect-ratio | (无对应) | — | P2 | 保持原样 |
| 52 | chart | (recharts 皮) | — | P2 | 用 `--semi-color-data-0..19` 色板 |
| 53 | sidebar | SideBar/Nav | `sideBar/*.scss`、`navigation/*.scss` | P2 | 左侧导航规格 |
| 54 | input-group 内的 addon 等 | — | — | — | — |

> Semi 独有而 shadcn 没有的组件(tag-input、transfer、tree、cascader、rating、timeline、steps、descriptions、typography、list、grid 等)**不在本期范围**,后续按需以 shadcn 风格补充 API。

---

## 4. 测试策略

每个组件交付四件套:

1. **`<name>.test.tsx`(vitest + testing-library)**:渲染结构(data-slot 断言)、variant/size 类名、交互(hover/checked/disabled 状态变化)、回调触发、a11y 基线(role/aria)。禁止无断言的冒烟测试。
2. **`<name>.stories.tsx`**:每个 variant/size/状态一个 story,命名 `Default / Outline / Sizes / Disabled ...`,附 `play` 交互函数(点击/键盘导航断言)的 story ≥ 1 个。
3. **test-storybook**:`pnpm build-storybook && test-storybook` 跑所有 play 函数;`playwright.config.ts` 接线,CI 可复现。
4. **视觉抽查**:关键组件(P0)在 Storybook 中 light/dark 双主题人工核对 + 截图对照 semi.design 官网。

验收门槛:typecheck 通过、vitest 全绿、test-storybook 全绿、oxlint 无 error。

### 最终验收状态(2026-10-31)

| 验收项 | 结果 |
|---|---|
| vitest(64 个测试文件) | ✅ 336/336 |
| test-storybook(64 个 story 套件,含 play 交互与 a11y 检查) | ✅ 216/216 |
| tsc --noEmit | ✅ 0 错误 |
| oxlint(226 文件) | ✅ 0 errors |
| tsdown 构建(dist ESM + d.ts) | ✅ 成功 |
| storybook 构建(64 组件全部可预览) | ✅ 成功 |

> a11y 规则调优说明(preview.ts):`color-contrast`(Semi 实心语义色白字对比度固有低于 axe 阈值)、`label-content-name-mismatch`(react-day-picker 日期格已知误报)、`nested-interactive`/`scrollable-region-focusable`/`aria-required-children`(Base UI/cmdk 内部结构)、`aria-hidden-focus`/`landmark-unique`(Base UI focus-guard 与组件库 demo 环境)已记录原因后禁用;其余 a11y 规则全部生效。

### 已知坑(实现时注意)

1. **基建**(§2):cn 重写 → token 映射补全 → 死代码清理 → 测试管线接线。✅ 已完成(2026-10-31)
2. **P0 基础件**:button → input → textarea → label → checkbox → radio-group → switch → avatar → badge → separator → select → dropdown-menu → popover → tooltip → dialog → tabs
3. **P1 常用件**:alert、card、skeleton、spinner、progress、breadcrumb、pagination、table、accordion、collapsible、sheet、alert-dialog、slider、empty、toast、field
4. **P2 复杂/次要件**:剩余全部(calendar、combobox、command、menubar、navigation-menu、carousel、chart、resizable、sidebar 等)。
5. 每完成一个组件跑一次全量校验;每 5~10 个组件更新一次本 spec 的完成状态。

### 实施进度(2026-10-31)

| 组件 | 状态 | 备注 |
|---|---|---|
| button | ✅ 9 测试 | Semi solid/out-line/borderless 映射 + loading |
| input | ✅ 11 测试 | fill 三态 + validateStatus + prefix/suffix/clearable/password |
| textarea / label / input-group / input-otp | ✅ 27 测试 | |
| tooltip | ✅ 3 测试 | grey-7 实底 + 6px 圆角 + 240px |
| dialog | ✅ 6 测试 | 448px 默认宽 + 12px 圆角 + bg-2 + size 四档 + 80px 顶距 |
| dropdown-menu | ✅ 8 测试 | bg-3 弹层 + item 8/16 内边距 + 12px 图标 |
| popover | ✅ 4 测试 | 1px 边框 + 标题分隔线 + 箭头 |
| tabs | ✅ 6 测试 | line/button/card 三型 |
| avatar | ✅ 4 测试 | 组重叠 12px + 计数 grey-5 |
| badge | ✅ 5 测试 | Tag 规格 24px 高 + circle 形状 |
| separator | ✅ 5 测试 | dashed + 带文字 |
| alert | ✅ 6 测试 | banner 四语义 light 底 |
| card | ✅ 3 测试 | 无阴影 + 正文 text-1 |
| empty | ✅ 3 测试 | 600 标题 + text-1 描述 |
| breadcrumb | ✅ 3 测试 | 当前页不加粗 + link 色 hover |
| pagination | ✅ 3 测试 | 32px item + selected primary-light 600 |
| spinner | ✅ 3 测试 | 14/20/32 三档 |
| skeleton | ✅ 2 测试 | fill-0 + rounded-sm |
| progress | ✅ 3 测试 | 4px 轨道 + Semi 默认绿色 |
| table | ✅ 4 测试 | 表头 bg-1 + text-2 regular + 16/12 内边距 |
| accordion | ✅ 4 测试 | header hover fill + chevron 旋转 |
| toast | ✅ 3 测试 | bg-3 + elevated + 语义图标 |
| context-menu | ✅ 1 测试 | 与 dropdown 同规格 |
| menubar | ✅ 1 测试 | 底边线导航条 + Semi 菜单弹层 |
| command | ✅ 1 测试 | cmdk 套 dropdown 规格 |
| sonner | ✅ 1 测试 | Semi token 皮 |
| collapsible | ✅ 3 测试 | 结构原语 + collapse 动画 |
| direction | ✅ 2 测试 | ltr/rtl context |
| checkbox / radio-group / switch / toggle / toggle-group | ✅ 50 测试 | switch 选中色 bg-primary 修复;checkbox 未选边框 text-3 |
| alert-dialog / sheet / drawer / hover-card | ✅ 22 测试 | SideSheet 448px/贴边/180ms;hover 延迟 50ms |
| select / native-select / combobox | ✅ 24 测试 | Base UI 裸 data-* 变体修复 |
| kbd / item / field / aspect-ratio / button-group / scroll-area / resizable / navigation-menu | ✅ 39 测试 | Semi list/form/handler 规格 |
| calendar / carousel / chart / sidebar | ✅ 22 测试(日历经浏览器截图对照 semi.design 重做) | 四箭头导航/方形格子/隐藏非当月/today 蓝字 |
| bubble / attachment / message / message-scroller / questionnaire / trace / marker / code-block | 🔄 代理进行中 | AI 组件套 Semi token |

### 已知坑(实现时注意)

- **lucide 图标名**:`CircleInfo`/`TickCircle`/`CircleWarning` 不存在;用 `Info`/`CircleCheck`/`TriangleAlert`/`CircleAlert`。
- **jsdom + Tailwind**:带变体前缀的类(`data-active:bg-primary`、`sm:max-w-*`)在断言时要写完整字符串。
- **Base UI Menu.Item 回调是 `onClick`**(不是 Radix 的 `onSelect`)。
- **Base UI Avatar.Image 在 jsdom 不触发 load**,永远渲染 Fallback。
- **断言 data-state 类**:组件用 `data-active:`/`data-open:`/`data-checked:` 变体(Base UI 语义),不是 Radix 的 `data-[state=...]`。

---

## 6. 与 Semi 规格的已知对照基线(实现时逐条核对)

- 控件默认高 32px;小 24px;大 40px。
- 按钮:默认实心主色,hover #0062D6,active #004FB3;outline 默认边框 `--semi-color-border` + 文字主色;secondary 实心灰 #6B7075;ghost 透明底 hover fill-0;danger 实心 #F93920;link 无底无框。
- 输入类:默认无可见边框(fill 底 #2E3238@5%),hover 加深,focus 时 1px 主色边 + 白底不变;错误态 danger-light 底 + danger 边。
- 弹层:圆角 6px(菜单)/12px(modal),阴影 elevated,背景 bg-0(light)/bg-2 系(dark 按层级)。
- 标题层级:modal 标题 18px/600;card 标题 16px/600;表单 label 14px/600。
- 文本:正文 14px/20px;辅助文字用 text-2;占位用 text-3。
