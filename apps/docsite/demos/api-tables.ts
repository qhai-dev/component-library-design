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
    { prop: "size", type: '"default" | "sm" | "lg"', default: '"default"', desc: "控件高度 32/24/40（lg 字号 16px）" },
    { prop: "validateStatus", type: '"default" | "error" | "warning"', default: '"default"', desc: "校验状态（danger/warning-light 底 + 对应描边）" },
    { prop: "prefix / suffix", type: "ReactNode", desc: "内置前后缀内容（有附加内容时渲染 input-wrapper）" },
    { prop: "clearable", type: "boolean", default: "false", desc: "有值时显示清除按钮" },
    { prop: "passwordToggle", type: "boolean", default: "false", desc: 'type="password" 时的明文/密文眼睛切换' },
    { prop: "type", type: "string", default: '"text"', desc: "原生 input type" },
    { prop: "placeholder", type: "string", desc: "占位文本（text-2 色）" },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      desc: "禁用（disabled-fill 底 + disabled-text + not-allowed 光标）",
    },
    { prop: "className", type: "string", desc: "追加到 input（tailwind-merge 可覆盖内置）" },
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
      desc: "受控/非受控，开启态 = Semi 主色蓝（knob 白色带阴影）",
    },
    { prop: "size", type: '"default" | "sm"', default: '"default"', desc: "尺寸（40×24 / 26×16）" },
    { prop: "onCheckedChange", type: "(checked: boolean) => void", desc: "切换回调" },
  ],
  dialog: [
    {
      prop: "open / defaultOpen",
      type: "boolean",
      desc: "受控/非受控显隐（bg-2 容器 + 12px 圆角 + shadow-elevated + 顶部 80px）",
    },
    { prop: "size", type: '"small" | "medium" | "large" | "full"', default: '"small"', desc: "宽度 448 / 684 / 920 / calc(100vw-64px)" },
    { prop: "showCloseButton", type: "boolean", default: "true", desc: "右上角关闭按钮" },
    { prop: "onOpenChange", type: "(open: boolean) => void", desc: "显隐回调" },
  ],
  tabs: [
    { prop: "defaultValue / value", type: "string", desc: "受控/非受控激活标签" },
    { prop: "onValueChange", type: "(value: string) => void", desc: "切换回调" },
    {
      prop: "className（TabsList）",
      type: "string",
      desc: "line 形态：1px 轨道线 + 2px 主色下划线；button 形态选中浅蓝底主色字",
    },
  ],
  table: [
    {
      prop: "—",
      type: "组合式",
      desc: "Table/TableHeader/TableRow/TableHead/TableCell 组合（Semi 视觉：表头 bg-1 + text-2 常规字重 + 1px 底边、单元格 16px/12px 内边距）",
    },
  ],
  card: [
    {
      prop: "—",
      type: "组合式",
      desc: "Card/CardHeader/CardTitle/CardDescription/CardContent/Footer/Action（1px 边框 + 6px 圆角，无阴影）",
    },
  ],
  alert: [
    {
      prop: "variant",
      type: '"default" | "success" | "warning" | "destructive"',
      default: '"default"',
      desc: "Semi Banner 四语义：info/success/warning/danger 浅色底 + 语义色文字",
    },
  ],
  badge: [
    {
      prop: "variant",
      type: '"default" | "secondary" | "destructive" | "outline" | "light"',
      default: '"default"',
      desc: "Semi Tag 语义：primary 实心 / tertiary 实心 / danger 实心 / 描边 / fill-0 灰面",
    },
    { prop: "shape", type: '"square" | "circle"', default: '"square"', desc: "3px 圆角 / 胶囊" },
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
  form: [
    { prop: "—", type: "react-hook-form", desc: "Form = FormProvider；FormField = Controller 封装，label/description/message 与控件 aria 全联动" },
    { prop: "FormItem", type: "组合式", desc: "字段容器：4px 垂直间距（Semi label→控件→消息）" },
    { prop: "FormLabel", type: "组合式", desc: "14px/600 text-0（Semi .semi-form-field-label），支持 required 星号" },
    { prop: "FormControl", type: "render prop / children", desc: "把 id / aria-describedby / aria-invalid merge 到控件，驱动 Semi 输入框错误态" },
    { prop: "FormMessage", type: "组合式", desc: "校验错误文本（14px danger），有错误时替换 description" },
  ],
  calendar: [
    { prop: "mode", type: '"single" | "multiple" | "range"', desc: "选择模式（提供 mode 才渲染可交互按钮）" },
    { prop: "selected / defaultMonth / numberOfMonths", type: "Date / Date[] / number", desc: "选中值、初始月、多月并排" },
    { prop: "showOutsideDays", type: "boolean", default: "false", desc: "非当月日期默认隐藏（Semi 行为）" },
    { prop: "locale / weekStartsOn", type: "Locale / 0-6", desc: 'zhCN 时标题为"2026年10月"；Semi 中文默认周日开头传 weekStartsOn={0}' },
    { prop: "captionLayout", type: '"label" | "dropdown"', desc: "月份标题 / 年月下拉" },
  ],
};
