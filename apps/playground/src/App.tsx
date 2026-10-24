import { useState } from "react"
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
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  Label,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  Spinner,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
} from "shadcn-semi-design"

function DarkToggle() {
  const [dark, setDark] = useState(false)
  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
  }
  return (
    <Button variant="outline" onClick={toggle}>
      切换暗色：{dark ? "on" : "off"}
    </Button>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-3 border-b border-border py-8">
      <h2 className="text-lg leading-7 font-semibold">{title}</h2>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </section>
  )
}

export default function App() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24">
      <header className="flex items-center justify-between py-8">
        <h1 className="text-2xl leading-8 font-semibold">
          shadcn-semi-design playground
        </h1>
        <DarkToggle />
      </header>

      <Section title="Button">
        <Button>主要按钮</Button>
        <Button variant="secondary">次要</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">危险</Button>
        <Button size="sm">Small 24</Button>
        <Button size="lg">Large 40</Button>
        <Button disabled>禁用</Button>
      </Section>

      <Section title="Input / Select / Switch">
        <Input placeholder="输入框" className="w-56" />
        <Textarea placeholder="多行输入" className="w-72" />
        <Select items={[{ value: "a", label: "选项 A" }]}>
          <SelectTrigger className="w-40" aria-label="select">
            <SelectValue placeholder="下拉选择" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">选项 A</SelectItem>
          </SelectContent>
        </Select>
        <Switch defaultChecked aria-label="switch" />
        <Checkbox defaultChecked aria-label="checkbox" />
        <RadioGroup defaultValue="a" className="flex gap-3">
          <RadioGroupItem value="a" aria-label="A" />
          <RadioGroupItem value="b" aria-label="B" />
        </RadioGroup>
      </Section>

      <Section title="Overlays">
        <Dialog>
          <DialogTrigger>打开对话框</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Semi 风格对话框</DialogTitle>
              <DialogDescription>
                12px 圆角 + shadow-elevated。
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <AlertDialog>
          <AlertDialogTrigger>确认框</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>确定删除吗？</AlertDialogTitle>
              <AlertDialogDescription>此操作不可撤销。</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>取消</AlertDialogCancel>
              <AlertDialogAction>继续</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger>下拉菜单</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>菜单项一</DropdownMenuItem>
            <DropdownMenuItem>菜单项二</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="a" className="w-full">
          <TabsList>
            <TabsTrigger value="a">标签一</TabsTrigger>
            <TabsTrigger value="b">标签二</TabsTrigger>
          </TabsList>
          <TabsContent value="a">标签一内容。</TabsContent>
          <TabsContent value="b">标签二内容。</TabsContent>
        </Tabs>
      </Section>

      <Section title="Display">
        <Badge>标签</Badge>
        <Badge variant="secondary">次要</Badge>
        <Progress value={60} className="w-64" aria-label="progress" />
        <Spinner />
        <Skeleton className="h-6 w-48" />
        <Separator className="w-full" />
        <Label>表单标签</Label>
      </Section>

      <Section title="Card / Alert / Accordion">
        <Card className="w-80">
          <CardHeader>
            <CardTitle>卡片标题</CardTitle>
            <CardDescription>6px 圆角 + shadow-elevated。</CardDescription>
          </CardHeader>
          <CardContent>卡片内容</CardContent>
        </Card>
        <Alert className="w-80">
          <AlertTitle>提示</AlertTitle>
          <AlertDescription>Semi info banner 样式。</AlertDescription>
        </Alert>
        <Accordion defaultValue={["a"]} className="w-80">
          <AccordionItem value="a">
            <AccordionTrigger className="justify-between">
              折叠面板
            </AccordionTrigger>
            <AccordionContent>折叠内容</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>
    </div>
  )
}
