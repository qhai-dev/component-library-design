// Regenerates *.test.tsx and *.stories.tsx for all components.
// Run from repo root: node scripts/gen-tests.mjs
import { writeFileSync, readFileSync, readdirSync, rmSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const dir = join(root, "src/components")

const C = {
  "alert-dialog": [
    `AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel`,
    `<AlertDialog><AlertDialogTrigger>Open</AlertDialogTrigger><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Are you sure?</AlertDialogTitle><AlertDialogDescription>This cannot be undone.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction>Continue</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>`,
  ],
  alert: [
    `Alert, AlertTitle, AlertDescription`,
    `<Alert><AlertTitle>Heads up</AlertTitle><AlertDescription>Something happened.</AlertDescription></Alert>`,
  ],
  "aspect-ratio": [
    `AspectRatio`,
    `<AspectRatio ratio={16 / 9}><div>16:9</div></AspectRatio>`,
  ],
  attachment: [
    `Attachment, AttachmentContent, AttachmentTitle, AttachmentDescription`,
    `<Attachment><AttachmentContent><AttachmentTitle>file.png</AttachmentTitle><AttachmentDescription>Image attachment</AttachmentDescription></AttachmentContent></Attachment>`,
  ],
  avatar: [
    `Avatar, AvatarFallback`,
    `<Avatar><AvatarFallback>SD</AvatarFallback></Avatar>`,
  ],
  badge: [`Badge`, `<Badge>Badge</Badge>`],
  breadcrumb: [
    `Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator`,
    `<Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>`,
  ],
  bubble: [
    `BubbleGroup, Bubble, BubbleContent`,
    `<BubbleGroup><Bubble><BubbleContent>Hello</BubbleContent></Bubble></BubbleGroup>`,
  ],
  button: [`Button`, `<Button>Click me</Button>`],
  calendar: [`Calendar`, `<Calendar />`],
  card: [
    `Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter`,
    `<Card><CardHeader><CardTitle>Card title</CardTitle><CardDescription>Description</CardDescription></CardHeader><CardContent>Body</CardContent><CardFooter>Footer</CardFooter></Card>`,
  ],
  carousel: [
    `Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext`,
    `<Carousel><CarouselContent><CarouselItem>Slide 1</CarouselItem><CarouselItem>Slide 2</CarouselItem></CarouselContent><CarouselPrevious /><CarouselNext /></Carousel>`,
  ],
  chart: [
    `ChartContainer, ChartTooltip`,
    `<ChartContainer config={{ v: { label: "V", color: "var(--chart-1)" } }} className="h-40 w-64"><div>chart</div></ChartContainer>`,
  ],
  checkbox: [`Checkbox`, `<Checkbox aria-label="Check me" />`],
  "code-block": [
    `CodeBlock, CodeBlockCopyButton`,
    `<CodeBlock>console.log(1)</CodeBlock>`,
  ],
  collapsible: [
    `Collapsible, CollapsibleTrigger, CollapsibleContent`,
    `<Collapsible><CollapsibleTrigger>Toggle</CollapsibleTrigger><CollapsibleContent>Hidden</CollapsibleContent></Collapsible>`,
  ],
  combobox: [
    `Combobox, ComboboxTrigger, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty`,
    `<Combobox><ComboboxTrigger>Open</ComboboxTrigger><ComboboxContent><ComboboxList><ComboboxEmpty>Nothing here</ComboboxEmpty><ComboboxItem value="a">Item A</ComboboxItem></ComboboxList></ComboboxContent></Combobox>`,
  ],
  command: [
    `Command, CommandInput, CommandList, CommandItem, CommandGroup, CommandSeparator`,
    `<Command><CommandInput placeholder="Search" /><CommandList><CommandGroup heading="Suggestions"><CommandItem>Item 1</CommandItem></CommandGroup><CommandSeparator /></CommandList></Command>`,
  ],
  "context-menu": [
    `ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem`,
    `<ContextMenu><ContextMenuTrigger className="p-4">Right click</ContextMenuTrigger><ContextMenuContent><ContextMenuItem>Item</ContextMenuItem></ContextMenuContent></ContextMenu>`,
  ],
  dialog: [
    `Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose`,
    `<Dialog><DialogTrigger>Open</DialogTrigger><DialogContent><DialogHeader><DialogTitle>Title</DialogTitle><DialogDescription>Description</DialogDescription></DialogHeader></DialogContent></Dialog>`,
  ],
  direction: [
    `DirectionProvider`,
    `<DirectionProvider direction="ltr"><div>dir</div></DirectionProvider>`,
  ],
  drawer: [
    `Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription`,
    `<Drawer><DrawerTrigger>Open</DrawerTrigger><DrawerContent><DrawerHeader><DrawerTitle>Drawer</DrawerTitle><DrawerDescription>Description</DrawerDescription></DrawerHeader></DrawerContent></Drawer>`,
  ],
  "dropdown-menu": [
    `DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem`,
    `<DropdownMenu><DropdownMenuTrigger>Open</DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Item</DropdownMenuItem></DropdownMenuContent></DropdownMenu>`,
  ],
  empty: [
    `Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent`,
    `<Empty><EmptyHeader><EmptyTitle>No data</EmptyTitle><EmptyDescription>Nothing to show.</EmptyDescription></EmptyHeader></Empty>`,
  ],
  field: [
    `Field, FieldLabel, FieldError, FieldDescription, FieldContent`,
    `<Field><FieldLabel>Label</FieldLabel><FieldDescription>Helper</FieldDescription><FieldError>Error</FieldError></Field>`,
  ],
  "hover-card": [
    `HoverCard, HoverCardTrigger, HoverCardContent`,
    `<HoverCard><HoverCardTrigger>Hover</HoverCardTrigger><HoverCardContent>Content</HoverCardContent></HoverCard>`,
  ],
  input: [`Input`, `<Input placeholder="Type here" />`],
  "input-group": [
    `InputGroup, InputGroupAddon, InputGroupInput`,
    `<InputGroup><InputGroupAddon align="inline-start">@</InputGroupAddon><InputGroupInput placeholder="username" /></InputGroup>`,
  ],
  "input-otp": [
    `InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator`,
    `<InputOTP maxLength={6}><InputOTPGroup><InputOTPSlot index={0} /><InputOTPSlot index={1} /></InputOTPGroup></InputOTP>`,
  ],
  item: [
    `Item, ItemContent, ItemTitle, ItemDescription`,
    `<Item><ItemContent><ItemTitle>Title</ItemTitle><ItemDescription>Description</ItemDescription></ItemContent></Item>`,
  ],
  kbd: [`Kbd, KbdGroup`, `<KbdGroup><Kbd>Ctrl</Kbd><Kbd>K</Kbd></KbdGroup>`],
  label: [`Label`, `<Label htmlFor="x">Label</Label>`],
  marker: [
    `Marker, MarkerIcon, MarkerContent`,
    `<Marker><MarkerIcon /><MarkerContent>Divider</MarkerContent></Marker>`,
  ],
  menubar: [
    `Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem`,
    `<Menubar><MenubarMenu><MenubarTrigger>File</MenubarTrigger><MenubarContent><MenubarItem>New</MenubarItem></MenubarContent></MenubarMenu></Menubar>`,
  ],
  message: [
    `MessageGroup, Message, MessageContent`,
    `<MessageGroup><Message><MessageContent>Hello world</MessageContent></Message></MessageGroup>`,
  ],
  "message-scroller": [
    `MessageScrollerProvider, MessageScroller, MessageScrollerViewport, MessageScrollerContent, MessageScrollerItem`,
    `<MessageScrollerProvider><MessageScroller className="h-64"><MessageScrollerViewport><MessageScrollerContent><MessageScrollerItem>Message</MessageScrollerItem></MessageScrollerContent></MessageScrollerViewport></MessageScroller></MessageScrollerProvider>`,
  ],
  "native-select": [
    `NativeSelect, NativeSelectOption`,
    `<NativeSelect aria-label="pick"><NativeSelectOption value="a">Option A</NativeSelectOption></NativeSelect>`,
  ],
  "navigation-menu": [
    `NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger`,
    `<NavigationMenu><NavigationMenuList><NavigationMenuItem><NavigationMenuLink href="#">Link</NavigationMenuLink></NavigationMenuItem></NavigationMenuList></NavigationMenu>`,
  ],
  pagination: [
    `Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext`,
    `<Pagination><PaginationContent><PaginationItem><PaginationPrevious href="#" /></PaginationItem><PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem><PaginationItem><PaginationNext href="#" /></PaginationItem></PaginationContent></Pagination>`,
  ],
  popover: [
    `Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription`,
    `<Popover><PopoverTrigger>Open</PopoverTrigger><PopoverContent><PopoverHeader><PopoverTitle>Title</PopoverTitle><PopoverDescription>Description</PopoverDescription></PopoverHeader></PopoverContent></Popover>`,
  ],
  progress: [`Progress`, `<Progress value={60} aria-label="progress" />`],
  questionnaire: [
    `Questionnaire, QuestionnaireItem, QuestionnaireInput, QuestionnaireSubmit`,
    `<Questionnaire><QuestionnaireItem name="q"><QuestionnaireInput placeholder="Answer" /><QuestionnaireSubmit>Submit</QuestionnaireSubmit></QuestionnaireItem></Questionnaire>`,
  ],
  "radio-group": [
    `RadioGroup, RadioGroupItem`,
    `<RadioGroup defaultValue="a"><RadioGroupItem value="a" aria-label="A" /><RadioGroupItem value="b" aria-label="B" /></RadioGroup>`,
  ],
  resizable: [
    `ResizablePanelGroup, ResizablePanel, ResizableHandle`,
    `<ResizablePanelGroup direction="horizontal"><ResizablePanel>One</ResizablePanel><ResizableHandle /><ResizablePanel>Two</ResizablePanel></ResizablePanelGroup>`,
  ],
  "scroll-area": [
    `ScrollArea, ScrollBar`,
    `<ScrollArea className="h-32 w-48"><div>Long content</div><ScrollBar /></ScrollArea>`,
  ],
  select: [
    `Select, SelectTrigger, SelectValue, SelectContent, SelectItem`,
    `<Select items={[{ value: "a", label: "Option A" }]}><SelectTrigger aria-label="select"><SelectValue placeholder="Pick" /></SelectTrigger><SelectContent><SelectItem value="a">Option A</SelectItem></SelectContent></Select>`,
  ],
  separator: [`Separator`, `<Separator />`],
  sheet: [
    `Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription`,
    `<Sheet><SheetTrigger>Open</SheetTrigger><SheetContent side="right"><SheetHeader><SheetTitle>Sheet</SheetTitle><SheetDescription>Description</SheetDescription></SheetHeader></SheetContent></Sheet>`,
  ],
  sidebar: [
    `SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger, SidebarInset`,
    `<SidebarProvider><Sidebar><SidebarHeader /><SidebarContent><SidebarGroup><SidebarGroupLabel>Group</SidebarGroupLabel><SidebarGroupContent><SidebarMenu><SidebarMenuItem><SidebarMenuButton>Item</SidebarMenuButton></SidebarMenuItem></SidebarMenu></SidebarGroupContent></SidebarGroup></SidebarContent></Sidebar><SidebarTrigger /><SidebarInset>Content</SidebarInset></SidebarProvider>`,
  ],
  skeleton: [`Skeleton`, `<Skeleton className="h-8 w-48" />`],
  slider: [`Slider`, `<Slider defaultValue={[30]} aria-label="slider" />`],
  sonner: [`Toaster`, `<Toaster />`],
  spinner: [`Spinner`, `<Spinner />`],
  switch: [`Switch`, `<Switch aria-label="toggle" />`],
  table: [
    `Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption`,
    `<Table><TableHeader><TableRow><TableHead>Name</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell>Semi</TableCell></TableRow></TableBody><TableCaption>Caption</TableCaption></Table>`,
  ],
  tabs: [
    `Tabs, TabsList, TabsTrigger, TabsContent`,
    `<Tabs defaultValue="a"><TabsList><TabsTrigger value="a">A</TabsTrigger><TabsTrigger value="b">B</TabsTrigger></TabsList><TabsContent value="a">Content A</TabsContent><TabsContent value="b">Content B</TabsContent></Tabs>`,
  ],
  textarea: [`Textarea`, `<Textarea placeholder="Write" />`],
  toast: [`Toaster`, `<Toaster />`],
  "toggle-group": [
    `ToggleGroup, ToggleGroupItem`,
    `<ToggleGroup><ToggleGroupItem value="a">A</ToggleGroupItem><ToggleGroupItem value="b">B</ToggleGroupItem></ToggleGroup>`,
  ],
  toggle: [`Toggle`, `<Toggle aria-label="bold">B</Toggle>`],
  tooltip: [
    `Tooltip, TooltipTrigger, TooltipContent`,
    `<Tooltip><TooltipTrigger>Hover</TooltipTrigger><TooltipContent>Tip</TooltipContent></Tooltip>`,
  ],
  trace: [
    `Trace, TraceLine, TraceTitle, TraceDescription`,
    `<Trace><TraceLine><TraceTitle>Step one</TraceTitle><TraceDescription>Something happened</TraceDescription></TraceLine></Trace>`,
  ],
}

const INTERACTIVE = {
  button: `
  it("calls onClick", async () => {
    const user = userEvent.setup()
    let clicked = 0
    render(<Button onClick={() => clicked++}>Go</Button>)
    await user.click(screen.getByRole("button", { name: "Go" }))
    expect(clicked).toBe(1)
  })

  it("ignores clicks when disabled", async () => {
    const user = userEvent.setup()
    let clicked = 0
    render(<Button disabled onClick={() => clicked++}>Nope</Button>)
    await user.click(screen.getByRole("button", { name: "Nope" }))
    expect(clicked).toBe(0)
  })`,
  checkbox: `
  it("toggles on click", async () => {
    const user = userEvent.setup()
    render(<Checkbox aria-label="agree" />)
    const cb = screen.getByRole("checkbox", { name: "agree" })
    expect(cb).not.toBeChecked()
    await user.click(cb)
    expect(cb).toBeChecked()
  })`,
  switch: `
  it("toggles on click", async () => {
    const user = userEvent.setup()
    render(<Switch aria-label="notifications" />)
    const sw = screen.getByRole("switch", { name: "notifications" })
    await user.click(sw)
    expect(sw).toBeChecked()
  })`,
  "radio-group": `
  it("selects an option", async () => {
    const user = userEvent.setup()
    render(<RadioGroup name="rg"><RadioGroupItem value="a" aria-label="A" /><RadioGroupItem value="b" aria-label="B" /></RadioGroup>)
    await user.click(screen.getByRole("radio", { name: "B" }))
    expect(screen.getByRole("radio", { name: "B" })).toBeChecked()
  })`,
  tabs: `
  it("switches tabs", async () => {
    const user = userEvent.setup()
    render(<Tabs defaultValue="a"><TabsList><TabsTrigger value="a">Tab A</TabsTrigger><TabsTrigger value="b">Tab B</TabsTrigger></TabsList><TabsContent value="a">Content A</TabsContent><TabsContent value="b">Content B</TabsContent></Tabs>)
    await user.click(screen.getByRole("tab", { name: "Tab B" }))
    expect(screen.getByText("Content B")).toBeInTheDocument()
  })`,
  input: `
  it("accepts typing", async () => {
    const user = userEvent.setup()
    render(<Input placeholder="your name" />)
    const el = screen.getByPlaceholderText("your name")
    await user.type(el, "semi")
    expect(el).toHaveValue("semi")
  })`,
  textarea: `
  it("accepts typing", async () => {
    const user = userEvent.setup()
    render(<Textarea placeholder="bio" />)
    const el = screen.getByPlaceholderText("bio")
    await user.type(el, "hello")
    expect(el).toHaveValue("hello")
  })`,
  toggle: `
  it("presses", async () => {
    const user = userEvent.setup()
    render(<Toggle aria-label="bold">B</Toggle>)
    const t = screen.getByRole("button", { name: "bold" })
    await user.click(t)
    expect(t).toHaveAttribute("data-pressed")
  })`,
  dialog: `
  it("opens and closes", async () => {
    const user = userEvent.setup()
    render(<Dialog><DialogTrigger>Open</DialogTrigger><DialogContent><DialogHeader><DialogTitle>Semi dialog</DialogTitle></DialogHeader></DialogContent></Dialog>)
    await user.click(screen.getByRole("button", { name: "Open" }))
    expect(await screen.findByText("Semi dialog")).toBeInTheDocument()
  })`,
  "dropdown-menu": `
  it("opens the menu", async () => {
    const user = userEvent.setup()
    render(<DropdownMenu><DropdownMenuTrigger>Menu</DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Semi item</DropdownMenuItem></DropdownMenuContent></DropdownMenu>)
    await user.click(screen.getByRole("button", { name: "Menu" }))
    expect(await screen.findByText("Semi item")).toBeInTheDocument()
  })`,
  collapsible: `
  it("expands", async () => {
    const user = userEvent.setup()
    render(<Collapsible><CollapsibleTrigger>More</CollapsibleTrigger><CollapsibleContent>Details</CollapsibleContent></Collapsible>)
    await user.click(screen.getByRole("button", { name: "More" }))
    expect(await screen.findByText("Details")).toBeInTheDocument()
  })`,
}

const EXTRA_STORIES = {
  button: `
export const Variants = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Danger</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small 24</Button>
      <Button>Default 32</Button>
      <Button size="lg">Large 40</Button>
    </div>
  ),
}

export const Disabled = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button disabled>Primary</Button>
      <Button variant="outline" disabled>Outline</Button>
    </div>
  ),
}`,
  checkbox: `
export const States = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox defaultChecked aria-label="checked" />
      <Checkbox aria-label="unchecked" />
      <Checkbox disabled aria-label="disabled" />
      <Checkbox disabled defaultChecked aria-label="disabled checked" />
    </div>
  ),
}`,
  switch: `
export const States = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch defaultChecked aria-label="on" />
      <Switch aria-label="off" />
      <Switch size="sm" defaultChecked aria-label="small" />
    </div>
  ),
}`,
  badge: `
export const Variants = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>default</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="destructive">danger</Badge>
    </div>
  ),
}`,
  alert: `
export const Types = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Alert><AlertTitle>Info</AlertTitle><AlertDescription>Semi info banner.</AlertDescription></Alert>
      <Alert variant="destructive"><AlertTitle>Danger</AlertTitle><AlertDescription>Semi danger banner.</AlertDescription></Alert>
    </div>
  ),
}`,
  input: `
export const States = {
  render: () => (
    <div className="flex flex-col gap-3 w-64">
      <Input placeholder="Default" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Invalid" aria-invalid />
    </div>
  ),
}`,
}

const title = (s) =>
  s
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("")

// wipe old generated files (one directory per component)
for (const entry of readdirSync(dir)) {
  const sub = join(dir, entry)
  for (const f of readdirSync(sub)) {
    if (/\.(test|stories)\.tsx$/.test(f)) rmSync(join(sub, f))
  }
}

let tests = 0
let stories = 0
for (const [file, [imports, jsx]] of Object.entries(C)) {
  const hasExtra = Boolean(INTERACTIVE[file])
  const userLine = hasExtra
    ? `import userEvent from "@testing-library/user-event"\n`
    : ""
  writeFileSync(
    join(dir, file, `${file}.test.tsx`),
    `import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
${userLine}import { ${imports} } from "./index"

describe("${title(file)}", () => {
  it("renders", () => {
    render(${jsx})
  })
${hasExtra ? INTERACTIVE[file] : ""}
})
`,
    "utf8",
  )
  tests++

  writeFileSync(
    join(dir, file, `${file}.stories.tsx`),
    `import { ${imports} } from "./index"

const meta = {
  title: "Components/${title(file)}",
}

export default meta

export const Default = {
  render: () => (${jsx}),
}
${EXTRA_STORIES[file] || ""}`,
    "utf8",
  )
  stories++
}

// ---- custom files (multi-source imports / array props) ----
writeFileSync(
  join(dir, "accordion", "accordion.test.tsx"),
  `import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./index"

describe("Accordion", () => {
  it("renders", () => {
    render(
      <Accordion defaultValue={["a"]}>
        <AccordionItem value="a">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  })

  it("shows default open content", () => {
    render(
      <Accordion defaultValue={["a"]}>
        <AccordionItem value="a">
          <AccordionTrigger>Section</AccordionTrigger>
          <AccordionContent>Revealed</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    expect(screen.getByText("Revealed")).toBeInTheDocument()
  })
})
`,
  "utf8",
)

writeFileSync(
  join(dir, "accordion", "accordion.stories.tsx"),
  `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./index"

const meta = {
  title: "Components/Accordion",
}

export default meta

export const Default = {
  render: () => (
    <Accordion defaultValue={["a"]} className="w-96">
      <AccordionItem value="a">
        <AccordionTrigger>First section</AccordionTrigger>
        <AccordionContent>Content of the first section.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Second section</AccordionTrigger>
        <AccordionContent>Content of the second section.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
`,
  "utf8",
)

writeFileSync(
  join(dir, "button-group", "button-group.test.tsx"),
  `import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { ButtonGroup } from "./index"
import { Button } from "../button"

describe("ButtonGroup", () => {
  it("renders", () => {
    render(
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    )
  })
})
`,
  "utf8",
)

writeFileSync(
  join(dir, "button-group", "button-group.stories.tsx"),
  `import { ButtonGroup } from "./index"
import { Button } from "../button"

const meta = { title: "Components/ButtonGroup" }
export default meta

export const Default = {
  render: () => (
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
}
`,
  "utf8",
)

// ---- strip unused named imports (safe: word-boundary usage check) ----
let stripped = 0
for (const entry of readdirSync(dir)) {
  const sub = join(dir, entry)
  for (const f of readdirSync(sub)) {
    if (!/\.(test|stories)\.tsx$/.test(f)) continue
    const p = join(sub, f)
    const lines = readFileSync(p, "utf8").split("\n")
    let changed = false
    const out = lines.map((line) => {
      const m = line.match(/^import \{ (.+) \} from "(.+)"$/)
      if (!m) return line
      const names = m[1]
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
      const rest = lines.filter((l) => l !== line).join("\n")
      const kept = names.filter((n) => new RegExp("\\b" + n + "\\b").test(rest))
      if (kept.length === names.length) return line
      changed = true
      return kept.length ? `import { ${kept.join(", ")} } from "${m[2]}"` : ""
    })
    if (changed) {
      writeFileSync(
        p,
        out.filter((l, i, a) => !(l === "" && a[i - 1] === "")).join("\n"),
        "utf8",
      )
      stripped++
    }
  }
}

console.log(
  `generated ${tests} tests, ${stories} stories, 3 custom pairs, stripped imports in ${stripped} files`,
)
