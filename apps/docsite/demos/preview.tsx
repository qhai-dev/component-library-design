import type { ReactNode } from "react";
import { useEffect } from "react";
import { getEntry } from "./demo-registry";
import { API_TABLES } from "./api-tables";
import { EXPORTS } from "./exports.generated";

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

/**
 * 组件文档页正文：预览 + API 参考 + Storybook 链接。
 * MDX 页面按 slug 引用：<ComponentPreview slug="button" />
 */
export function ComponentPreview({ slug }: { slug: string }) {
  const entry = getEntry(slug);
  if (!entry) {
    return null;
  }

  const apiRows = API_TABLES[slug];
  const exports = EXPORTS[slug] ?? [];

  return (
    <div className="my-4 flex flex-col gap-8">
      <section>
        <h2 className="mb-4 text-xl font-semibold">预览</h2>
        <Preview>{entry.demo}</Preview>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">API 参考</h2>
        {apiRows ? (
          <PropsTable rows={apiRows} />
        ) : exports.length ? (
          <div className="flex flex-col gap-3">
            <p className="text-muted-foreground text-sm">
              导出以下子组件（完整交互 Props 在 Storybook Controls 中调试）：
            </p>
            <div className="flex flex-wrap gap-2">
              {exports.map((name) => (
                <code
                  key={name}
                  className="bg-muted text-code-foreground rounded-sm px-2 py-1 font-mono text-xs"
                >
                  {name}
                </code>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">
            完整交互 Props 在 Storybook Controls 中调试。
          </p>
        )}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">更多</h2>
        <div className="text-muted-foreground flex flex-col gap-1 text-sm">
          <span>分类：{entry.category}</span>
          <a
            href={`http://localhost:6006/?path=/story/components-${slug}--default`}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            在 Storybook 中交互调试 →
          </a>
        </div>
      </section>
    </div>
  );
}


/**
 * Scroll-spy for the single-page docs: every sidebar entry anchors into this
 * page, so the theme marks them all active — highlight only the section the
 * reader is currently in.
 */
export function SidebarSpy(): null {
  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        "aside a.rp-sidebar-item[href*='#']",
      ),
    );
    const entries: { id: string; link: HTMLAnchorElement; target: Element }[] = [];
    for (const link of links) {
      const id = decodeURIComponent(new URL(link.href).hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (target) entries.push({ id, link, target });
    }
    if (!entries.length) return;

    let currentId: string | null = null;
    const update = () => {
      // the section closest above the navbar line — sorted by viewport
      // position because sidebar order differs from page order
      const visible = entries
        .map((e) => ({ id: e.id, top: e.target.getBoundingClientRect().top }))
        .filter((e) => e.top <= 120)
        .sort((a, b) => a.top - b.top);
      const active = visible.length ? visible[visible.length - 1].id : (entries[0]?.id ?? null);
      if (active === currentId) return;
      currentId = active;
      for (const { id, link } of entries) {
        link.classList.toggle("spy-current", id === currentId);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}
