import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "shadcn-semi-design";

/** 组件预览容器：居中展示 + 细边框画布 */
export function Preview({ children }: { children: ReactNode }) {
  return (
    <div className="border-border flex min-h-24 flex-wrap items-center justify-center gap-4 rounded-xl border p-8">
      {children}
    </div>
  );
}

/** Props 表格（Semi 风格表头） */
export function PropsTable({
  rows,
}: {
  rows: { prop: string; type: string; default?: string; desc: string }[];
}) {
  return (
    <div className="border-border overflow-x-auto rounded-xl border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50 border-b border-border text-left">
            <th className="px-4 py-2 font-semibold">属性</th>
            <th className="px-4 py-2 font-semibold">类型</th>
            <th className="px-4 py-2 font-semibold">默认值</th>
            <th className="px-4 py-2 font-semibold">说明</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.prop} className="border-b border-border last:border-0">
              <td className="text-code-foreground px-4 py-2 font-mono text-xs">{r.prop}</td>
              <td className="text-code-foreground px-4 py-2 font-mono text-xs">{r.type}</td>
              <td className="text-muted-foreground px-4 py-2 font-mono text-xs">
                {r.default ?? "—"}
              </td>
              <td className="text-foreground/80 px-4 py-2">{r.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** 文档页通用骨架 */
export function DocPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <article className="max-w-3xl">
      <h1 className="text-2xl leading-8 font-semibold">{title}</h1>
      <p className="text-muted-foreground mt-2 text-sm leading-5">{description}</p>
      <div className="mt-8 flex flex-col gap-8">{children}</div>
    </article>
  );
}

export function DocSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg leading-7 font-semibold">{title}</h2>
      {children}
    </section>
  );
}

/** 导出清单（非核心组件的轻量 API 展示） */
export function ExportsList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((name) => (
        <span
          key={name}
          className="text-code-foreground bg-code rounded-md border border-border px-2 py-0.5 font-mono text-xs"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export { Card, CardContent, CardDescription, CardHeader, CardTitle };
