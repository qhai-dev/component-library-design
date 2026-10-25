import { Link } from "react-router-dom";
import { Button } from "shadcn-semi-design";
import { DocPage, DocSection, Preview } from "../components/docs-ui";

export default function Home() {
  return (
    <DocPage
      title="shadcn-semi-design"
      description="shadcn/ui 架构 × Semi Design 视觉 1:1 —— 基于 Base UI 的 React 组件库。API 遵循 shadcn 官方设计，样式取自 Semi Design 令牌体系。"
    >
      <DocSection title="快速开始">
        <div className="flex items-center gap-3">
          <Button render={<Link to="/components/button" />}>浏览组件</Button>
          <Button
            variant="secondary"
            render={<a href="http://localhost:6006" target="_blank" rel="noreferrer" />}
          >
            Storybook
          </Button>
        </div>
      </DocSection>

      <DocSection title="安装">
        <div className="bg-code text-code-foreground overflow-x-auto rounded-xl p-4 font-mono text-xs">
          pnpm add shadcn-semi-design
        </div>
      </DocSection>

      <DocSection title="引入样式">
        <div className="bg-code text-code-foreground overflow-x-auto rounded-xl p-4 font-mono text-xs leading-5">
          {'@import "tailwindcss";'}
          <br />
          {'@import "shadcn-semi-design/styles";'}
          <br />
          <br />
          {"@layer base {"}
          <br />
          {"  html { @apply bg-background text-foreground; }"}
          <br />
          {"}"}
        </div>
        <p className="text-muted-foreground text-sm">
          暗色模式：给 {"<html>"} 添加 <code className="font-mono">class="dark"</code>， 所有 Semi
          令牌（--semi-*）自动翻转。
        </p>
      </DocSection>

      <DocSection title="使用组件">
        <Preview>
          <Button>主要按钮</Button>
          <Button variant="secondary">次要</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">危险</Button>
          <Button variant="link">Link</Button>
        </Preview>
        <div className="bg-code text-code-foreground overflow-x-auto rounded-xl p-4 font-mono text-xs leading-5">
          {'import { Button } from "shadcn-semi-design"'}
          <br />
          <br />
          {'<Button variant="primary">主要按钮</Button>'}
        </div>
      </DocSection>

      <DocSection title="设计原则">
        <ul className="text-foreground/80 list-disc space-y-2 pl-5 text-sm">
          <li>
            <b>API = shadcn 官方</b>：组合模式、variant/size 词汇、children
            组合图标、asChild、className 覆盖——不引入 Semi 的配置式 API。
          </li>
          <li>
            <b>样式 = Semi 1:1</b>
            ：颜色、圆角（3/6/12px）、控件高度（24/32/40）、焦点规则、浮层阴影全部对齐 Semi Design
            令牌。
          </li>
          <li>
            <b>Tailwind CSS v4</b>：组件即源码，消费方自带 Tailwind 编译； 暗色模式由 .dark
            类驱动，令牌自动翻转。
          </li>
        </ul>
      </DocSection>
    </DocPage>
  );
}
