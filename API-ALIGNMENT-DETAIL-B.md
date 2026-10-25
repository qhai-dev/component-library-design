# API 对齐审计 — B 组（semi-design 源码提取）

> 来源：`D:\qhai-dev\design\semi-design`（READ-ONLY）
> 依据：`content/<cat>/<name>/index.md` API 表 + `packages/semi-foundation/<name>/constants.ts` + `packages/semi-ui/<name>/`
> 版本：Semi Design（本仓库 checkout，v2.9x 线；个别 props 标注引入版本）

---

### native-select ← Semi Select

- 关键 props（仅取与原生语义相关项）: `optionList`(array `[{value,label}]`)、`value`/`defaultValue`(string\|number\|array)、`disabled`(boolean: false)、`placeholder`(ReactNode)、`size`(string: default)、`onChange`(function(value))、`validateStatus`(string: 'default')
- 枚举（select/constants.ts）: `SIZE_SET: ['small','large','default']`；`STATUS`(=VALIDATE_STATUS): `['default','error','warning','success']`；`SEARCH_POSITION: 'trigger' | 'dropdown'`；position 复用 tooltip `POSITION_SET`
- Semi 特有能力：ref 方法 open/close/focus/selectAll；Option label 必须唯一（以 label 为选中判据）
- 无对应/差异说明：Semi 无原生 `<select>` 封装，Select 为 JS 渲染的自定义浮层（trigger+portal，role=listbox），DOM/样式结构与原生 select 完全不同，审计按"非原生对齐"记录。

### navigation-menu ← Semi Navigation (Nav)

- 关键 props: `items`(Item[]\|Sub[]\|string[])、`mode`(string: 'vertical')、`selectedKeys`/`defaultSelectedKeys`(string[])、`openKeys`/`defaultOpenKeys`(string[])、`isCollapsed`/`defaultIsCollapsed`(boolean: false, 仅 vertical)、`footer`/`header`(object\|ReactNode)、`toggleIconPosition`(string: 'right')、`limitIndent`(boolean: true)、`onSelect`(({itemKey,selectedKeys,selectedItems,domEvent})=>void)、`onOpenChange`、`onClick`、`onCollapseChange`((isCollapsed)=>void)、`subNavMotion`(boolean: true)
- 枚举（navigation/constants.ts）: `MODE: ['vertical','horizontal']`；`ICON_POS/TOGGLE_ICON: ['left','right']`
- Semi 特有能力：`Nav.Header`(logo/text) / `Nav.Footer`(collapseButton 收起按钮) / `Nav.Sub`(子导航弹层, dropdownProps) / `Nav.Item`(icon/itemKey/text/link) 子组件；横向模式子导航走 Dropdown、纵向折叠走 Tooltip
- 无对应/差异说明：shadcn navigation-menu 三层结构（Menu/Sub/Item+viewport）与 Nav 的 items 树对齐，但 Semi 无 viewport 概念、子导航弹层由 Sub 自动管理。

### pagination ← Semi Pagination

- 关键 props: `currentPage`/`defaultCurrentPage`(number)、`pageSize`(number: 10)、`pageSizeOpts`(array: [10,20,40,100])、`total`(number: 1)、`showTotal`(boolean)、`showSizeChanger`(boolean: false, small 时不生效)、`showQuickJumper`(boolean: false)、`hideOnSinglePage`(boolean: false)、`size`(string, 仅 'small' 有专属样式)、`disabled`(boolean: false, 2.37.0)、`onChange`(function(currentPage,pageSize))、`onPageChange`(function(currentPage))、`onPageSizeChange`(function(pageSize))、`popoverPosition`(string: 'bottomLeft')、`popoverZIndex`(number: 1030)
- 枚举（pagination/constants.ts）: strings 为空；numbers: `PAGE_SIZE_OPTION: [10,20,40,100]`、`DEFAULT_PAGE_SIZE: 10`、`PAGE_SHOW_MAX: 7`
- Semi 特有能力：内置页容量 Select（页码浮层 popoverPosition/popoverZIndex 可调）、showQuickJumper 跳页 Input、hoverShowPageSelect（small 尺寸 hover 出页码 Select）
- 无对应/差异说明：shadcn pagination 为纯链接型 UI 无状态，Semi 是受控/非受控自管理的数据分页器。

### popover ← Semi Popover

- 关键 props: `content`(ReactNode\|({initialFocusRef})=>ReactNode)、`trigger`(string: 'hover')、`position`(string: 'bottom')、`visible`(boolean, 配合 trigger='custom')、`clickToHide`(boolean: false)、`showArrow`(boolean)、`arrowPointAtCenter`(boolean: true)、`mouseEnterDelay`/`mouseLeaveDelay`(number: 50)、`spacing`(number\|{x,y}: showArrow 时 10 否则 4)、`zIndex`(number: 1030)、`autoAdjustOverflow`(boolean: true)、`closeOnEsc`(boolean: true)、`guardFocus`(boolean: true)、`returnFocusOnClose`(boolean: true)、`keepDOM`(boolean: false)、`onVisibleChange`(function(isVisible))、`onClickOutSide`(function(e))、`getPopupContainer`(function)
- 枚举（popover/constants.ts）: `POSITION_SET: ['top','topLeft','topRight','left','leftTop','leftBottom','right','rightTop','rightBottom','bottom','bottomLeft','bottomRight','leftTopOver','rightTopOver']`；`TRIGGER_SET: ['hover','focus','click','custom','contextMenu']`
- Semi 特有能力：content 支持函数式拿到 initialFocusRef 做焦点管理；guardFocus/returnFocusOnClose 焦点循环；click/custom 时 content 带 dialog role
- 无对应/差异说明：shadcn popover 基于 Radix（PopoverTrigger/Content/Anchor 组合），Semi 用 children 包裹 + content prop 单组件实现，无独立 Trigger 子组件。

### progress ← Semi Progress

- 关键 props: `percent`(number)、`type`(string: 'line')、`size`(string: 'default'; small 仅 circle、large 仅 line 生效)、`direction`(string: 'horizontal')、`stroke`(string\|Array<{percent,color}>: 'var(--semi-color-success)')、`orbitStroke`(string: 'var(--semi-color-fill-0)')、`strokeWidth`(number: 4, circle)、`width`(number: 72/24, circle)、`strokeLinecap`(string: 'round', circle)、`strokeGradient`(boolean: false)、`showInfo`(boolean: false)、`format`((percent)=>ReactNode: percent+'%')、`indeterminate`(boolean: false)
- 枚举（progress/constants.ts）: `types: ['line','circle']`；`sizes: ['default','small','large']`；`directions: ['vertical','horizontal']`；`strokeLineCap: ['square','round']`
- Semi 特有能力：stroke 传数组实现分段/渐变色进度条（配合 strokeGradient）；indeterminate 不确定态；format 自定义环心文本
- 无对应/差异说明：shadcn progress 仅水平指示器（value/max），Semi 多出 circle 环形、vertical、渐变分段能力。

### questionnaire ← Semi 无对应

- 关键 props: —
- 枚举: —
- Semi 特有能力: —
- 无对应/差异说明：全库检索 `questionnaire/问卷` 无命中；Semi AI 组件仅 AIChatInput、AIChatDialogue、AI Sidebar 及 AI 风格 Button/Tag/FloatButton/Icon（content/ai/aiComponent），问卷类组件需用 Form/Radio/Checkbox/Select 组合自建。

### radio-group ← Semi Radio / RadioGroup

- 关键 props（RadioGroup）: `value`/`defaultValue`(string\|number)、`options`(array 配置式子元素)、`type`(string: 'default')、`buttonSize`(string: 'middle', type='button')、`direction`(string: 'horizontal', 仅 type='default')、`disabled`(boolean: false)、`mode`(string, 'advanced')、`name`(string)、`onChange`(function(e))
- 关键 props（Radio）: `checked`/`defaultChecked`(boolean: false)、`value`(string\|number)、`disabled`(boolean: false)、`type`(string: 'default')、`extra`(ReactNode 副文本, type='default')、`autoFocus`(boolean: false)、`mode`(string)
- 枚举（radio/constants.ts）: `DIRECTION_SET: ['horizontal','vertical']`；`TYPE: default/button/card/pureCard`；`BUTTON_SIZE: ['middle','small','large']`；`MODE: ['advanced','']`
- Semi 特有能力：type='card'/'pureCard' 卡片单选；mode='advanced' 选中后再点可取消；Radio.Group.options 配置式渲染
- 无对应/差异说明：shadcn radio-group 纯原生 radio 样式化（无卡片/按钮形态），Semi 的 type 维度对应 shadcn 需要另外组合。

### resizable ← Semi Resizable（有对应）

- 关键 props: `defaultSize`/`size`(Size, 数字或 px/vw/vh/% 字符串)、`minWidth`/`maxWidth`/`minHeight`/`maxHeight`(string\|number)、`lockAspectRatio`(boolean\|number)、`enable`(Enable 各方向开关)、`scale`(number: 1)、`boundElement`(string, 'parent')、`handleNode`/`handleStyle`/`handleClass`、`snap`/`snapGap`(number: 0)/`grid`([number,number]: [1,1])、`onChange`((size,e,direction)=>void)、`onResizeStart`、`onResizeEnd`
- 子组件：`ResizeGroup`（`direction`: 'horizontal'|'vertical'，默认 'horizontal'）、`ResizeItem`（`defaultSize`/`min`/`max`，纯数字按比例分配）、`ResizeHandler`（className/style）
- 枚举（resizable/constants.ts）: strings 为空（无枚举）；direction 取值 'horizontal' | 'vertical'
- Semi 特有能力：Group/Item/Handler 组合实现分栏拖拽（数字比例分配空间）；grid/snap 吸附对齐；lockAspectRatio 锁定宽高比
- 无对应/差异说明：任务预估"无对应"不成立——Semi 有独立 Resizable（content/basic/resizable，packages/semi-ui/resizable），shadcn resizable 基于 react-resizable-panels，Semi 为自研拖拽实现，API 形态不同但能力对齐。

### scroll-area ← Semi 无对应

- 关键 props: —
- 枚举: —
- Semi 特有能力: —
- 无对应/差异说明：无 ScrollArea 组件（grep 无命中）；最接近的是 ScrollList（content/show/scrolllist，虚拟滚动选择列表）与 Table `virtualized`，均非自定义滚动条容器，滚动条样式需自行实现。

### select ← Semi Select

- 关键 props: `multiple`(boolean: false)、`filter`(boolean\|function(sugInput,option): false)、`optionList`(array `[{value,label}]`)、`value`/`defaultValue`(string\|number\|array)、`placeholder`(ReactNode)、`size`(string: 'default')、`disabled`(boolean: false)、`showClear`(boolean: false)、`allowCreate`(boolean: false, 需配合 filter)、`max`(number, 多选最多可选)、`maxTagCount`(number)、`loading`(boolean: false)、`remote`(boolean: false)、`emptyContent`(string\|ReactNode)、`position`(string: 'bottomLeft')、`validateStatus`(string: 'default')、`renderSelectedItem`(function(option))、`triggerRender`(function)、`virtualize`(object {height,width,itemSize})、`maxHeight`(string\|number: 270)、`onChangeWithObject`(boolean: false)、`onChange`/`onSelect`/`onDeselect`/`onSearch`/`onCreate`/`onClear`/`onDropdownVisibleChange`、`defaultOpen`(boolean: false)、`clickToHide`(boolean: false)、`searchPosition`(string: 'trigger', 2.61.0)、`borderless`(boolean, 2.33.0)
- 枚举（select/constants.ts）: `SIZE_SET: ['small','large','default']`；`STATUS: ['default','error','warning','success']`；`SEARCH_POSITION: 'trigger'/'dropdown'`；`MODE: 'select'/'autoComplete'`
- Semi 特有能力：虚拟化长列表（virtualize）；allowCreate+remote 远程搜索/创建条目；triggerRender 自定义触发器、inner/outer Top/BottomSlot 弹层插槽、ref 方法 selectAll/deselectAll/search
- 无对应/差异说明：shadcn select 基于 Radix（SelectTrigger/Content/Item 组合，值字符串），Semi 单组件+optionList/Option，且以 label 唯一性为选中判据（value 可重复）。

### separator ← Semi Divider

- 关键 props: `layout`(horizontal\|vertical: 'horizontal')、`dashed`(boolean: false)、`align`(left\|center\|right: 'center', 带 children 时)、`children`(ReactNode)、`margin`(number\|string, 上下/左右 margin)、`style`(CSSProperties)、`className`(string)
- 枚举（divider/constants.ts）: `LAYOUT: ['vertical','horizontal']`；align 取值 left/center/right（文档 API 表）
- Semi 特有能力：children 内嵌文字的分割线（align 三向对齐）；dashed 虚线
- 无对应/差异说明：shadcn separator 是纯装饰 div（orientation/decorative），Semi Divider 额外承载文字内容能力，decorative 语义无对应。

### sheet ← Semi SideSheet

- 关键 props: `visible`(boolean: false)、`placement`(string: 'right')、`size`(string: 'small', left/right 生效)、`width`(number\|string: 448)、`height`(number\|string: 400, top/bottom 生效)、`title`(ReactNode)、`footer`(ReactNode: null)、`closable`(boolean: true)、`closeIcon`(ReactNode)、`mask`(boolean: true)、`maskClosable`(boolean: true)、`closeOnEsc`(boolean: false)、`keepDOM`(boolean: false)、`disableScroll`(boolean: true, body 锁滚动)、`motion`(boolean: true)、`zIndex`(number: 1000)、`onCancel`((e)=>void)、`afterVisibleChange`((isVisible)=>void)、`bodyStyle`/`headerStyle`/`maskStyle`(CSSProperties)
- 枚举（sidesheet/constants.ts）: `PLACEMENT: ['top','right','bottom','left']`；`SIZE: ['small','medium','large']`（宽度 small 448 / medium 684 / large 920）
- Semi 特有能力：四方向滑出（top/bottom 时用 height）；mask={false} 允许操作外部区域；getPopupContainer 指定挂载点
- 无对应/差异说明：shadcn sheet 是 Dialog 的侧滑变体（SheetContent side="right" 等），Semi 是独立 SideSheet 组件、四向 placement，且默认渲染于 body 并锁滚动。

### sidebar ← Semi Navigation (Nav, 侧边栏/垂直模式)

- 关键 props: `mode`(string: 'vertical')、`isCollapsed`/`defaultIsCollapsed`(boolean: false)、`items`(Item[]\|Sub[])、`selectedKeys`/`defaultSelectedKeys`(string[])、`openKeys`/`defaultOpenKeys`(string[], 展开态有效)、`header`(object\|ReactNode, logo/text)、`footer`(object\|ReactNode, `collapseButton`)、`onCollapseChange`((isCollapsed)=>void)、`onSelect`/`onClick`/`onOpenChange`、`subNavMotion`(boolean: true)、`toggleIconPosition`(string: 'right')、`bodyStyle`(CSSProperties)
- 枚举（navigation/constants.ts）: `MODE: ['vertical','horizontal']`；`TOGGLE_ICON: ['left','right']`
- Semi 特有能力：Nav.Footer `collapseButton` 一键收起侧边栏（受控配合 isCollapsed/onCollapseChange）；折叠态自动以 Tooltip 展示菜单文案（tooltipShowDelay/tooltipHideDelay）；Nav.Header 承载 logo+标题
- 无对应/差异说明：shadcn sidebar 是组合组件族（SidebarProvider/Sidebar/SidebarTrigger/SidebarMenu…+cookie 状态持久化），Semi 仅靠 Nav 单组件的 vertical+isCollapsed 形态承载，无 Provider/持久化概念。

### skeleton ← Semi Skeleton

- 关键 props（Skeleton）: `loading`(boolean: true, true 显占位/false 显 children)、`active`(boolean: false 动画)、`placeholder`(ReactNode)、`children`、`style`/`className`
- 子组件：`Skeleton.Avatar`（`size`: 'medium'、`shape`: 'circle'）、`Skeleton.Paragraph`（`rows`: 4）、`Skeleton.Image`/`Skeleton.Title`/`Skeleton.Button`（API 同 Avatar，shape 仅 Avatar）
- 枚举（skeleton/constants.ts）: strings 为空；文档取值：Avatar size `['extra-extra-small','extra-small','small','medium','large','extra-large']`、shape `['circle','square']`
- Semi 特有能力：结构化组合占位（Avatar/Title/Paragraph/Image/Button 拼装）；loading 切换占位与真实内容；active 骨架动画
- 无对应/差异说明：shadcn skeleton 是单个 shimmer div（Skeleton+className 自由拼），Semi 是预置形状的组合组件。

### slider ← Semi Slider

- 关键 props: `value`/`defaultValue`(number\|number[]: 0)、`min`(number: 0)、`max`(number: 100)、`step`(number: 1)、`range`(boolean: false 双滑块)、`vertical`(boolean: false)、`verticalReverse`(boolean: false)、`marks`(Record<number,string>)、`included`(boolean: true)、`disabled`(boolean: false)、`tooltipVisible`(boolean 受控常显)、`tipFormatter`((value)=>any: v=>v)、`showBoundary`(boolean: false)、`showArrow`(boolean: true, 2.48.0)、`handleDot`({color,size}, 2.52.0)、`onChange`((value)=>void)、`onAfterChange`((value)=>void)、`getAriaValueText`((value,index)=>string)
- 枚举（slider/constants.ts）: `SIZE: ['small','large','default']`（注：该枚举存在但文档 API 表未暴露 size prop）、`POSITION: ['top','bottom']`
- Semi 特有能力：range 双滑块（Tab 切换滑块焦点）；marks 刻度标签+tooltipOnMark；tipFormatter/tooltipVisible 自定义提示
- 无对应/差异说明：shadcn slider 基于 Radix Slider（单一/数组 value、无内置 tooltip/marks），Semi 自带 tooltip 与刻度体系。

### sonner ← Semi Toast（函数式 API）

- 关键 API: `Toast.success/info/warning/error(options \| string)` 返回 `toastId`；`Toast.close(toastId)` 手动关闭；`Toast.config(config)` 全局默认配置
- Options: `content`(ReactNode: '')、`icon`(ReactNode)、`showClose`(boolean: true)、`textMaxWidth`(number\|string: 450)、`onClose`(()=>void)、`stack`(boolean: false, 2.42.0 堆叠)、`id`(number 自定义 toastId)
- 枚举（toast/constants.ts）: `types: ['warning','success','info','error','default']`；`themes: ['normal','light']`；`directions: ['ltr','rtl']`
- Semi 特有能力：纯命令式（无 JSX 组件形态）；Toast.config 全局调整 position(top/right/bottom/left)/zIndex(1010)/theme/duration(3s)/getPopupContainer
- 无对应/差异说明：sonner 有 `<Toaster/>` 组件+ richColors/position 等 props，Semi 无渲染组件只有静态方法，position 等走 Toast.config 而非组件 props。

### spinner ← Semi Spin

- 关键 props: `spinning`(boolean: true)、`size`(string: 'middle')、`tip`(ReactNode 包裹时描述文字)、`indicator`(ReactNode 自定义指示符)、`delay`(number ms: 0)、`childStyle`(CSSProperties)、`wrapperClassName`(string)、`style`(CSSProperties)
- 枚举（spin/constants.ts）: `SIZE: ['small','middle','large']`
- Semi 特有能力：包裹模式（children 存在时整块遮罩 loading+tip）；delay 延迟显示防闪烁；indicator 自定义图标
- 无对应/差异说明：shadcn spinner（loader 系图标）是纯展示图标组件，无包裹/loading 态管理，Semi Spin 是状态型容器组件。

### switch ← Semi Switch

- 关键 props: `checked`/`defaultChecked`(boolean: false)、`disabled`(boolean: false)、`loading`(boolean: false)、`checkedText`/`uncheckedText`(ReactNode, small 尺寸无效)、`size`(string: 'default')、`onChange`(function(checked:boolean))、`aria-label`/`aria-labelledby`(string)、`onMouseEnter`/`onMouseLeave`
- 枚举（switch/constants.ts）: `SIZE_MAP: ['default','small','large']`
- Semi 特有能力：checkedText/uncheckedText 开关文案；loading 加载态（禁点）
- 无对应/差异说明：shadcn switch 基于 Radix（checked/onCheckedChange），语义一致；Semi 多出文案与 loading 能力，无 thumb/border 自定义子组件。

### table ← Semi Table

- 关键 props（仅核心五项）: `columns`(Column[]: [])、`dataSource`(RecordType[]: [], 每行需 key 或 rowKey)、`rowKey`(string\|(record)=>string: 'key')、`pagination`(boolean\|TablePaginationProps: true, 内置分页器)、`bordered`(boolean: false)、`size`("default"\|"middle"\|"small": 'default')、`loading`(boolean: false)、`empty`(ReactNode: '暂无数据')、`onChange`(({pagination,filters,sorter,extra})=>void)
- 高级功能简列（存在但本次不展开）：排序 sorter、筛选 filters/onFilter、行选择 rowSelection、行展开 expandedRowRender/rowExpandable、树形数据 childrenRecordName、分组 groupBy、固定列 fixed('left'/'right')+scroll、吸顶 sticky、虚拟化 virtualized、伸缩列 resizable、页脚/标题 footer/title、onRow/onHeaderRow
- 枚举（table/constants.ts）: `SIZES: ['small','default','middle']`；`PAGINATION_POSITIONS: ['bottom','top','both']`；`SORT_DIRECTIONS: ['ascend','descend']`；`FIXED_SET: [false,true,'left','right']`；`ALIGNS: ['left','right','center']`；`LAYOUTS: ['','auto','fixed']`
- Semi 特有能力：内置 Pagination 联动（pagination 传 props 即得分页+文案 formatPageText）；virtualized 虚拟滚动；Column 级 fixed/align/ellipsis/ sorter/filter 配置
- 无对应/差异说明：shadcn table 是无状态原生 table 样式化（分页/排序全靠 TanStack 自组），Semi 是全功能数据表格组件——对齐审计应记录"能力量级差异"，而非逐 prop 映射。

### tabs ← Semi Tabs

- 关键 props: `tabList`(TabPane[] 配置式: {itemKey,tab,icon})、`activeKey`/`defaultActiveKey`(string: '1')、`type`(string: 'line')、`size`(string: 'large', 仅线性)、`tabPosition`(string: 'top')、`collapsible`(boolean\|'auto': false, 折叠溢出)、`tabPaneMotion`(boolean: true)、`keepDOM`(boolean: true)、`lazyRender`(boolean: false)、`tabBarExtraContent`(ReactNode)、`more`(number\|{count,render,dropdownProps}, 2.59.0)、`onChange`(function(activeKey))、`onTabClick`(function(key,e))、`onTabClose`(function(tabKey), 2.1.0)
- 子组件 TabPane：`itemKey`、`tab`、`icon`、`disabled`(boolean)、`closable`(boolean: false)、`style`/`className`
- 枚举（tabs/constants.ts）: `TYPE_MAP: ['line','card','button','slash']`；`SIZE: ['small','medium','large']`；`POSITION_MAP: ['top','left']`
- Semi 特有能力：collapsible/'auto' 溢出折叠（配 renderArrow/dropdownProps）；tabList 配置式或 TabPane 两种写法；lazyRender/keepDOM 性能控制
- 无对应/差异说明：shadcn tabs 基于 Radix（TabsList/TabsTrigger/TabsContent 组合），Semi 双写法（tabList 数组或 TabPane 子组件）；Semi 多出 button/slash 两种 type 与折叠能力。

### textarea ← Semi TextArea

- 关键 props: `value`/`defaultValue`(string)、`autosize`(boolean\|{minRows,maxRows}: false, 对象参数 2.45.0)、`rows`(number: 4)、`maxCount`(number 字数限制+统计)、`getValueLength`((value)=>number)、`placeholder`(string)、`disabled`(boolean: false)、`readonly`(boolean: false)、`showClear`(boolean: false)、`resize`('none'\|'both'\|'horizontal'\|'vertical'\|'block'\|'inline', 显式传入才生效, 2.97.0)、`showLineNumber`(boolean: false)、`textareaStyle`(CSSProperties, 2.94.0)、`borderless`(boolean, 2.33.0)、`composition`(boolean: false 输入法模式)、`onChange`((value,e)=>void)、`onEnterPress`、`onClear`、`onFocus`/`onBlur`、`onResize`(({height,width})=>void, 2.97.0)
- 枚举（input/constants.ts，TextArea 归属 Input 包）: `SIZE: ['small','large','default']`；`STATUS: ['default','error','warning','success']`（validateStatus 复用）；resize 方向枚举见上（文档 API 表）
- Semi 特有能力：autosize 对象配置 min/maxRows；maxCount+getValueLength 自定义字数统计；showLineNumber 行号、composition 输入法保护
- 无对应/差异说明：shadcn textarea 是原生 `<textarea>` 裸样式，Semi TextArea 为增强组件（字数统计/自适应/行号），其余属性与原生 textarea 保持一致。

### toast ← Semi Toast

- 关键 API: `Toast.success/info/warning/error(options \| string)`（返回 toastId）、`Toast.close(toastId)`、`Toast.config(config)` 全局配置
- Options: `content`(ReactNode: '')、`icon`(ReactNode)、`showClose`(boolean: true)、`textMaxWidth`(number\|string: 450)、`onClose`(()=>void)、`stack`(boolean: false)、`id`(number)
- Config: `top`/`right`/`bottom`/`left`(number\|string 弹出位置)、`zIndex`(number: 1010)、`theme`(string: 'normal')、`duration`(number: 3 秒, 0 不自动关闭)、`getPopupContainer`(function)
- 枚举（toast/constants.ts）: `types: ['warning','success','info','error','default']`；`themes: ['normal','light']`；`directions: ['ltr','rtl']`；numbers.duration: 3
- Semi 特有能力：命令式调用返回 toastId 可 close；全局 config 一次生效；role=alert、stack 堆叠模式
- 无对应/差异说明：shadcn toast 基于 sonner/vaul（useToast hook + ToastProvider 组件渲染），Semi 完全函数式、无 Provider，位置与时长走 config。

### toggle ← Semi 无对应

- 关键 props: —
- 枚举: —
- Semi 特有能力: —
- 无对应/差异说明：无 Toggle 组件（grep 仅命中的是 stories/无关代码）；二态开关语义由 Switch 承担（见 switch 条目），行为差异为 Toggle 默认点击即切换、Switch 语义为"设置项开关"。

### toggle-group ← Semi 无对应

- 关键 props: —
- 枚举: —
- Semi 特有能力: —
- 无对应/差异说明：无 ToggleGroup；多选/单选按钮组需用 RadioGroup `type='button'`（单选, buttonSize small/middle/large）或 Tabs `type='button'` 模拟，均非专用 toggle 语义组件。

### tooltip ← Semi Tooltip

- 关键 props: `content`(string\|ReactNode)、`position`(string: 'top')、`trigger`(string: 'hover')、`visible`(boolean, 配合 trigger='custom')、`showArrow`(boolean: true)、`arrowPointAtCenter`(boolean: true)、`spacing`(number\|{x,y}: 8)、`mouseEnterDelay`/`mouseLeaveDelay`(number: 50)、`zIndex`(number: 1060)、`autoAdjustOverflow`(boolean: true)、`motion`(boolean: true)、`transformFromCenter`(boolean: true)、`wrapperClassName`(string, children 为 disabled/多元素时的包裹 span)、`rePosKey`(string\|number)、`onVisibleChange`(function(isVisible))、`onClickOutSide`(function(e))、`prefixCls`(string: 'semi-tooltip')
- 枚举（tooltip/constants.ts）: `POSITION_SET: ['top','topLeft','topRight','left','leftTop','leftBottom','right','rightTop','rightBottom','bottom','bottomLeft','bottomRight','leftTopOver','rightTopOver','leftBottomOver','rightBottomOver']`；`TRIGGER_SET: ['hover','focus','click','custom','contextMenu']`
- Semi 特有能力：16 方位（含 4 个 *Over 贴边变体）；children 为 disabled 元素/多元素时自动包 span 并可定制；margin 溢出冗余计算
- 无对应/差异说明：shadcn tooltip 基于 Radix（TooltipProvider/Trigger/Content，默认 delayDuration），Semi 单组件包裹式，无 Provider，zIndex(1060) 高于 Popover(1030)。

### trace ← Semi 无对应

- 关键 props: —
- 枚举: —
- Semi 特有能力: —
- 无对应/差异说明：content/ai 与 packages 中检索 `trace` 无命中（AIChatDialogue 文档含 消息状态/引用/提示/自定义渲染 但无思考链 trace 概念）；如需思维链展示，可在 AIChatDialogue renderContent 自定义消息渲染实现。

---

## 提取备注

- 原计划"resizable / scroll-area / toggle / toggle-group / questionnaire / trace 预计无对应"经检索修正：**resizable 有对应**（Semi Resizable/ResizeGroup，content/basic/resizable）；scroll-area、toggle、toggle-group、questionnaire、trace 确认无对应。
- Select 的 native 用法：Semi 文档（content/input/select）未提供原生 `<select>` 模式；native-select 的对齐仅能做"语义级"记录。
- 枚举值均直接摘自 `packages/semi-foundation/*/constants.ts`；文档与常量不一致处（如 slider SIZE 枚举未在 API 表暴露）已标注。
- SideSheet 包名注意：`packages/semi-ui/sideSheet`（目录名大小写特殊），导入名为 `SideSheet`。
