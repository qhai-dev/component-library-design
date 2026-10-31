import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AspectRatio,
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentTitle,
  Avatar,
  AvatarFallback,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Bubble,
  BubbleContent,
  BubbleGroup,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  ChartContainer,
  ChartTooltip,
  Checkbox,
  CodeBlock,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
  Kbd,
  KbdGroup,
  Label,
  Marker,
  MarkerContent,
  MarkerIcon,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  Message,
  MessageContent,
  MessageGroup,
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  NativeSelect,
  NativeSelectOption,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Questionnaire,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireSubmit,
  RadioGroup,
  RadioGroupItem,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  ScrollBar,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Trace,
  TraceDescription,
  TraceLine,
  TraceTitle,
} from "shadcn-semi-design";

export interface DocEntry {
  slug: string;
  title: string;
  description: string;
  demo: ReactNode;
  category: string;
}

const d = (
  slug: string,
  title: string,
  description: string,
  demo: ReactNode,
  category = "",
): DocEntry => ({
  slug,
  title,
  description,
  demo,
  category,
});

/* ---------------- 表单交互示例（需要 hooks，独立组件） ---------------- */

function DemoDocsForm() {
  const form = useForm({ defaultValues: { nickname: "", email: "" } });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="nickname"
          rules={{ required: "请输入昵称", minLength: { value: 2, message: "至少 2 个字符" } }}
          render={({ field }) => (
            <FormItem>
              <FormLabel required>昵称</FormLabel>
              <FormControl render={<Input placeholder="Semi" {...field} />} />
              <FormDescription>对外展示的名称。</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          rules={{ required: "请输入邮箱" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel required>邮箱</FormLabel>
              <FormControl render={<Input placeholder="you@example.com" {...field} />} />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">提交</Button>
      </form>
    </Form>
  );
}

/* ---------------- 各组件演示 ---------------- */

export const ENTRIES: DocEntry[] = [
  // ===== 基础 =====
  d(
    "button",
    "按钮",
    "用于触发一个操作，支持六种语义形态与多种尺寸。",
    <div className="flex flex-wrap items-center gap-3">
      <Button>主要按钮</Button>
      <Button variant="secondary">次要</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">危险</Button>
      <Button variant="link">Link</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button disabled>禁用</Button>
    </div>,
    "基础组件",
  ),
  d(
    "badge",
    "标签 Tag",
    "用于标记状态或元数据的小型标签，对应 Semi 的 Tag。",
    <div className="flex flex-wrap items-center gap-2">
      <Badge>primary</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="light">light</Badge>
      <Badge shape="circle">胶囊</Badge>
    </div>,
    "基础组件",
  ),
  d(
    "avatar",
    "头像",
    "用户/实体的头像，支持回退字符与分组。",
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarFallback>SD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
    </div>,
    "基础组件",
  ),
  d(
    "card",
    "卡片",
    "Semi Card 形态：1px 边框 + 6px 圆角（无阴影）。",
    <Card className="w-72">
      <CardHeader>
        <CardTitle>卡片标题</CardTitle>
        <CardDescription>1px 边框 + 6px 圆角。</CardDescription>
      </CardHeader>
      <CardContent>卡片内容</CardContent>
    </Card>,
    "基础组件",
  ),
  d(
    "separator",
    "分割线 Divider",
    "水平/垂直分割线，对应 Semi Divider。",
    <div className="w-64">
      <div>上方内容</div>
      <Separator className="my-3" />
      <div>下方内容</div>
    </div>,
    "基础组件",
  ),
  d(
    "skeleton",
    "骨架屏",
    "内容加载前的占位（Semi：bg fill-0 + 3px 圆角）。",
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-56" />
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-4 w-48" />
    </div>,
    "基础组件",
  ),
  d(
    "spinner",
    "加载指示 Spin",
    "对应 Semi Spin 的旋转指示器（14/20/32 三档）。",
    <div className="flex items-center gap-6">
      <Spinner className="size-3.5" />
      <Spinner className="size-5" />
      <Spinner className="size-8" />
    </div>,
    "基础组件",
  ),
  d(
    "kbd",
    "快捷键 Kbd",
    "键盘按键展示，对应 Semi Typography 的代码样式。",
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>,
    "基础组件",
  ),
  d(
    "code-block",
    "代码块",
    "带复制按钮的代码展示（Semi CodeHighlight 对应）。",
    <CodeBlock className="w-96">{"console.log('semi')"}</CodeBlock>,
    "基础组件",
  ),
  d(
    "marker",
    "标记 Marker",
    "带图标的分割标记。",
    <Marker>
      <MarkerIcon />
      <MarkerContent>分割标记</MarkerContent>
    </Marker>,
    "基础组件",
  ),
  d(
    "aspect-ratio",
    "宽高比",
    "固定比例容器。",
    <AspectRatio ratio={16 / 9} className="w-56 rounded-xl bg-muted">
      <div className="flex h-full items-center justify-center">16 : 9</div>
    </AspectRatio>,
    "基础组件",
  ),
  d(
    "item",
    "列表项",
    "Semi List.Item 对应：标题 + 描述的内容项。",
    <Item className="w-80">
      <ItemContent>
        <ItemTitle>列表项标题</ItemTitle>
        <ItemDescription>列表项描述</ItemDescription>
      </ItemContent>
    </Item>,
    "基础组件",
  ),
  d(
    "label",
    "表单标签",
    "Semi Form.Label 对应：14px / 600 字重。",
    <Label htmlFor="doc-label">字段名称</Label>,
    "基础组件",
  ),

  // ===== 输入 =====
  d(
    "input",
    "输入框",
    "Semi Input 形态：fill-0 底、hover fill-1、focus 主色描边；支持尺寸/校验状态/前后缀/清除/密码切换。",
    <div className="flex w-96 flex-col gap-3">
      <Input size="sm" placeholder="Small 24" aria-label="Small" />
      <Input placeholder="Default 32（默认）" aria-label="Default" />
      <Input size="lg" placeholder="Large 40" aria-label="Large" />
      <Input validateStatus="error" placeholder="校验失败" aria-label="Error" defaultValue="非法输入" />
      <Input validateStatus="warning" placeholder="警告提示" aria-label="Warning" />
      <Input prefix="¥" suffix="RMB" defaultValue="1000" aria-label="Amount" />
      <Input clearable defaultValue="可清除" aria-label="Clearable" />
      <Input type="password" passwordToggle defaultValue="semi1234" aria-label="Password" />
      <Input placeholder="禁用态" disabled aria-label="Disabled" />
    </div>,
    "输入组件",
  ),
  d(
    "textarea",
    "多行输入",
    "Semi TextArea 形态：fill-0 底 + 5px 12px 内边距。",
    <Textarea placeholder="请输入多行内容" className="w-72" />,
    "输入组件",
  ),
  d(
    "native-select",
    "原生下拉",
    "原生 select 的样式化封装。",
    <NativeSelect aria-label="选择" className="w-48">
      <NativeSelectOption value="a">选项 A</NativeSelectOption>
      <NativeSelectOption value="b">选项 B</NativeSelectOption>
    </NativeSelect>,
    "输入组件",
  ),
  d(
    "select",
    "下拉选择 Select",
    "Semi Select：fill-0 触发器 + bg-3 浮层 + shadow-elevated。",
    <Select items={[{ value: "a", label: "选项 A" }, { value: "b", label: "选项 B" }, { value: "c", label: "选项 C" }]}>
      <SelectTrigger className="w-56" aria-label="选择">
        <SelectValue placeholder="请选择" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">选项 A</SelectItem>
        <SelectItem value="b">选项 B</SelectItem>
        <SelectItem value="c">选项 C</SelectItem>
      </SelectContent>
    </Select>,
    "输入组件",
  ),
  d(
    "combobox",
    "组合选择 AutoComplete",
    "对应 Semi AutoComplete：输入过滤 + 浮层列表（items 配置项驱动）。",
    <div className="w-64">
    <Combobox>
      <ComboboxInput placeholder="输入以过滤…" aria-label="组合选择" showClear />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>没有匹配项</ComboboxEmpty>
          <ComboboxCollection>
            {(item: { value: string; label: string }) => (
              <ComboboxItem key={item.value} value={item.value}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxCollection>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
    </div>,
    "输入组件",
  ),
  d(
    "checkbox",
    "复选框",
    "Semi Checkbox：16px、3px 圆角、选中蓝底白勾。",
    <div className="flex items-center gap-6">
      <Checkbox defaultChecked aria-label="已选" />
      <Checkbox aria-label="未选" />
      <Checkbox disabled aria-label="禁用" />
    </div>,
    "输入组件",
  ),
  d(
    "radio-group",
    "单选组 Radio",
    "Semi Radio：16px 圆形单选。",
    <RadioGroup defaultValue="a" className="flex gap-4">
      <RadioGroupItem value="a" aria-label="A" />
      <RadioGroupItem value="b" aria-label="B" />
    </RadioGroup>,
    "输入组件",
  ),
  d(
    "switch",
    "开关 Switch",
    "Semi Switch：40×24、knob 白色带阴影、开启态主色蓝、200ms 位移。",
    <div className="flex items-center gap-6">
      <Switch defaultChecked aria-label="开" />
      <Switch aria-label="关" />
      <Switch size="sm" defaultChecked aria-label="小号开" />
      <Switch size="sm" aria-label="小号关" />
      <Switch disabled aria-label="禁用" />
      <Switch defaultChecked disabled aria-label="禁用开" />
    </div>,
    "输入组件",
  ),
  d(
    "slider",
    "滑动条 Slider",
    "Semi Slider：4px 轨道 + 24px 白色滑块。",
    <Slider defaultValue={[30]} className="w-56" aria-label="滑块" />,
    "输入组件",
  ),
  d(
    "calendar",
    "日历面板",
    "月历面板（react-day-picker 封装）：« ‹ 标题 › » 四向导航、32px 方形日期格（3px 圆角）、今天主色蓝字、非当月日期隐藏。",
    <Calendar
      mode="single"
      defaultMonth={new Date(2026, 9, 1)}
      selected={new Date(2026, 9, 15)}
    />,
    "输入组件",
  ),
  d(
    "input-otp",
    "验证码输入 PinCode",
    "对应 Semi PinCode：32px 槽位 + focus 蓝边。",
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>,
    "输入组件",
  ),
  d(
    "input-group",
    "输入组",
    "带前缀/后缀附加内容的输入框组合。",
    <InputGroup className="w-64">
      <InputGroupAddon align="inline-start">https://</InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>,
    "输入组件",
  ),
  d(
    "field",
    "字段容器",
    "Semi Form Field 展示层：标签 + 描述 + 错误。",
    <Field className="w-72">
      <FieldLabel>字段名称</FieldLabel>
      <FieldDescription>字段的帮助说明文本。</FieldDescription>
      <FieldError>校验失败时的错误信息。</FieldError>
    </Field>,
    "输入组件",
  ),
  d(
    "form",
    "表单 Form",
    "react-hook-form 驱动的 shadcn Form API + Semi Form 视觉（label 600、错误 danger 色、4px 间距）。",
    <div className="w-96">
      <Toaster />
      <DemoDocsForm />
    </div>,
    "输入组件",
  ),
  d(
    "toggle",
    "切换按钮 Toggle",
    "Semi borderless 按钮的按压形态：未选 hover fill-0、选中 fill-1。",
    <div className="flex items-center gap-4">
      <Toggle aria-label="加粗">加粗</Toggle>
      <Toggle variant="outline" aria-label="斜体">
        斜体
      </Toggle>
      <Toggle defaultPressed aria-label="下划线已选">
        下划线
      </Toggle>
    </div>,
    "输入组件",
  ),
  d(
    "toggle-group",
    "切换按钮组 ToggleGroup",
    "多枚切换按钮的组合，支持单选/多选。",
    <ToggleGroup variant="outline" spacing={8} defaultValue={["bold"]} aria-label="样式">
      <ToggleGroupItem value="bold">加粗</ToggleGroupItem>
      <ToggleGroupItem value="italic">斜体</ToggleGroupItem>
      <ToggleGroupItem value="underline">下划线</ToggleGroupItem>
    </ToggleGroup>,
    "输入组件",
  ),

  // ===== 浮层 =====
  d(
    "dialog",
    "对话框 Modal",
    "Semi Modal：bg-2 容器、12px 圆角、shadow-elevated、遮罩 rgba(22,22,26,.6)。",
    <Dialog>
      <DialogTrigger>打开对话框</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Semi 风格对话框</DialogTitle>
          <DialogDescription>默认宽 448px、12px 圆角、bg-2 容器。</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">取消</Button>} />
          <DialogClose render={<Button>确定</Button>} />
        </DialogFooter>
      </DialogContent>
    </Dialog>,
    "浮层",
  ),
  d(
    "alert-dialog",
    "确认框",
    "不可关闭的确认对话框（Semi Modal 确认场景）。",
    <AlertDialog>
      <AlertDialogTrigger>删除确认</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>确定删除吗？</AlertDialogTitle>
          <AlertDialogDescription>此操作不可撤销。</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>取消</AlertDialogCancel>
          <AlertDialogAction>继续删除</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>,
    "浮层",
  ),
  d(
    "sheet",
    "侧滑面板 SideSheet",
    "Semi SideSheet：直角贴边、bg-2、shadow-elevated。",
    <Sheet>
      <SheetTrigger>打开侧滑面板</SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>SideSheet</SheetTitle>
          <SheetDescription>右侧滑出面板。</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>,
    "浮层",
  ),
  d(
    "drawer",
    "抽屉 SideSheet",
    "底部/侧边抽屉（SideSheet 形态，无圆角）。",
    <Drawer>
      <DrawerTrigger>打开抽屉</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer</DrawerTitle>
          <DrawerDescription>底部抽屉内容。</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>,
    "浮层",
  ),
  d(
    "popover",
    "气泡卡片",
    "Semi Popover：bg-3、1px 边框、6px 圆角、shadow-elevated。",
    <Popover>
      <PopoverTrigger>气泡卡片</PopoverTrigger>
      <PopoverContent className="w-56">Popover 内容</PopoverContent>
    </Popover>,
    "浮层",
  ),
  d(
    "tooltip",
    "文字提示",
    "Semi Tooltip：grey-7 底、bg-0 文字、6px 圆角。",
    <Tooltip>
      <TooltipTrigger>悬停查看</TooltipTrigger>
      <TooltipContent>这是文字提示内容</TooltipContent>
    </Tooltip>,
    "浮层",
  ),
  d(
    "hover-card",
    "悬浮卡片",
    "hover 触发的浮层卡片。",
    <HoverCard>
      <HoverCardTrigger>悬浮查看</HoverCardTrigger>
      <HoverCardContent className="w-56">HoverCard 内容</HoverCardContent>
    </HoverCard>,
    "浮层",
  ),
  d(
    "dropdown-menu",
    "下拉菜单 Dropdown",
    "Semi Dropdown：bg-3 面板、菜单项 px16/py8。",
    <DropdownMenu>
      <DropdownMenuTrigger>下拉菜单</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>菜单项一</DropdownMenuItem>
        <DropdownMenuItem>菜单项二</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>,
    "浮层",
  ),
  d(
    "context-menu",
    "右键菜单",
    "右键触发的上下文菜单。",
    <ContextMenu>
      <ContextMenuTrigger className="rounded-md border border-dashed px-4 py-3">
        右键点击此处
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>菜单项</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>,
    "浮层",
  ),
  d(
    "menubar",
    "菜单栏",
    "横向菜单栏（Semi 无对应，组合模式实现）。",
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>文件</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>新建</MenubarItem>
          <MenubarItem>打开</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>编辑</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>复制</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>,
    "浮层",
  ),

  // ===== 反馈 =====
  d(
    "alert",
    "警示条 Banner",
    "Semi Banner：info/success/warning/danger 浅色底 + 语义色文字。",
    <div className="flex w-96 flex-col gap-3">
      <Alert>
        <AlertTitle>信息提示</AlertTitle>
        <AlertDescription>Semi info banner 样式。</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>错误提示</AlertTitle>
        <AlertDescription>Semi danger banner 样式。</AlertDescription>
      </Alert>
    </div>,
    "反馈",
  ),
  d(
    "toast",
    "全局提示 Toast",
    "Semi Toast：bg-3、6px 圆角、shadow-elevated（组合模式触发）。",
    <div className="flex flex-col items-start gap-3">
      <Toaster />
      <p className="text-muted-foreground text-sm">
        Toast 通过组合模式使用，完整交互见 Storybook。
      </p>
    </div>,
    "反馈",
  ),
  d(
    "sonner",
    "Sonner Toast",
    "sonner 承载的函数式提示（对应 Semi Toast.success 等静态方法）。",
    <div className="flex items-start gap-3">
      <Toaster />
      <p className="text-muted-foreground text-sm">函数式调用见页面右上角示例与 Storybook。</p>
    </div>,
    "反馈",
  ),
  d(
    "progress",
    "进度条 Progress",
    "Semi Progress：4px 轨道 fill-0 + success 绿指示。",
    <Progress value={60} className="w-72" aria-label="进度" />,
    "反馈",
  ),
  d(
    "empty",
    "空状态 Empty",
    "Semi Empty：标题 600 字重 + 描述 text-1。",
    <Empty>
      <EmptyHeader>
        <EmptyTitle>暂无数据</EmptyTitle>
        <EmptyDescription>这里什么都没有。</EmptyDescription>
      </EmptyHeader>
    </Empty>,
    "反馈",
  ),

  // ===== 导航 =====
  d(
    "tabs",
    "标签页 Tabs",
    "Semi Tabs：line 形态（2px 蓝色下划线）、button 形态（浅蓝底主色字）、card 形态。",
    <Tabs defaultValue="a" className="w-full">
      <TabsList>
        <TabsTrigger value="a">标签一</TabsTrigger>
        <TabsTrigger value="b">标签二</TabsTrigger>
      </TabsList>
      <TabsContent value="a">标签一内容。</TabsContent>
      <TabsContent value="b">标签二内容。</TabsContent>
    </Tabs>,
    "导航",
  ),
  d(
    "breadcrumb",
    "面包屑",
    "Semi Breadcrumb：text-2、当前页 600 字重。",
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">首页</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>当前页</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>,
    "导航",
  ),
  d(
    "pagination",
    "分页 Pagination",
    "Semi Pagination 视觉：32px 页码项、选中浅蓝底。",
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>,
    "导航",
  ),
  d(
    "navigation-menu",
    "导航菜单 Navigation",
    "Semi Navigation 横向形态。",
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">导航链接</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>,
    "导航",
  ),
  d(
    "sidebar",
    "侧边导航 Nav",
    "Semi Navigation 垂直形态：选中浅蓝底 + 蓝色图标。",
    <div className="h-56 w-full max-w-md overflow-hidden rounded-xl border border-border [transform:translateZ(0)]">
      <SidebarProvider defaultOpen>
        <Sidebar>
          <SidebarHeader />
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>导航分组</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>导航项一</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>导航项二</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarTrigger />
        <SidebarInset>内容区域</SidebarInset>
      </SidebarProvider>
    </div>,
    "导航",
  ),

  // ===== 数据展示 =====
  d(
    "table",
    "表格 Table",
    "Semi Table 视觉：表头 bg-1 + text-2 常规字重 + 1px 底边、单元格 16px/12px 内边距。",
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead>名称</TableHead>
          <TableHead>版本</TableHead>
          <TableHead>协议</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Semi Design</TableCell>
          <TableCell>2.104.0</TableCell>
          <TableCell>MIT</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>shadcn-semi-design</TableCell>
          <TableCell>0.1.0</TableCell>
          <TableCell>MIT</TableCell>
        </TableRow>
      </TableBody>
      <TableCaption>表格标题</TableCaption>
    </Table>,
    "数据展示",
  ),
  d(
    "accordion",
    "折叠面板 Collapse",
    "Semi Collapse：header 常规字重、hover fill-0、右侧箭头旋转。",
    <Accordion defaultValue={["a"]} className="w-96">
      <AccordionItem value="a">
        <AccordionTrigger>第一个面板</AccordionTrigger>
        <AccordionContent>面板内容，Semi collapse 语义。</AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>第二个面板</AccordionTrigger>
        <AccordionContent>面板内容。</AccordionContent>
      </AccordionItem>
    </Accordion>,
    "数据展示",
  ),
  d(
    "collapsible",
    "折叠区域 Collapsible",
    "Semi Collapsible 对应：单布尔受控展开。",
    <Collapsible className="w-96">
      <CollapsibleTrigger>展开更多</CollapsibleTrigger>
      <CollapsibleContent>折叠的详情内容。</CollapsibleContent>
    </Collapsible>,
    "数据展示",
  ),
  d(
    "carousel",
    "轮播 Carousel",
    "轻量轮播（embla 驱动）。",
    <Carousel className="w-72">
      <CarouselContent>
        <CarouselItem className="rounded-xl bg-muted p-8">轮播 1</CarouselItem>
        <CarouselItem className="rounded-xl bg-muted p-8">轮播 2</CarouselItem>
        <CarouselItem className="rounded-xl bg-muted p-8">轮播 3</CarouselItem>
      </CarouselContent>
    </Carousel>,
    "数据展示",
  ),
  d(
    "chart",
    "图表 Chart",
    "基于 Recharts + Semi vchart 数据色板（--semi-color-data-*）。",
    <ChartContainer
      config={{ v: { label: "访问量", color: "var(--chart-1)" } }}
      className="h-40 w-80 rounded-xl border border-border p-4"
    >
      <div>图表区域（VChart/Recharts 数据渲染）</div>
      <ChartTooltip />
    </ChartContainer>,
    "数据展示",
  ),
  d(
    "resizable",
    "伸缩分栏 Resizable",
    "拖拽分栏（Semi Resizable 对应，react-resizable-panels 驱动）。",
    <div className="h-32 w-full rounded-xl border border-border">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="flex items-center justify-center">左侧</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="flex items-center justify-center">右侧</ResizablePanel>
      </ResizablePanelGroup>
    </div>,
    "数据展示",
  ),
  d(
    "scroll-area",
    "滚动区域",
    "自定义滚动条（Semi light-scrollbar 视觉）。",
    <ScrollArea className="h-32 w-64 rounded-xl border border-border">
      <div className="p-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="py-1">
            滚动内容 {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar />
    </ScrollArea>,
    "数据展示",
  ),
  d(
    "button-group",
    "按钮组 ButtonGroup",
    "Semi ButtonGroup：1px 分隔线 + 首尾 3px 圆角。",
    <ButtonGroup>
      <Button>一天</Button>
      <Button>三天</Button>
      <Button>七天</Button>
    </ButtonGroup>,
    "数据展示",
  ),
  d(
    "direction",
    "方向 Direction",
    "LTR/RTL 方向上下文（Base UI DirectionProvider）。",
    <div className="flex flex-col items-start gap-3">
      <p className="text-muted-foreground text-sm">
        DirectionProvider 为子树提供 dir 上下文，配合 rtl: 变体使用。
      </p>
    </div>,
    "数据展示",
  ),

  // ===== AI =====
  d(
    "bubble",
    "对话气泡 Bubble",
    "AI 对话气泡（Semi Chat bubble 视觉：12px 圆角）。",
    <BubbleGroup>
      <Bubble>
        <BubbleContent>Semi 风格对话气泡。</BubbleContent>
      </Bubble>
    </BubbleGroup>,
    "AI 组件",
  ),
  d(
    "attachment",
    "附件 Attachment",
    "文件附件卡片（Semi AIChatInput 附件区视觉）。",
    <Attachment className="w-72">
      <AttachmentContent>
        <AttachmentTitle>design-spec.pdf</AttachmentTitle>
        <AttachmentDescription>2.4 MB · PDF</AttachmentDescription>
      </AttachmentContent>
    </Attachment>,
    "AI 组件",
  ),
  d(
    "message",
    "消息 Message",
    "AI 消息容器。",
    <MessageGroup>
      <Message>
        <MessageContent>这是一条 AI 消息内容。</MessageContent>
      </Message>
    </MessageGroup>,
    "AI 组件",
  ),
  d(
    "message-scroller",
    "消息滚动容器",
    "聊天流自动吸底滚动（Semi Chat scrollToBottom 对应）。",
    <div className="w-full max-w-md">
      <MessageScrollerProvider>
        <MessageScroller className="h-40 rounded-xl border border-border">
          <MessageScrollerViewport>
            <MessageScrollerContent>
              {Array.from({ length: 8 }).map((_, i) => (
                <MessageScrollerItem key={i} className="py-2">
                  滚动消息 {i + 1}
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
        </MessageScroller>
      </MessageScrollerProvider>
    </div>,
    "AI 组件",
  ),
  d(
    "questionnaire",
    "问卷 Questionnaire",
    "AI 问卷收集组件。",
    <Questionnaire className="w-80">
      <QuestionnaireItem name="doc-q">
        <QuestionnaireInput placeholder="请输入你的答案" />
        <QuestionnaireSubmit>提交</QuestionnaireSubmit>
      </QuestionnaireItem>
    </Questionnaire>,
    "AI 组件",
  ),
  d(
    "trace",
    "执行链路 Trace",
    "AI 执行过程链路展示。",
    <Trace className="w-80">
      <TraceLine>
        <TraceTitle>步骤一：解析需求</TraceTitle>
        <TraceDescription>大模型解析输入并拆解任务。</TraceDescription>
      </TraceLine>
    </Trace>,
    "AI 组件",
  ),
];

/* ---------------- 分类（侧边导航顺序） ---------------- */

const TITLE_MAP: Record<string, string> = Object.fromEntries(ENTRIES.map((e) => [e.slug, e.title]));

export const CATEGORIES: { name: string; items: string[]; titles: Record<string, string> }[] = [
  {
    name: "基础组件",
    items: [
      "button",
      "badge",
      "avatar",
      "card",
      "separator",
      "skeleton",
      "spinner",
      "kbd",
      "code-block",
      "aspect-ratio",
      "item",
      "toggle",
      "toggle-group",
    ],
    titles: TITLE_MAP,
  },
  {
    name: "输入组件",
    items: [
      "input",
      "textarea",
      "native-select",
      "select",
      "combobox",
      "checkbox",
      "radio-group",
      "switch",
      "slider",
      "calendar",
      "input-otp",
      "input-group",
      "field",
      "form",
      "label",
    ].filter((s, i, a) => a.indexOf(s) === i),
    titles: TITLE_MAP,
  },
  {
    name: "浮层",
    items: [
      "dialog",
      "alert-dialog",
      "drawer",
      "sheet",
      "popover",
      "tooltip",
      "hover-card",
      "dropdown-menu",
      "context-menu",
      "menubar",
    ],
    titles: TITLE_MAP,
  },
  {
    name: "反馈",
    items: ["alert", "toast", "sonner", "progress", "empty"],
    titles: TITLE_MAP,
  },
  {
    name: "导航",
    items: ["tabs", "breadcrumb", "pagination", "navigation-menu", "sidebar"],
    titles: TITLE_MAP,
  },
  {
    name: "数据展示",
    items: ["table", "accordion", "collapsible", "carousel", "chart", "resizable", "scroll-area", "marker"],
    titles: TITLE_MAP,
  },
  {
    name: "布局",
    items: ["button-group", "direction"],
    titles: TITLE_MAP,
  },
  {
    name: "AI 组件",
    items: ["bubble", "attachment", "message", "message-scroller", "questionnaire", "trace"],
    titles: TITLE_MAP,
  },
];

export function getEntry(slug: string): DocEntry | undefined {
  return ENTRIES.find((e) => e.slug === slug);
}


export function getCategoryOf(slug: string): string {
  return CATEGORIES.find((c) => c.items.includes(slug))?.name ?? "";
}
