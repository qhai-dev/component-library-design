// 核心组件的 Props 表（手工维护，反映当前实现的实际 API）
// 其余组件回退到「导出清单」（exports.generated.ts）

export interface ApiRow {
  prop: string;
  type: string;
  default?: string;
  desc: string;
}

export const API_TABLES: Record<string, ApiRow[]> = {
  button: [
    {
      prop: "variant",
      type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
      default: '"default"',
      desc: "视觉形态：primary solid / tertiary solid / danger solid / outline / borderless / 链接",
    },
    {
      prop: "size",
      type: '"default" | "sm" | "lg" | "icon" | "xs" | "icon-xs" | "icon-sm" | "icon-lg"',
      default: '"default"',
      desc: "尺寸，高度对应 Semi 控件高度 32/24/40 与方形图标钮",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      desc: "以 Base UI render 多态渲染子元素（如 <a>）",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      desc: "禁用态（Semi：bg-disabled + disabled-text 实色）",
    },
    {
      prop: "type",
      type: '"button" | "reset" | "submit"',
      default: '"button"',
      desc: "原生 HTML type 属性",
    },
    { prop: "className", type: "string", desc: "追加到根元素，tailwind-merge 尾部覆盖" },
  ],
  input: [
    { prop: "type", type: "string", default: '"text"', desc: "原生 input type" },
    { prop: "placeholder", type: "string", desc: "占位文本（text-2 色）" },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      desc: "禁用（disabled-fill 底 + disabled-text）",
    },
    { prop: "className", type: "string", desc: "追加到 input" },
  ],
  textarea: [
    { prop: "placeholder", type: "string", desc: "占位文本" },
    { prop: "disabled", type: "boolean", default: "false", desc: "禁用" },
    { prop: "className", type: "string", desc: "追加到 textarea" },
  ],
  select: [
    { prop: "items", type: "{ value, label }[]", desc: "选项列表（配置式，亦可组合 SelectItem）" },
    { prop: "placeholder", type: "string", desc: "触发器占位（text-2 色）" },
    { prop: "aria-label", type: "string", desc: "无 label 时的可访问名称" },
    { prop: "className", type: "string", desc: "追加到触发器" },
  ],
  checkbox: [
    { prop: "checked / defaultChecked", type: "boolean", desc: "受控/非受控选中态" },
    { prop: "disabled", type: "boolean", default: "false", desc: "禁用（disabled-fill 底）" },
    { prop: "aria-label", type: "string", desc: "可访问名称" },
  ],
  radio_group: [
    { prop: "defaultValue", type: "string", desc: "默认选中值" },
    { prop: "value", type: "string", desc: "受控选中值" },
    { prop: "onValueChange", type: "(value: string) => void", desc: "选中变化回调" },
  ],
  switch: [
    {
      prop: "checked / defaultChecked",
      type: "boolean",
      desc: "受控/非受控，开启态 = Semi success 绿",
    },
    { prop: "size", type: '"default" | "sm"', default: '"default"', desc: "尺寸（40×24 / 26×16）" },
    { prop: "onCheckedChange", type: "(checked: boolean) => void", desc: "切换回调" },
  ],
  dialog: [
    {
      prop: "open / defaultOpen",
      type: "boolean",
      desc: "受控/非受控显隐（bg-2 容器 + 12px 圆角 + shadow-elevated）",
    },
    { prop: "onOpenChange", type: "(open: boolean) => void", desc: "显隐回调" },
  ],
  tabs: [
    { prop: "defaultValue / value", type: "string", desc: "受控/非受控激活标签" },
    { prop: "onValueChange", type: "(value: string) => void", desc: "切换回调" },
    {
      prop: "className（TabsList）",
      type: "string",
      desc: "line 形态带 2px 底边框（border-border）",
    },
  ],
  table: [
    {
      prop: "—",
      type: "组合式",
      desc: "Table/TableHeader/TableRow/TableHead/TableCell 组合（Semi 视觉：表头 2px 底边、16px 内边距）",
    },
  ],
  card: [
    {
      prop: "—",
      type: "组合式",
      desc: "Card/CardHeader/CardTitle/CardDescription/CardContent（1px 边框 + 6px 圆角 + shadow-elevated）",
    },
  ],
  alert: [
    {
      prop: "variant",
      type: '"default" | "destructive"',
      default: '"default"',
      desc: "info 浅蓝底 / danger 浅红底（Semi Banner）",
    },
  ],
  badge: [
    {
      prop: "variant",
      type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
      default: '"default"',
      desc: "Semi Tag 形态（default = grey 底 text-2）",
    },
  ],
  tooltip: [
    { prop: "content（children）", type: "ReactNode", desc: "提示内容（grey-7 底 + bg-0 文字）" },
    { prop: "delayDuration", type: "number", desc: "触发延迟毫秒" },
  ],
  popover: [
    {
      prop: "side / align",
      type: '"top"|"right"|"bottom"|"left" / "start"|"center"|"end"',
      desc: "浮层方位（12 组合）",
    },
  ],
  avatar: [
    {
      prop: "—",
      type: "组合式",
      desc: "Avatar + AvatarFallback（Semi：40px 默认、圆形、fill-1 回退底）",
    },
  ],
  separator: [
    {
      prop: "orientation",
      type: '"horizontal" | "vertical"',
      default: '"horizontal"',
      desc: "方向（1px --semi-color-border）",
    },
    { prop: "decorative", type: "boolean", default: "true", desc: "是否对可访问性隐藏" },
  ],
  progress: [
    { prop: "value", type: "number", desc: "进度 0-100（success 绿指示条）" },
    { prop: "aria-label", type: "string", desc: "可访问名称" },
  ],
  slider: [
    { prop: "defaultValue / value", type: "number[]", desc: "滑块值（数组支持双滑块）" },
    { prop: "min / max / step", type: "number", default: "0 / 100 / 1", desc: "范围与步长" },
  ],
};
