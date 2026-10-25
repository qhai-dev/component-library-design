# API 对齐审计 — shadcn-semi-design vs Semi Design 2.104.0

> **⚠️ 方向变更声明（最新原则，以本声明为准）**：
> **组件 API 保持 shadcn 官方设计，仅 UI 样式取自 Semi Design（1:1）**。
> 下文第 2/3 节「API 向 Semi 对齐」的提案**已作废**——不引入 Semi 的 type/theme/loading 等配置式 API；
> 第 4 节实施清单**作废**；**第 6 节「不需要清单」与第 5 节「未移植组件矩阵」仍然有效**（范围边界评估依据）。
> 样式层对齐（令牌/烘焙/语义化）已在仓库内完成；单组件规格范例见 BUTTON-SPEC.md。

> ~~目标：所有组件 API 向 Semi Design 的设计靠拢。~~（已作废，见上方声明）
> 我方现状与对齐建议；**Semi 中我们不需要的能力单独成列（第 6 节），请逐条评估**。
>
> 来源：`semi-design` fork（READ-ONLY）的 `content/**/index.md` API 表 + `packages/semi-foundation/*/constants.ts` 枚举。
> 优先级：P0 = 核心高频，第一批改；P1 = 常用，第二批；P2 = 低频/可选；保留 = Semi 无对应或不对齐。

---

## 1. 核心结论：两个架构的根本差异

| 维度          | Semi Design                                                            | 本仓库（Base UI + shadcn 形态）                               |
| ------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| 组件形态      | 配置式单组件（props 驱动：`visible`、`optionList`、`columns`）         | 组合式子组件（`<DialogTrigger>` / `<SelectItem>` / children） |
| 状态模型      | 受控/非受控双通道 + 函数式命令 API（`Modal.confirm`、`Toast.success`） | 受控 props + hooks，命令式仅 Sonner                           |
| 样式          | SCSS 令牌 + `--semi-*`                                                 | Tailwind 工具类 + `--semi-*` 令牌（已完成）                   |
| onChange 签名 | `onChange(value, e)`（value 在前）                                     | `onChange(value \| event)` 随组件                             |

**因此对齐策略分三级**：

- **A 级（做）**：属性名、枚举值、尺寸词汇、状态语义 → 完全对齐 Semi（本文档主体）。
- **B 级（部分做）**：受控名别名（`visible`/`onVisibleChange`）→ 加别名层，旧写法保留。
- **C 级（不做）**：配置式渲染模型（`optionList`/`columns`/`menu` JSON、`renderXxx` 函数族）→ 保留组合式，理由见第 6 节，请评估。

---

## 2. 全局对齐提案（跨组件）

| #   | 提案                                                                                                                                                                                                                                                                                                                                                                                              | 影响组件                                               | 级别 |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ---- |
| G1  | **Button 改 `type` × `theme` 双维模型**：`type: primary/secondary/tertiary/warning/danger`（新增 **warning**，需补 warning 语义色令牌）+ `theme: solid/light/borderless/outline`；现有 `variant: default/secondary/outline/ghost/destructive/link` 映射为兼容别名（default→primary+solid、outline→primary+outline、ghost→primary+borderless、destructive→danger+solid、secondary→tertiary+solid） | button、button-group                                   | P0   |
| G2  | **size 词汇对齐**：统一接受 `small/default/large`（Semi 词表），内部映射现有 sm/default/lg；`xs/icon-*` 为 shadcn 扩展保留                                                                                                                                                                                                                                                                        | 全部带 size 的组件                                     | P1   |
| G3  | **受控名别名**：浮层类组件增加 `visible`/`onVisibleChange` 别名（映射 `open`/`onOpenChange`）                                                                                                                                                                                                                                                                                                     | dialog、sheet、drawer、popover、dropdown-menu、tooltip | P1   |
| G4  | **确认类 props**：`okText/cancelText/confirmLoading/hasCancel`（Dialog/AlertDialog 对齐 Modal）                                                                                                                                                                                                                                                                                                   | dialog、alert-dialog                                   | P0   |
| G5  | **loading 态**：Button/Switch 增加 `loading`（Semi 有，shadcn 无）                                                                                                                                                                                                                                                                                                                                | button、switch                                         | P1   |
| G6  | **validateStatus 四态**：`default/error/warning/success`（现仅 aria-invalid 二态）                                                                                                                                                                                                                                                                                                                | input、textarea、select、combobox、form field          | P1   |
| G7  | **onChange 签名**：Semi 的 `onChange(value, e)` 与原生 `onChange(e)` 冲突——**建议不改**（破坏 React 生态直觉），仅在文档标注（第 6 节评估）                                                                                                                                                                                                                                                       | input、textarea、select                                | 评估 |

---

## 3. 组件逐一对齐（64 个）

### 3.1 P0 — 核心高频（第一批）

#### button ← Semi Button

- Semi 关键 props：`theme(solid/borderless/light/outline | light)`、`type(primary/secondary/tertiary/warning/danger | primary)`、`size(large/default/small)`、`loading`、`block`、`iconPosition(left/right)`、`htmlType(button/reset/submit)`
- 我方现状：`variant(default/secondary/outline/ghost/destructive/link)` × `size(default/sm/lg/xs/icon...)`
- **对齐建议（G1）**：新增 `type` + `theme` 双 props（warning 需新增 warning 色令牌），`variant` 转别名；补 `loading`（内建 spinner）、`block`、`iconPosition`、`htmlType`。`colorful/noHorizontalPadding` 不做（第 6 节 #9/#10）。

#### dialog ← Semi Modal

- Semi 关键 props：`visible`、`title`、`footer`、`okText/cancelText`、`confirmLoading`、`maskClosable(true)`、`closeOnEsc(true)`、`closable`、`centered`、`size(small 448/medium 684/large 920/full-width)`、`width/height`、`hasCancel`、`keepDOM`、`onOk/onCancel`
- 我方现状：`DialogContent/Title/...` 组合式，无确认类 props
- **对齐建议**：Dialog 增加简化确认模式 props（`okText/cancelText/confirmLoading` 通过 footer 定制）；`size` 枚举对齐（448/684/920 映射 max-width）；`visible/onVisibleChange` 别名（G3）。`centered` 我们恒为居中，不做。函数式 `Modal.confirm` 不做（第 6 节 #6）。

#### input ← Semi Input

- Semi 关键 props：`size(large/default/small)`、`prefix/suffix`、`addonBefore/addonAfter`、`showClear`（内建清除按钮）、`validateStatus(default/error/warning)`、`borderless`、`mode(password)`、`onChange(value, e)`
- 我方现状：裸样式 input + InputGroup 独立组件
- **对齐建议**：增加 `showClear`（内建清除）、`prefix/suffix`（从 InputGroup 收编为 props）、`validateStatus`（G6）、`borderless`、`size` 词汇对齐（G2）。`mode=password` 用原生 type 覆盖即可。`composition/getValueLength` 不做。

#### textarea ← Semi TextArea

- Semi 关键 props：`autosize(boolean|{minRows,maxRows})`、`maxCount`（字数统计）、`showClear`、`validateStatus`、`borderless`、`resize(六向枚举)`、`showLineNumber`、`composition`
- 我方现状：原生 textarea 样式化（field-sizing-content 近似 autosize）
- **对齐建议**：`maxCount`（字数统计 UI）P0、`autosize({minRows,maxRows})` P1、`validateStatus/borderless` P1、`showLineNumber/resize 枚举` P2。

#### select ← Semi Select

- Semi 关键 props：`optionList([{value,label}])`、`multiple`、`filter(boolean|fn)`、`allowCreate`、`maxTagCount`、`showClear`、`loading`、`remote`、`emptyContent`、`validateStatus`、`maxHeight`、`virtualize`、`position(bottomLeft)`、`searchPosition`
- 我方现状：`items` prop + `SelectItem` 组合式
- **对齐建议**：增加 `multiple/showClear/loading/validateStatus/emptyContent/maxHeight`；`optionList` 配置式与组合式**双写法并存**（Semi 自己也是双写法）。`virtualize/remote/renderSelectedItem/triggerRender` 不做（第 6 节 #15/#12）。

#### progress ← Semi Progress

- Semi 关键 props：`type(line/circle)`、`direction(horizontal/vertical)`、`stroke(可分段渐变)`、`strokeLinecap`、`showInfo`、`format`、`indeterminate`、`size`
- 我方现状：仅水平 line、单一颜色（success 绿）
- **对齐建议（重要缺口）**：补 **circle 环形**与 **vertical 竖向**；`stroke` 支持 `[{percent,color}]` 分段；`indeterminate` 不确定态；`showInfo/format` 百分比文案。当前指示色为 success 绿需修正为可配（Semi 默认 primary？核对：Semi line 默认 `var(--semi-color-success)`——我们的绿是对的 ✓）。

#### switch ← Semi Switch

- Semi 关键 props：`checkedText/uncheckedText`、`loading`、`size(default/small/large)`、`onChange(checked)`
- 我方现状：checked/onCheckedChange，尺寸 sm/default
- **对齐建议**：`checkedText/uncheckedText`（轨道文案）、`loading` 态；size 词汇对齐（G2）。

#### tabs ← Semi Tabs

- Semi 关键 props：`type(line/card/button/slash)`、`tabPosition(top/left)`、`collapsible`、`tabList(配置式双写法)`、`tabBarExtraContent`、`size`
- 我方现状：variant(line/button) 已按 Semi 两种主形态实现 ✓
- **对齐建议**：补 `type="card"` 形态；`collapsible` 溢出折叠 P2；`tabPosition="left"` P2；`slash` 不做（第 6 节 #17）。

#### pagination ← Semi Pagination

- Semi 关键 props：`total`、`currentPage/defaultCurrentPage`、`pageSize + pageSizeOpts + onPageSizeChange`、`showSizeChanger`、`showQuickJumper`、`showTotal`、`hideOnSinglePage`、`popoverPosition`
- 我方现状：纯链接 UI（无状态）
- **对齐建议**：增加受控数据分页容器模式（`total/currentPage/pageSize` + 内建页容量 Select + 快捷跳页），与现有纯 UI 模式并存；`hideOnSinglePage` P1。这是行为级新增，请评估。

#### sheet / drawer ← Semi SideSheet

- Semi 关键 props：`visible`、`placement(top/right/bottom/left)`、`size(small 448/medium 684/large 920)`、`width/height`、`title/footer`、`maskClosable`、`closeOnEsc`（注意 SideSheet 默认 false）、`disableScroll`、`afterVisibleChange`
- 我方现状：Sheet（Dialog 变体，side 属性）与 Drawer（vaul）两套
- **对齐建议**：`placement` 命名对齐（side → placement 别名）+ `size` 三档宽度 + `afterVisibleChange` 回调。Drawer(vaul) 保留用于移动端底部抽屉场景。

#### table ← Semi Table

- Semi 是全功能数据表格（columns/dataSource/pagination/sorter/filter/rowSelection/virtualized…），我方是无状态原生 table 样式化
- **对齐建议**：**不做逐 prop 对齐**（能力量级差一个数量级）；仅对齐 `size(default/middle/small)` 与 `bordered` 视觉规格。分页/排序是否引入 TanStack 由你评估（第 6 节 #16）。

### 3.2 P1 — 常用（第二批）

#### accordion ← Semi Collapse

- Semi：`accordion`、`activeKey/defaultActiveKey(string|string[])`、`clickHeaderToExpand`、`expandIconPosition`、`keepDOM/lazyRender`；Panel：`itemKey/header/extra/disabled`
- **对齐建议**：activeKey/defaultActiveKey 命名别名（值模型已兼容，string[] 即 open 多值）；Panel 增加 `extra` 右上角辅助区；`clickHeaderToExpand` P2。keepDOM/lazyRender 不做。

#### alert ← Semi Banner

- Semi：`type(info/success/danger/warning)`、`title/description`、`icon/closeIcon(null 隐藏)`、`bordered`、`fullMode`、`onClose`
- **对齐建议**：增加 `type: warning/success`（现仅 default/destructive → 语义改为 info/danger）+ `onClose`（内建关闭按钮）+ `bordered`。`fullMode` 不做。

#### badge ← Semi Tag

- Semi：`color(17 色)`、`type(light/solid/ghost)`、`size(default/small/large)`、`closable + onClose`、`TagGroup(maxTagCount + 溢出 Popover)`
- **对齐建议**：增加 `color` 色板（对齐 17 色 → 我们的 --semi-* 色板）、`type(light/solid/ghost)`、`closable/onClose`。组件名保留 Badge（避免破坏 import）。TagGroup 溢出折叠 P2。

#### avatar ← Semi Avatar

- Semi：`shape(circle/square)`、`size(7 档枚举或任意 width)`、`color(17 色)`、`gap`、`hoverMask`；Group：`maxCount/overlapFrom`
- **对齐建议**：增加 `shape="square"`、`maxCount`（Group 溢出 +N 已有 count 组件，补 props 化）；`hoverMask` P2；17 色 P2（用 --semi-* 色板实现）。

#### checkbox ← Semi Checkbox/CheckboxGroup

- Semi：`indeterminate`（半选样式）、`type(default/card/pureCard)`、`extra`；Group：`options/direction/disabled`
- **对齐建议**：`indeterminate` P1（Base UI checkbox 支持）；`type=card` 卡片形态 P2；Group `options/direction` 双写法 P2。

#### radio-group ← Semi Radio

- Semi：`type(default/button/card/pureCard)`、`buttonSize`、`direction`、`mode='advanced'`（选中可取消）、`extra`
- **对齐建议**：`type="button"` 按钮形态（对接现有 Toggle 样式）P1；`direction` P1；card 形态 P2；`mode='advanced'` P2。

#### card ← Semi Card

- Semi：`cover`、`footer/footerLine`、`headerExtraContent`、`actions`、`shadows(hover/always)`、`loading`
- **对齐建议**：`shadows="hover"|"always"` P1（现恒 shadow-elevated）；`loading` 骨架占位 P1；`cover`（图卡）P1；`actions` P2。

#### carousel ← Semi Carousel

- Semi：`autoPlay(bool|{interval,hoverToPause})`、`animation(slide/fade)`、`indicatorType(dot/line/columnar)`、`showArrow/arrowType`、`activeIndex` 受控
- **对齐建议**：`autoPlay`（embla autoplay 插件）P1；`indicatorType` P2；实例方法 prev/next 已有（CarouselPrevious/Next 组件）。整体模型差异大，仅对齐高频 props。

#### collapsible ← Semi Collapsible

- Semi：`isOpen`、`collapseHeight(部分折叠)`、`duration`、`fade`
- **对齐建议**：`isOpen` 别名 P2；`collapseHeight` 部分折叠 P2。

#### combobox ← Semi AutoComplete

- Semi：`data`、`filter`、`allowCreate`、`onSearch/onSelect`、`showClear`、`validateStatus`、`emptyContent`、`size`
- **对齐建议**：对齐 Select 的扩展（`filter/allowCreate/showClear/validateStatus`），与 Select 共享语法。P1。

#### dropdown-menu ← Semi Dropdown

- Semi：`trigger(hover/focus/click/custom/contextMenu)`、`position(12 方位)`、`menu(JSON)`、`showTick`、`onVisibleChange`
- **对齐建议**：`trigger="hover"` P2（Base UI 需 HoverCard 组合）；`menu` JSON 不做（组合式保留）；hover 触发的 dropdown 用法在 Semi 常见，请评估是否需要。

#### empty ← Semi Empty

- Semi：`layout(vertical/horizontal)`、`darkModeImage`、`image(插画)`
- **对齐建议**：`layout="horizontal"` P2；插画体系不做（无 semi-illustrations 资产）。

#### input-otp ← Semi PinCode（审计修正：有对应！）

- Semi：`count(位数)`、`format(number/mixed/RegExp)`、`onComplete(全部输完回调)`、ref 按位 focus
- **对齐建议**：增加 `format` 校验器与 `onComplete` 回调（现 maxLength 模型上叠加）。P1。

#### label ← Semi Form.Label

- Semi：`required(必填*)`、`optional(自动"（可选）")`、`extra`
- **对齐建议**：`required`/`optional` P1（表单场景高频）。

#### separator ← Semi Divider

- Semi：`children(内嵌文字)`、`align(left/center/right)`、`dashed`
- **对齐建议**：内嵌文字 + align + dashed P1。

#### field ← Semi Form.Field

- Semi：`label/labelPosition(top/left/inset)/validateStatus/helpText/extraText/rules(校验)`
- **对齐建议**：`labelPosition/validateStatus/helpText/extraText` P1（展示层）；**校验引擎不对齐**——走 react-hook-form 生态（第 6 节 #18）。

#### slider ← Semi Slider

- Semi：`range`、`vertical`、`marks(刻度)`、`tooltipVisible/tipFormatter`、`onAfterChange`
- **对齐建议**：`vertical` P1（Base UI 支持）；`marks/tooltip` P2。

#### code-block ← Semi CodeHighlight

- Semi：`code/language/lineNumber(行号)`
- **对齐建议**：`language` 高亮（shiki 已在生态内）+ `lineNumber` P2。

#### spinner ← Semi Spin

- Semi：`spinning`、`size(small/middle/large 注意 middle!)`、`tip`、`包裹模式(children 整块遮罩)`、`delay`
- **对齐建议**：包裹模式（children + spinning 遮罩 + tip）P1；size 增加 middle 别名 P2。

#### skeleton ← Semi Skeleton

- Semi：`loading(切换占位/真实内容)`、`active(动画)`、预置形状 Avatar/Title/Paragraph/Image/Button
- **对齐建议**：`loading` 容器模式 P1；预置形状组合 P2。

#### sidebar ← Semi Navigation(Nav)

- Semi：`isCollapsed/defaultIsCollapsed`、`items 树`、`Nav.Header/Footer(collapseButton)`、折叠态 Tooltip
- **对齐建议**：`isCollapsed` 命名别名（现有 collapsible 机制+cookie）P2；折叠态 Tooltip P2；Nav.Header/Footer 对象语法不做（组合式保留）。

#### navigation-menu ← Semi Navigation(Nav 横向)

- Semi：`items 树`、`mode(vertical/horizontal)`、`selectedKeys/openKeys`
- **对齐建议**：受控名 `selectedKeys/openKeys` 别名 P2；viewport 概念 Semi 无——保留。

#### tooltip / popover / hover-card ← Semi Popover/Tooltip 族

- Semi：`trigger 五值`、`position 12-16 方位`、`guardFocus/clickToHide/mouseEnterDelay`、`visible 受控`
- **对齐建议**：`mouseEnterDelay/LeaveDelay` 别名 P2；hover 触发的 Popover 语义由 HoverCard 承担（官方 Radix 同构）；position 方位已由 side+align 覆盖 12/16 ✓。`guardFocus/returnFocusOnClose` P2。

#### breadcrumb ← Semi Breadcrumb

- Semi：`routes`、`compact`、`maxItemCount(自动折叠)`、`moreType(popover)`、`showTooltip`
- **对齐建议**：`maxItemCount` + 溢出折叠 P2（中长路径高频）。

#### input-group ← Semi InputGroup

- Semi：`size/disabled 统一下发`、`label/labelPosition`
- **对齐建议**：`size/disabled` 下发 P2。

#### sonner / toast ← Semi Toast

- Semi：`Toast.success/info/warning/error(options)` 返回 toastId、`Toast.close(id)`、`Toast.config`
- **对齐建议**：基本已对齐（sonner 函数式 + Toaster props）✓；补 `toastId` 返回值与手动关闭 P2。

#### calendar ← Semi DatePicker 面板 / Calendar

- Semi DatePicker 是完整组件（type 七种/presets/范围双面板）；独立 Calendar 是日程事件视图
- **对齐建议**：保留 day-picker 月面板；**完整 DatePicker 不在本次范围**（未移植清单 #3，请评估）。

#### button-group ← Semi ButtonGroup

- Semi：group 级 `type/theme/size/disabled` 下发
- **对齐建议**：group 级 props 下发 P1（配合 G1）。

### 3.3 保留 — Semi 无对应（不做对齐，11 个）

| 组件                  | 说明                                                              |
| --------------------- | ----------------------------------------------------------------- |
| aspect-ratio          | Semi 无（Resizable.lockAspectRatio 是另一回事）                   |
| command               | Semi 无（cmdk 调色板；近似 AutoComplete/Dropdown）                |
| hover-card            | Semi 无独立组件（Popover trigger=hover 承担）——已按此实现 ✓       |
| kbd                   | Semi 无                                                           |
| marker                | Semi 无（近 Divider）                                             |
| menubar               | Semi 无（Nav horizontal 或 Dropdown 组合）                        |
| native-select         | Semi 无原生 select 封装                                           |
| scroll-area           | Semi 无（近 ScrollList/轻滚动条）                                 |
| toggle / toggle-group | Semi 无（Switch/RadioGroup type=button 承担语义）                 |
| questionnaire / trace | Semi AI 体系无对应（问卷/思维链）                                 |
| direction             | Base UI DirectionProvider 已覆盖（ConfigProvider.direction 等价） |

---

## 4. 需要新增的底层能力（对齐的前置依赖）

| 项                       | 说明                                                                                                                                       | 影响范围        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| warning 语义色           | `--semi-color-warning`（orange-5）令牌 + `--color-warning` 映射（Button type=warning、Alert warning、Input validateStatus=warning 都需要） | 令牌层 + 多组件 |
| Modal 尺寸档位           | 448/684/920px（dialog size=small/medium/large）                                                                                            | dialog          |
| SideSheet 尺寸档位       | 448/684/920px                                                                                                                              | sheet、drawer   |
| Spin 包裹模式            | children + spinning 遮罩                                                                                                                   | spinner         |
| Progress circle/vertical | SVG 环形进度                                                                                                                               | progress        |

---

## 5. Semi 有、我们未移植的组件矩阵（30 个）

**第一档：高频，建议评估是否补移植**

| Semi 组件    | 说明                                            |
| ------------ | ----------------------------------------------- |
| Typography   | 标题/文本/段落/省略体系（我们仅有零散 text 类） |
| InputNumber  | 数字输入（步进器）                              |
| Steps        | 步骤条                                          |
| Timeline     | 时间线                                          |
| Descriptions | 描述列表                                        |
| Popconfirm   | 气泡确认（可由 Popover + AlertDialog 组合）     |
| Upload       | 上传（Attachment 已含展示侧）                   |
| Image        | 图片 + 预览                                     |

**第二档：中频，按需**
Tree、TreeSelect、Cascader、Anchor、Backtop、Highlight、Layout(Grid/Space)、List（完整数据驱动版）、FloatButton、ScrollList、TagInput、AutoComplete（Combobox 已覆盖大半）、Notification（Sonner 覆盖）

**第三档：建议不做**
Rating、ColorPicker、Cropper、AudioPlayer、VideoPlayer、JsonViewer、Lottie、MarkdownRender（streamdown 已在生态）、HotKeys、DragMove、UserGuide、OverflowList、Icon（lucide 已有）、Illustrations

---

## 6. 建议不做的 Semi 能力（★ 请逐条评估）

| #   | 能力                                                                                      | 不做的理由 / 替代                                                                        |
| --- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 1   | **ConfigProvider + locale 国际化**                                                        | 无多语言需求；需要时再引入（分页/OTP 内置文案量很小）                                    |
| 2   | **timeZone 全局时区**                                                                     | 无日期完整组件，暂无载体                                                                 |
| 3   | **RTL 全家桶**（rtl prop、rtl.scss、directions 枚举）                                     | Base UI DirectionProvider 已覆盖；rtl 样式在 Tailwind 是 rtl:/ltr: 变体                  |
| 4   | **React 16/17 兼容层 + react19-adapter**                                                  | 只支持 React 18/19                                                                       |
| 5   | **body[theme-mode] 主题切换机制**                                                         | 用 `.dark` class（Tailwind 生态惯例），令牌已双通道                                      |
| 6   | **函数式 Modal.confirm/info/error/warning + update/destroyAll/useModal**                  | AlertDialog/Dialog 组件 + 受控 state 替代；命令式与 React 19 生命周期冲突                |
| 7   | **Toast.config 全局配置**                                                                 | Toaster 组件 props 已覆盖 position/duration/theme                                        |
| 8   | **Notification 独立组件**                                                                 | Sonner（toast.success + 富内容）覆盖                                                     |
| 9   | **Button colorful 多彩（AI 渐变）**                                                       | 渐变令牌已就位（--semi-ai-*），暂无使用场景                                              |
| 10  | **noHorizontalPadding 图标贴边**                                                          | 小众布局需求                                                                             |
| 11  | **theme×type 20 组合全实现**                                                              | 实现 type 全 5 值 + theme 3 值（solid/light/borderless），outline 由 type+theme 组合表达 |
| 12  | **renderXxx 自定义渲染函数族**（renderSelectedItem/triggerRender/renderDate/renderMore…） | 组合式 children/子组件替代；个别高频的（如 renderMore）可 P2 单独加                      |
| 13  | **cookie 状态持久化**（sidebar open 态）                                                  | 内存态即可，SSR 场景 cookie 反而引水合问题                                               |
| 14  | **组件内建插画体系**（semi-illustrations / Empty.darkModeImage）                          | 无该资产包；用 lucide + 自定义                                                           |
| 15  | **虚拟化**（Select virtualize、Table virtualized）                                        | 长列表场景未出现；引入 react-window 届时再评估                                           |
| 16  | **Table 高级功能**（sorter/filter/rowSelection/树形/分组/固定列/吸顶/伸缩列/内置分页）    | 独立决策项——引入 TanStack Table 才有意义，工作量独立                                     |
| 17  | **Tabs type="slash"、Carousel columnar 指示器等装饰形态**                                 | 非核心形态                                                                               |
| 18  | **Form 校验引擎**（rules/async-validator/transform/convert/keepState/pure）               | react-hook-form + zod 生态替代；field 组件只对齐展示层                                   |
| 19  | **onChange(value, e) 签名**（Semi value 在前）                                            | 与 React 原生事件习惯冲突，保持各自现状                                                  |
| 20  | **getPopupContainer / zIndex / rePosKey 手动重定位**                                      | Base UI portal/中间件已自动处理                                                          |
| 21  | **keepDOM/lazyRender/motion 开关**（Modal/Collapse/Tabs/Popover）                         | Base UI keepMounted 已覆盖常用场景，不重复暴露                                           |
| 22  | **preventScroll/composition/getValueLength 输入法细节 props**                             | 浏览器默认行为已可满足；中文输入法场景出现问题时再评估                                   |
| 23  | **Avatar 17 色系统 / Tag 17 色全量**                                                      | 已有 --semi-* 色板，按需暴露子集（如 primary/grey 系），全量 P2                          |
| 24  | **Avatar hoverMask/topSlot/bottomSlot**                                                   | 低频装饰                                                                                 |

---

## 7. 建议的实施批次

| 批次         | 内容                                                                                                                                                                                                                                                                                                | 数量          |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| 第一批（P0） | G1 Button type/theme + warning 色；Dialog/AlertDialog 确认类 props；Input/TextArea（showClear/maxCount/validateStatus）；Select 多选族；Progress circle/vertical；size 词汇对齐                                                                                                                     | 8 组件 + 令牌 |
| 第二批（P1） | Banner type 补全、Tag color/type/closable、Checkbox indeterminate、Radio button 形态、Card shadows/loading、Tabs card、Pagination 数据模式、Sheet/Drawer size、Slider vertical、Spinner 包裹、Skeleton loading、Label required/optional、Separator 文字、InputOTP format、Field 展示层、G3 受控别名 | ~20 组件      |
| 第三批（P2） | 其余别名与低频 props（见各条 P2）                                                                                                                                                                                                                                                                   | ~15 项        |
| 不动         | 保留形态 11 个 + 第 6 节评估项                                                                                                                                                                                                                                                                      | —             |

> 每一批完成后照例：语义令牌扫描 → 烘焙格式 → 单测/storybook/playground 全量回归。
