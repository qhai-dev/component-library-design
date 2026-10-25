# API 审计片段 A（group A ← Semi）

来源：semi-design 仓库（READ-ONLY）

- docs: `content/<category>/<name>/index.md`（属性/类型/默认值 表）
- 枚举: `packages/semi-foundation/<name>/constants.ts`
- 注：本 semi 版本 docs 目录结构与旧版不同：Modal/SideSheet/Dropdown/Card 等在 `content/show/`，Banner/Toast 等在 `content/feedback/`，CodeHighlight/Chat 在 `content/plus/`，AI 对话在 `content/ai/`。

### accordion ← Semi Collapse (content/show/collapse)

- 关键 props: `accordion`(boolean | false), `activeKey`(string \| string[] 受控 | 无), `defaultActiveKey`(string \| string[] | 无), `clickHeaderToExpand`(boolean | true), `expandIconPosition`(string: `left`/`right` | `right`), `keepDOM`(boolean | false), `lazyRender`(boolean | false), `motion`(boolean | true), `collapseIcon`(ReactNode | `<IconChevronDown/>`), `expandIcon`(ReactNode | `<IconChevronUp/>`), `onChange`(function(activeKey, e) | 无)
- Collapse.Panel: `itemKey`(string 必填唯一), `header`(ReactNode), `extra`(ReactNode 仅 header 为 string 时生效), `disabled`(boolean | false), `showArrow`(boolean | true), `reCalcKey`(string\|number)
- 枚举: `strings.iconPosition = ['left','right']`
- Semi 特有能力: Panel 级 `extra` 右上角辅助区; `keepDOM+lazyRender` 延迟渲染; `clickHeaderToExpand` 区分整头点击/箭头点击
- 差异说明: shadcn Accordion 为单值 type/openMultiple 模型，Semi 为 activeKey(可多值)+itemKey 匹配模型

### alert ← Semi Banner (content/feedback/banner)

- 关键 props: `type`(string: `info`/`success`/`danger`/`warning` | `info`), `title`(ReactNode | -), `description`(ReactNode | -), `icon`(string\|ReactNode 为 null 不显示 | -), `closeIcon`(string\|ReactNode 为 null 不显示关闭按钮 | -), `bordered`(boolean | false), `fullMode`(boolean 全屏模式 | true), `onClose`(function | -), `style`(object | -)
- 枚举: `strings.TYPE = ['info','success','danger','warning']`
- Semi 特有能力: fullMode 全屏横幅模式; role='alert' ARIA 内建; icon/closeIcon 传 null 隐藏
- 差异说明: Semi 无独立可关闭状态管理（Banner 仅 onClose 回调，无 visible 受控），shadcn Alert 无内置关闭按钮

### alert-dialog ← Semi Modal (content/show/modal)

- 关键 props: `visible`(boolean | false), `title`(ReactNode | 无), `content`(ReactNode | 无), `footer`(ReactNode | 无), `okText`/`cancelText`(string | 无), `okType`(string: primary/secondary/tertiary/warning/danger | 'primary'), `okButtonProps`/`cancelButtonProps`(ButtonProps | 无), `confirmLoading`(boolean | false), `maskClosable`(boolean | true), `closeOnEsc`(boolean | true), `closable`(boolean | true), `centered`(boolean | false), `size`(string: `small`(448px)/`medium`(684px)/`large`(920px)/`full-width` | 'small'), `width`/`height`(number | 无/448), `hasCancel`(boolean | true), `mask`(boolean | true), `keepDOM`(boolean | false), `zIndex`(number | 1000), `onOk`/`onCancel`((e)=>void\|Promise，Promise 时按钮 loading | 无)
- 枚举: `strings.SIZE = ['small','medium','large','full-width']`；`strings.directions = ['ltr','rtl']`
- Semi 特有能力: 函数式 `Modal.info/success/error/warning/confirm`（返回引用可 `modal.update()`/`modal.destroy()`，另有 `Modal.destroyAll`、`Modal.useModal`）；onOk/onCancel 返回 Promise 自动 loading
- 差异说明: alert-dialog 对应 Semi 的 Modal.confirm 系确认场景；shadcn 将 AlertDialog/Dialog 拆两组件，Semi 只有一个 Modal

### aspect-ratio ← Semi 无对应

- 无对应。最接近的是 `content/basic/resizable`（Resizable）的 `lockAspectRatio`(boolean\|number) 属性，但那是拖拽缩放的锁定横纵比，不是 shadcn AspectRatio 的固定容器比例原语，不建议对齐。
- Semi 特有能力: 无

### attachment ← Semi AIChatInput 附件区 (content/ai/aiChatInput) + Upload (content/input/upload)

- Semi 无独立 Attachment 组件；附件以 AIChatInput 的上传区呈现。关键 props（相关）: `uploadProps`(UploadProps | -), `onUploadChange`((props: OnChangeProps)=>void | -), `renderUploadButton`(({defaultNode,openFileDialog,disabled,attachments})=>ReactNode | -), `showUploadButton`(boolean | true), `enableUpload`（plus/chat）(boolean\|{pasteUpload,clickUpload,dragUpload} | true), `uploadTipProps`(TooltipProps | -)
- Upload 核心枚举: `FILE_STATUS = ['uploading','success','uploadFail','validating','validateFail','wait']`（semi-foundation/chat/constants.ts 同源）
- Semi 特有能力: 粘贴/点击/拖拽三种上传行为可分别开关; uploadFail/validating 等细粒度文件状态
- 差异说明: shadcn Attachment 是独立展示组件；Semi 附件能力内嵌在 Chat/AIChatInput（`<Attachment>` 仅为数据类型 {name,url,...}）

### avatar ← Semi Avatar (content/show/avatar)

- 关键 props: `src`(string | -), `srcSet`(string | -), `alt`(string | -), `shape`(string: `circle`/`square` | `circle`), `size`(string: `extra-extra-small`/`extra-small`/`small`/`default`/`medium`/`large`/`extra-large` 或合法 width 值如 "10px" | `medium`), `color`(string 17 色 | `grey`), `gap`(number 字符距左右像素 | 3), `hoverMask`(ReactNode hover 覆盖层 | -), `imgAttr`(ImgHTMLAttributes | -), `onError`((e)=>boolean 返回 false 关闭 fallback | -), `topSlot`/`bottomSlot`(Slot 配置对象 | -), `border`({color?,motion?}\|boolean | -)
- AvatarGroup: `maxCount`(number 超出显示+N), `overlapFrom`(`start`/`end` | `start`), `renderMore`((restNumber,restAvatars)=>ReactNode), `shape`, `size`
- 枚举: `SHAPE=['circle','square']`; `SIZE=['extra-extra-small','extra-small','small','default','medium','large','extra-large']`; `COLOR=['grey','red','pink','purple','violet','indigo','blue','light-blue','cyan','teal','green','light-green','lime','yellow','amber','orange','white']`; `OVERLAP_FROM=['start','end']`
- Semi 特有能力: hoverMask 悬浮覆盖层; topSlot/bottomSlot 装饰插槽; AvatarGroup.renderMore
- 差异说明: shadcn Avatar 无色彩系统与 group 覆盖方向概念，fallback 逻辑二者都有

### badge ← Semi Tag (content/show/tag)

- 关键 props: `color`(string 17 色 | `grey`), `type`(string: `light`/`solid`/`ghost` | `light`), `size`(string: `small`/`large` | `small`), `shape`(string: `square`/`circle` | `square`), `closable`(boolean | false), `visible`(boolean | true), `prefixIcon`/`suffixIcon`(ReactNode | -), `avatarSrc`(string 头像标签 | -), `avatarShape`(`square`/`circle` | `square`), `colorful`(boolean 多彩 | false), `gradient`(boolean 需 colorful | false), `onClick`((e)=>void), `onClose`((tagChildren,e,tagKey)=>void)
- TagGroup: `maxTagCount`(number 超出 +N), `tagList`(TagProps[]), `showPopover`(boolean hover +N 显示剩余), `popoverProps`(PopoverProps), `onTagClose`(fn)
- 枚举: `TAG_SIZE=['default','small','large']`; `TAG_COLOR`=17 色（同 Avatar COLOR）; `TAG_TYPE=['light','solid','ghost']`; `AVATAR_SHAPE=['square','circle']`
- Semi 特有能力: TagGroup +N 折叠 + Popover 展示溢出; SplitTagGroup 组合标签; 17 色色彩系统 + colorful 渐变
- 差异说明: shadcn Badge 仅 variant（default/secondary/destructive/outline），无关闭/计数/色彩枚举；Semi 的 badge（计数小红点）是另一个独立 Tag 之外的 Badge 组件（content/basic 无，show/badge 有）

### breadcrumb ← Semi Breadcrumb (content/navigation/breadcrumb)

- 关键 props: `routes`(Array<Route\|string> | -), `separator`(ReactNode | '/'), `compact`(boolean 紧凑 | true), `maxItemCount`(number 自动折叠阈值 | 4), `autoCollapse`(boolean | true), `moreType`(string: `default`/`popover` | 'default'), `renderMore`((restItem:ReactNode[])=>ReactNode | -), `showTooltip`(boolean\|{width,ellipsisPos,opts} | {width:150,ellipsisPos:'end',opts:{...}}), `renderItem`((Route)=>ReactNode | -), `activeIndex`(number 受控 | -), `onClick`((item:Route,e)=>void | -)
- Breadcrumb.Item: `href`(string), `icon`(ReactNode), `noLink`(boolean | false), `separator`(ReactNode 可覆盖父级)
- 枚举: `MORE_TYPE=['default','popover']`
- Semi 特有能力: maxItemCount 自动折叠为 ...（popover 可选）; 逐项 showTooltip 溢出省略; Route{name,href,path,icon}
- 差异说明: shadcn Breadcrumb 是纯展示组合组件（无折叠/tooltip 内建）

### bubble ← Semi Chat (content/plus/chat) / AIChatDialogue (content/ai/aiChatDialogue)

- 关键 props: `chats`(Message[] 受控 | -), `mode`(string: `bubble`/`noBubble`/`userBubble` | `bubble`), `align`(`leftRight`/`leftAlign` | `leftRight`), `roleConfig`(RoleConfig{user/assistant/system: Metadata{name,avatar,color}} 必填 | -), `onChatsChange`((chats:Message[])=>void), `onMessageSend`((content,attachment)=>void), `onMessageGoodFeedback`/`onMessageBadFeedback`/`onMessageCopy`/`onMessageDelete`/`onMessageReset`((message)=>void), `customMarkDownComponents`(MDX components), `markdownRenderProps`(MarkdownRenderProps), `escapeHtml`(boolean | true), `renderDivider`((message)=>ReactNode)
- Message: `{role, name, id, content(string|Content[]), parentId, createAt/createdAt, status}`；status（chat）：`loading/incomplete/complete/error`；status（aiChatDialogue）：`queued/in_progress/incomplete/completed/failed/cancelled`
- 枚举: `MODE=['bubble','noBubble','userBubble']`; `CHAT_ALIGN=['leftRight','leftAlign']`; `ROLE=['user','assistant','system','divider']`
- Semi 特有能力: OpenAI Response Object 原型的 Message 数据模型 + 4 种 Adapter 转换函数; 内建复制/删除/重置/好评差评/停止生成 action; roleConfig 多角色（Map<string,Metadata> 支持多助手）
- 差异说明: shadcn Bubble 仅 role/content/variant 的展示原语，无数据流与反馈 action

### button ← Semi Button (content/basic/button)

- 关键 props: `theme`(string: `solid`/`borderless`/`light`/`outline` | `light`), `type`(string: `primary`/`secondary`/`tertiary`/`warning`/`danger` | `primary`), `size`(string: `large`/`default`/`small` | `default`), `block`(boolean | false), `disabled`(boolean | false), `loading`(boolean | false), `icon`(ReactNode), `iconPosition`(`left`/`right` | `left`), `htmlType`(`button`/`reset`/`submit` | `button`), `colorful`(boolean 多彩 | false), `noHorizontalPadding`(boolean\|'left'\|'right'\|Array | false), `aria-label`(string), `onClick`(fn(MouseEvent))
- 枚举: `sizes=['default','small','large']`; `btnTypes=['primary','secondary','tertiary','warning','danger']`; `themes=['solid','borderless','light','outline']`; `htmlTypes=['button','reset','submit']`; `iconPositions=['left','right']`
- Semi 特有能力: theme×type 双维度组合; noHorizontalPadding 图标按钮贴边; colorful 多彩
- 差异说明: shadcn 用单 variant 模型；Semi 是 theme(底色形态)×type(语义色) 正交组合，映射时需拆分

### button-group ← Semi ButtonGroup / SplitButtonGroup (content/basic/button)

- 关键 props（ButtonGroup，作用于子按钮）: `type`(同 Button | 'primary'), `theme`(同 Button | 'light'), `size`(`large`/`default`/`small` | 'default'), `disabled`(boolean | false), `colorful`(boolean | false), `aria-label`(string)
- SplitButtonGroup: 仅 `className`/`style`/`aria-label`
- 枚举: 同 Button
- Semi 特有能力: SplitButtonGroup 主按钮+下拉箭头分裂布局; group 级 props 下发覆盖
- 差异说明: shadcn ToggleGroup/Tabs 式分隔由 CSS 实现，Semi 是显式容器组件且无 orientation

### calendar ← Semi DatePicker 面板 (content/input/datepicker) / Calendar (content/show/calendar)

- DatePicker 面板相关关键 props: `type`(string: `date`/`dateRange`/`year`/`month`/`monthRange`/`dateTime`/`dateTimeRange` | 'date'), `density`(`default`/`compact` | default), `defaultPickerValue`(ValueType), `disabledDate`((date,options)=>boolean | ()=>false), `presets`(PresetType[] 快捷方式 | []), `presetPosition`(`left`/`right`/`top`/`bottom` | 'bottom'), `multiple`(boolean 仅 type=date | false), `max`(number 多选上限), `insetInput`(boolean\|InsetInputProps | false), `needConfirm`(boolean 仅 dateTime\|dateTimeRange), `renderDate`/`renderFullDate`(自定义格子渲染), `startYear`/`endYear`(number | 前/后100年), `rangeSeparator`(string | '~'), `syncSwitchMonth`(boolean 范围双面板联动 | false), `weekStartsOn`（Calendar）
- 独立 Calendar 组件（月历视图）: `mode`("day"/"week"/"month"/"range" | "week"), `events`(EventObject[]), `displayValue`(Date), `dateGridRender`(fn), `markWeekend`(boolean | false), `weekStartsOn`(number 0=周日 | 0), `height`(600), `onClick`/`onMoreClick`
- 枚举: `TYPE_SET=['date','dateRange','year','month','monthRange','dateTime','dateTimeRange']`; `DENSITY_SET=['default','compact']`; Calendar `MODE=['day','week','month','range']`
- Semi 特有能力: 多 type 一组件（date/range/dateTime/month…）; presets 快捷面板; 双面板范围选择
- 差异说明: shadcn Calendar 是纯月格面板（day-picker 封装）；Semi 无等价的"裸月面板"组件（DatePicker 面板内嵌于浮层），独立 Calendar 是日程事件视图

### card ← Semi Card (content/show/card)

- 关键 props: `title`(ReactNode | -), `header`(ReactNode 自定义头部，覆盖 title/headerExtraContent | -), `headerExtraContent`(ReactNode | -), `cover`(ReactNode | -), `footer`(ReactNode | -), `footerLine`(boolean | false), `headerLine`(boolean | true), `actions`(Array<ReactNode> | -), `bordered`(boolean | true), `shadows`(string: `hover`/`always` 不传则无阴影 | -), `loading`(boolean | false), `bodyStyle`/`headerStyle`/`footerStyle`(CSSProperties)
- CardGroup: `spacing`(number\|number[] [水平,垂直] | 12px), `type`(`grid` | -)
- 枚举: `SHADOWS=['hover','always']`; `TYPE=['grid']`
- Semi 特有能力: loading 骨架占位; CardGroup 网格模式
- 差异说明: shadcn Card 是 Card/CardHeader/CardTitle/... 无样式组合子组件；Semi 是带默认样式的单组件+props

### carousel ← Semi Carousel (content/show/carousel)

- 关键 props: `activeIndex`(number 受控 | -), `defaultActiveIndex`(number | 0), `animation`(`fade`/`slide` | "slide"), `autoPlay`(boolean\|{interval=2000,hoverToPause=true} | true), `speed`(number ms | 300), `slideDirection`(`left`/`right` | "left"), `indicatorType`(`dot`/`line`/`columnar` | "dot"), `indicatorSize`(`small`/`medium` | "small"), `indicatorPosition`(`left`/`center`/`right` | "center"), `showIndicator`(boolean | true), `showArrow`(boolean | true), `arrowType`(`hover`/`always` | always), `arrowProps`(()=>{leftArrow,rightArrow}), `theme`(`primary`/`light`/`dark` | "light"), `trigger`(`hover`/`click` | -), `onChange`((index,preIndex)=>void)
- 枚举: `ANIMATION_MAP=['slide','fade']`; `TYPE_MAP=['columnar','line','dot']`; `THEME_MAP=['dark','primary','light']`; `POSITION_MAP=['left','center','right']`; `ARROW_MAP=['always','hover']`; `SIZE=['small','medium']`; `TRIGGER=['click','hover']`; `DIRECTION=['left','right']`
- Semi 特有能力: 实例方法（ref） goTo/prev/next; arrowProps 完全自定义箭头; columnar 指示器
- 差异说明: shadcn Carousel 基于 embla（分页/循环自由度），Semi 是轻量轮播+内置指示器/箭头配置

### chart ← Semi VChart / Semi DV (content/show/chart)

- Semi 无自有图表组件；官方方案是基于 `@visactor/vchart` + `@visactor/vchart-semi-theme` 的主题接入（content/show/chart 仅讲主题，无 API 表）。props 模型 = VChart spec（data/axes/legends/mark 等）+ react-vchart 的 `<VChart spec={} />`
- Semi 特有能力: Semi DV 主题生成器（主题色/色板/圆角等 Token 级配置导出 VChart 主题）
- 差异说明: shadcn 用 Recharts 组件式 API；Semi/VChart 用声明式 spec 对象，不做逐 props 对齐

### checkbox ← Semi Checkbox / CheckboxGroup (content/input/checkbox)

- Checkbox 关键 props: `checked`/`defaultChecked`(boolean | false), `disabled`(boolean | false), `indeterminate`(boolean 仅样式 | false), `value`(any Group 中代表值), `type`(string: `default`/`card`/`pureCard` | `default`), `extra`(ReactNode 副文本 | -), `addonId`/`extraId`(string aria id 自动生成), `onChange`(fn(e)), `preventScroll`(boolean)
- CheckboxGroup: `value`/`defaultValue`(any[] | \[]), `options`(any[] | \[]), `direction`(`horizontal`/`vertical` | `vertical`), `disabled`(boolean), `type`(同上), `name`(string), `onChange`(fn(checkedValue))
- 枚举: `DIRECTION_SET=['horizontal','vertical']`; type: `default/card/pureCard`
- Semi 特有能力: card/pureCard 卡片样式; extra 副文本; aria id 自动接线
- 差异说明: shadcn Checkbox 单框 + CheckboxGroup 需自行组合；Semi Group 内建 direction/options/type

### code-block ← Semi CodeHighlight (content/plus/codehighlight)

- 关键 props: `code`(string 代码纯文本 | -), `language`(string | -), `lineNumber`(boolean | true), `defaultTheme`(boolean 用自定义主题时设 false | true), `className`/`style`
- 枚举: `strings = {}`（无枚举）
- Semi 特有能力: 基于 highlight.js 的语言自动高亮; 自定义主题注入
- 差异说明: shadcn 无 code-block 原语（常配 react-syntax-highlighter）；Semi 仅有只读高亮展示，无行操作/复制按钮内建

### collapsible ← Semi Collapsible (content/show/collapsible)

- 关键 props: `isOpen`(boolean 受控 | false), `collapseHeight`(number 折叠高度 | 0), `collapseHeightAdaptive`(boolean 内容小于 collapseHeight 时自适应 | false), `duration`(number ms | 250), `fade`(boolean | false), `motion`(boolean | true), `keepDOM`(boolean | false), `lazyRender`(boolean | false), `reCalcKey`(number\|string 内容变化重算高度), `onMotionEnd`(fn), `id`/`className`/`style`
- 枚举: 无（constants.ts 无 strings）
- Semi 特有能力: collapseHeight 部分折叠（>0 收起仍露出一段）; fade 淡出; reCalcKey 动态内容重算
- 差异说明: shadcn Collapsible 是 open/defaultOpen + 两个 trigger/content 子组件；Semi 是单受控布尔组件

### combobox ← Semi AutoComplete (content/input/autocomplete) + Select 多选 (content/input/select)

- AutoComplete 关键 props: `data`(array 字符串或对象数组 | \[]), `value`/`defaultValue`(string\|number | 无), `onSelect`(fn(item)), `onSearch`(fn(value)), `onChange`(fn(value)), `renderItem`((option)=>ReactNode), `renderSelectedItem`((option)=>string), `onSelectWithObject`(boolean | false), `defaultActiveFirstOption`(boolean | false), `showClear`(boolean | false), `size`(`small`/`default`/`large` | 'default'), `validateStatus`(`default`/`error`/`warning` | 'default'), `loading`(boolean | false), `emptyContent`(ReactNode | null), `maxHeight`(number\|string | 300), `position`(string 同 Tooltip | 'bottomLeft')
- Select 多选补充: `multiple`(boolean | false), `filter`(boolean\|fn(sugInput,option) | false), `allowCreate`(boolean 需配合 filter | false), `maxTagCount`(number +N), `autoClearSearchValue`(boolean | true), `mode`（`select`/`autoComplete`）, `labelInValue`, `searchPosition`（`trigger`/`dropdown`）
- 枚举: AutoComplete `SIZE=['small','large','default']`, `STATUS=default/error/warning/success`; Select `SIZE_SET=['small','large','default']`, `MODE_SELECT='select'`, `MODE_AUTOCOMPLETE='autoComplete'`, `SEARCH_POSITION_TRIGGER='trigger'`, `SEARCH_POSITION_DROPDOWN='dropdown'`
- Semi 特有能力: AutoComplete 与 Select 可互通（Select mode=autoComplete、AutoComplete renderSelectedItem）; filter+allowCreate 即获得可创建 combobox
- 差异说明: shadcn Combobox 是 Popover+Command 组合；Semi 是两个成品组件，无自定义空状态触发器插槽（emptyContent 除外）

### command ← Semi 无对应

- 无对应。Semi 无 Command/Cmdk 调色板组件；功能上可用 AutoComplete/Select(filter) 或 Dropdown(menu JSON) 近似。
- Semi 特有能力: 无

### context-menu ← Semi Dropdown (content/show/dropdown, trigger='contextMenu')

- 关键 props: `trigger`(string: `hover`/`focus`/`click`/`custom`/`contextMenu` | "hover"，contextMenu 即右键菜单), `menu`(Array<DropdownMenuItem> JSON 快速配置 | \[]), `render`(ReactNode，由 Dropdown.Menu/Item/Title 构成), `position`(string 同 Tooltip 12 方位 | "bottom"), `visible`(boolean 受控，配 trigger=custom | 无), `showTick`(boolean active 项左侧勾 | false), `clickToHide`(boolean | -), `spacing`(number px | 4), `zIndex`(number | 1050), `closeOnEsc`(boolean | true), `onClickOutSide`(fn | -), `onVisibleChange`(fn(visible))
- Dropdown.Item: `type`(`primary`/`secondary`/`tertiary`/`warning`/`danger` | "tertiary"), `active`(bool), `disabled`, `icon`, `onContextMenu`
- DropdownMenuItem: `node`(`title`/`item`/`divider`), `name`
- 枚举: trigger 五值如上; Item type 同 Button btnTypes
- Semi 特有能力: menu JSON 数组免 JSX; 右键触发内建（v2.42+）; ARIA role=menu/menuitem + 键盘导航
- 差异说明: shadcn ContextMenu 独立组件且支持子菜单/checkbox/radio item；Semi Dropdown 的子菜单/多选需自行组装

### dialog ← Semi Modal (content/show/modal)

- 关键 props: 同 alert-dialog 条目（同一 Semi 组件）：`visible`, `title`, `footer`, `closable`, `closeIcon`(`<IconClose/>`), `mask`, `maskClosable`(true), `closeOnEsc`(true), `centered`(false), `fullScreen`(boolean 会覆盖 width/height | false), `size`(`small`/`medium`/`large`/`full-width` | 'small'), `width`(448), `zIndex`(1000), `getPopupContainer`(()=>document.body), `motion`(true), `keepDOM`(false), `lazyRender`(true), `modalRender`((modal)=>ReactNode), `afterClose`(fn), `header`(ReactNode), `onOk`/`onCancel`
- 枚举: `SIZE=['small','medium','large','full-width']`
- Semi 特有能力: 函数式调用 Modal.info/confirm/update/destroy/destroyAll + Modal.useModal; fullScreen; modalRender
- 差异说明: shadcn Dialog=DialogTrigger/DialogContent/... 受控组合；Semi 是 visible 布尔受控的单组件 + 命令式双通道

### direction ← Semi ConfigProvider (content/other/configprovider)

- 关键 props（ConfigProvider）: `direction`(`ltr`\|`rtl` | `ltr`), `getPopupContainer`(fn | ()=>document.body), `locale`(object 同 LocaleProvider，优先级高于 LocaleProvider), `timeZone`(string\|number IANA 或 GMT 偏移), `responsiveObserve`(boolean | false), `responsiveMap`(object xs/sm/md/lg/xl/xxl)
- 枚举: `direction = ['ltr','rtl']`（modal constants `directions` 同值）
- Semi 特有能力: timeZone 全局时区; locale 全局多语言; 组件级 RTL 适配（v1.8.0+，Modal/Notification/Toast 命令式调用需单独传 direction prop）
- 差异说明: shadcn 用 html dir + Radix DirectionProvider；Semi 用 ConfigProvider context 但命令式 API 需显式传参（注意点）

### drawer ← Semi SideSheet (content/show/sidesheet)

- 关键 props: `visible`(boolean | false), `title`(ReactNode | -), `footer`(ReactNode | null), `placement`(string: `top`/`right`/`bottom`/`left` | `right`), `size`(string: `small`(448px)/`medium`(684px)/`large`(920px) 仅 left/right | `small`), `width`(number\|string | 448 仅 left/right), `height`(number\|string | 400 仅 top/bottom), `mask`(boolean true 时禁止 body 滚动 | true), `maskClosable`(boolean | true), `closable`(boolean | true), `closeOnEsc`(boolean | false — 注意与 Modal 相反默认值), `disableScroll`(boolean | true), `keepDOM`(boolean | false), `motion`(boolean | true), `zIndex`(number | 1000), `headerStyle`/`bodyStyle`/`maskStyle`, `onCancel`(fn), `afterVisibleChange`((isVisible)=>void)
- 枚举: `PLACEMENT=['top','right','bottom','left']`; `SIZE=['small','medium','large']`（WIDTH{448,684,920}）
- Semi 特有能力: 四方向滑出; afterVisibleChange 动画结束回调; role=dialog 内建
- 差异说明: shadcn Drawer（vaul）无 size 预设枚举、默认 bottom 侧滑；Semi 默认 right 且有 small/medium/large 宽度档位

### dropdown-menu ← Semi Dropdown (content/show/dropdown)

- 关键 props: 同 context-menu 条目。补充：`position` 默认 "bottom"（常用 bottomLeft/bottomRight），`mouseEnterDelay`/`mouseLeaveDelay`(number ms | 50), `keepDOM`(boolean | false), `stopPropagation`(boolean | false), `rePosKey`(string\|number 手动重定位), `autoAdjustOverflow`(boolean | true), `disableFocusListener`(boolean | false)
- Dropdown.Title: `className`/`style`
- 枚举: trigger=`['hover','focus','click','custom','contextMenu']`; Item type=`['primary','secondary','tertiary','warning','danger']`
- Semi 特有能力: Dropdown.Menu/Item/Title 组合式 + menu JSON 双用法; showTick 选中勾; position 12 方位
- 差异说明: shadcn DropdownMenu 有 checkbox-item/radio-group/sub-menu/shortcut 内建；Semi 需要自组（Item 仅 active/disabled/icon/type）

### empty ← Semi Empty (content/show/empty)

- 关键 props: `title`(ReactNode | -), `description`(ReactNode | -), `image`(ReactNode\|{id,viewBox,url} | -), `darkModeImage`(ReactNode 暗色模式占位图，响应 body theme-mode | -), `imageStyle`(CSSProperties | -), `layout`(`vertical`/`horizontal` | `vertical`)
- 枚举: `LAYOUT=['vertical','horizontal']`
- Semi 特有能力: darkModeImage 自动跟随暗色模式; 插画体系 @douyinfe/semi-illustrations
- 差异说明: shadcn 无 Empty 原语（社区方案）；Semi 有官方插画库直配

### field ← Semi Form Field props (content/input/form · Field Props 节)

- 关键 props: `field`(string 必填，formState.values 映射路径), `initValue`(any，mounted 时消费一次，优先级高于 Form.initValues), `label`(string\|object 透传 Form.Label), `labelPosition`(`top`/`left`/`inset`), `labelAlign`(string), `labelWidth`(string\|number), `noLabel`(boolean), `noErrorMessage`(boolean), `helpText`(ReactNode 与校验信息同区，校验优先), `extraText`(ReactNode)，`extraTextPosition`(`middle`/`bottom` | 'bottom'), `validator`((fieldValue,values)=>string\|Promise，v2.97+ 推荐), `rules`(async-validator 数组), `transform`((value)=>Number 校验前转换), `convert`((fieldValue)=>newValue), `validateStatus`(`success`/`error`/`warning`/`default` | 'default'), `trigger`(`blur`/`change`/`custom`/`mount` 或数组 | 'change'), `keepState`(boolean 卸载保留状态 | false), `allowEmptyString`(boolean | false), `pure`(boolean 仅接管数据流不插 Label/ErrorMessage | false), `stopValidateWithError`(boolean | false)
- 枚举: labelPosition=`top/left/inset`; validateStatus=`success/error/warning/default`; trigger=`blur/change/custom/mount`
- Semi 特有能力: rules(async-validator)+validator 双校验通道; transform/convert 数据加工; keepState/pure 数据流接管
- 差异说明: shadcn field 是 react-hook-form 原语（register/controller），Semi 是声明式 props 挂在每个 Form.Xxx 上，非独立组件

### hover-card ← Semi Popover (content/show/popover · trigger='hover')

- 关键 props: `trigger`(string: `hover`/`focus`/`click`/`custom`/`contextMenu` | 'hover' — hover 即 HoverCard 语义), `content`(ReactNode\|({initialFocusRef})=>ReactNode | -), `position`(string: `top`/`topLeft`/`topRight`/`left`/`leftTop`/`leftBottom`/`right`/`rightTop`/`rightBottom`/`bottom`/`bottomLeft`/`bottomRight` | "bottom"), `visible`(boolean 配 trigger=custom), `showArrow`(boolean | -), `arrowPointAtCenter`(boolean | true), `spacing`(number\|{x,y} | 4 或 showArrow 时 10), `mouseEnterDelay`/`mouseLeaveDelay`(number ms | 50), `closeOnEsc`(boolean | true), `clickToHide`(boolean | false), `guardFocus`(boolean | true), `returnFocusOnClose`(boolean | true), `zIndex`(number | 1030), `onVisibleChange`(fn(isVisible))
- 枚举: `POSITION_SET` 12 方位（见左）；trigger 五值
- Semi 特有能力: 12 方位定位 + autoAdjustOverflow; guardFocus 焦点圈闭; content 函数式 initialFocusRef
- 差异说明: shadcn HoverCard 无 click/focus 等多触发器；Semi Popover 一个组件覆盖 hover-card/popover/click-menu 场景

### input ← Semi Input (content/input/input)

- 关键 props: `value`/`defaultValue`(ReactText | -), `size`(`large`/`default`/`small` | 'default'), `disabled`(boolean | false), `type`(原生 input type | text), `mode`(`password` | -), `prefix`/`suffix`(ReactNode | -), `addonBefore`/`addonAfter`(ReactNode | -), `showClear`(boolean 有内容且 hover/focus 显示清除 | false), `clearIcon`(ReactNode | -), `borderless`(boolean | -), `validateStatus`(`default`/`error`/`warning` 仅样式 | 'default'), `composition`(boolean 输入法模式 | false), `getValueLength`((value)=>number), `hideSuffix`(boolean | false), `onChange`(fn(value,e) 注意 value 在前), `onEnterPress`(fn), `onClear`(fn)
- TextArea: `autofocus`、`rows`、`maxCount`/`minCount`、`maxLength` 等（html 属性透传）
- 枚举: `SIZE=['small','large','default']`; `STATUS=['default','error','warning','success']`; `MODE=['password']`
- Semi 特有能力: composition 输入法合成事件控制; prefix/suffix/addon 双层插槽; validateStatus 纯样式校验态
- 差异说明: shadcn Input 是裸样式 input；Semi 的 onChange 首参是 value（非 event），且内置清除按钮/前后缀

### input-group ← Semi InputGroup (content/input/input · InputGroup 节)

- 关键 props: `size`(`large`/`default`/`small` | 'default'), `disabled`(boolean 统一下发，子级可覆盖), `label`(LabelProps | -), `labelPosition`(`top`/`left` | -), `onFocus`/`onBlur`(fn 透传子级，子级设置时覆盖), `className`/`style`
- 支持子组件：Input、InputNumber、Select、AutoComplete、TreeSelect、Cascader、DatePicker
- 枚举: size 同 input
- Semi 特有能力: group 级 props 事件透传+子级覆盖; Form.InputGroup 额外支持 labelPosition='inset' 与错误聚合（content/input/form · Form.InputGroup: `extraText`, `extraTextPosition`）
- 差异说明: shadcn 无 InputGroup 原语（addon 由 Input 内建）；Semi 是显式容器且限定支持的子组件白名单

### input-otp ← Semi PinCode (content/input/pincode)

- 关键 props: `count`(number 验证码位数 | 6), `value`/`defaultValue`(string | -), `format`(`number`\|`mixed`\|RegExp\|(char)=>boolean | 'number'), `size`(`large`/`default`/`small` | 'default'), `disabled`(boolean | false), `autoFocus`(boolean | true), `onChange`((value:string)=>void), `onComplete`((value:string)=>void 全部输完回调)
- 实例方法: `focus(index)`/`blur(index)` 按位聚焦
- 枚举: constants 无 strings（format 值域见上）
- Semi 特有能力: format 校验器（数字/字母混合/自定义正则）; onComplete 完成回调; 按位 focus/blur
- 差异说明: shadcn InputOTP 是 input-otp 库（group/slot/separator 子组件、外部 regex pattern）；Semi 是单组件 count+format 模型

### item ← Semi List.Item (content/show/list)

- 关键 props（List.Item）: `header`(ReactNode 列表项头内容 | -), `main`(ReactNode 列表项主体内容 | -), `extra`(ReactNode 附加内容 | -), `align`(string: `flex-start`/`flex-end`/`center`/`baseline`/`stretch` | `flex-start`), `onClick`/`onRightClick`(fn(e)), `className`/`style`
- 所在 List 关键 props: `dataSource`(any[]), `renderItem`((item,ind)=>ReactNode), `header`/`footer`(ReactNode), `emptyContent`(ReactNode), `split`(boolean | true), `bordered`(boolean | false), `size`(`small`/`default`/`large` | 'default'), `layout`(`vertical`/`horizontal` | 'vertical'), `loading`(boolean | false), `loadMore`(ReactNode), `grid`(Grid 配置 {span,gutter,xs..xxl})
- 枚举: `SIZE=['large','small','default']`; `LAYOUT=['vertical','horizontal']`; `ALIGN=['flex-start','flex-end','center','baseline','stretch']`
- Semi 特有能力: main/header/extra 三区槽位模型（非 children 组合式）; dataSource+renderItem 数据驱动; List grid 响应式栅格
- 差异说明: shadcn 无 List 原语（常配无）；shadcn 生态的 item 多为 command/select-option 内部项，Semi List.Item 是独立展示组件

### kbd ← Semi 无对应

- 无对应。Semi 无 Kbd 组件（快捷键展示可自组 Tag/样式；另有 HotKeys 组件 content/plus/hotkeys 用于按键监听而非展示）。
- Semi 特有能力: 无

### label ← Semi Form.Label (content/input/form · Form.Label 节)

- 关键 props: `text`(ReactNode Label 内容 | -), `required`(boolean 显示必填 \* | false), `optional`(boolean 自动追加"（可选）"，为 true 时 required \* 不展示 | false), `extra`(ReactNode 跟随 required 后 | -), `align`(string | 'left'), `width`(number\|string | -)
- 关联：Form Field 的 `label`(string\|object 自动插到每个 Field 上方)；Form.Slot 的 `label`({text,align} 或 string)
- 枚举: 无
- Semi 特有能力: optional 可选标识按 Locale 自动切多语言文案; required/optional 互斥逻辑
- 差异说明: shadcn Label 是通用表单标签（html label 包装）；Semi Label 是 Form 体系内的展示件，通常由 Form 自动插入

### marker ← Semi 无对应

- 无对应。语义上最接近 Semi Divider（content/basic/divider，`layout`='horizontal'\|'vertical'，`dashed`，`align`='left'/'center'/'right'），可作高亮/标记文本场景的近似替代参考。
- Semi 特有能力: 无

### menubar ← Semi 无对应

- 无对应。Semi 无横向菜单栏组件；最接近的是 Navigation（content/navigation/navigation，mode='horizontal'）或 Dropdown 组合。
- Semi 特有能力: 无

### message ← Semi AIChatDialogue / Chat 的 Message 模型 (content/ai/aiChatDialogue)

- 关键 props（AIChatDialogue）: `chats`(Message[] 受控), `roleConfig`(RoleConfig 必填), `mode`('bubble'/'noBubble'/'userBubble' | 'bubble'), `align`('leftRight'/'leftAlign'), `hints`(string[]), `onHintClick`, `onMessageCopy`/`onMessageDelete`/`onMessageEdit`/`onMessageReset`/`onMessageGoodFeedback`/`onMessageBadFeedback`((message)=>void), `onSelect`((selectedIds)=>void 配合 selecting), `selecting`(boolean | false), `showReset`(boolean | true), `showReference`(boolean | false), `onReferenceClick`/`onAnnotationClick`/`onFileClick`/`onImageClick`, `dialogueRenderConfig`(自定义各区块渲染)
- Message: `{role, name, id, content(string\|ContentItem[]), createdAt, model, status: 'queued'|'in_progress'|'incomplete'|'completed'|'failed'|'cancelled'}`（plus/chat 版 status 为 `loading/incomplete/complete/error`）
- 枚举: status 六值（OpenAI Response API 对齐）; ROLE=['user','assistant','system','divider']
- Semi 特有能力: 消息级 action 集合（复制/编辑/重置/分享/好坏反馈）; 引用(Reference)/标注(annotation)/多选(selecting)机制; scrollToBottom/scrollToTop/selectAll/deselectAll 实例方法
- 差异说明: shadcn 无 message 组件；Semi 的 message 是数据模型+对话容器一体，非单条消息原语

### message-scroller ← Semi Chat/Dialogue 滚动 + ScrollList (content/show/scrolllist)

- Chat/AIChatDialogue 内建滚动：实例方法 `scrollToBottom(animation: boolean)`（两者皆有）、`scrollToTop(animation)`（aiChatDialogue）；chat constants: `SCROLL_ANIMATION_TIME=300`, `SHOW_SCROLL_GAP=100`
- ScrollList 关键 props: `bodyHeight`(string\|number), `header`/`footer`(ReactNode); ScrollItem: `mode`(`normal`/`wheel` | "wheel"), `list`(ItemData[]), `cycled`(boolean 无限循环，仅 wheel | false), `selectedIndex`(number | 0), `motion`(boolean | true), `onSelect`(fn), `transform`((value,text)=>string)
- 枚举: ScrollItem `mode=['normal','wheel']`
- Semi 特有能力: 对话容器自带吸底滚动（无需业务实现）; ScrollItem 滚轮模式用于时间/数值选择器
- 差异说明: shadcn 无对应（消息流滚动由业务自行用 sticky/anchor 实现）；Semi 滚动能力封装在 Chat 实例方法内而非独立 scroller 组件
