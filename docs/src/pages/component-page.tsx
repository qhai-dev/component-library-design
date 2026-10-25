import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { DocPage, DocSection, ExportsList, Preview, PropsTable } from "../components/docs-ui";
import { API_TABLES } from "../docs/api-tables";
import { EXPORTS } from "../docs/exports.generated";
import { getCategoryOf, getEntry } from "../docs/registry";

export default function ComponentPage() {
  const { slug = "" } = useParams();
  const entry = getEntry(slug);

  if (!entry) {
    return (
      <DocPage title="未找到组件" description={`没有名为 "${slug}" 的组件文档。`}>
        <Link
          to="/"
          className="text-primary inline-flex items-center gap-2 text-sm hover:underline"
        >
          <ArrowLeftIcon className="size-4" /> 返回文档首页
        </Link>
      </DocPage>
    );
  }

  const apiRows = API_TABLES[slug];
  const exports = EXPORTS[slug] ?? [];

  return (
    <DocPage title={entry.title} description={entry.description}>
      <DocSection title="预览">
        <Preview>{entry.demo}</Preview>
      </DocSection>

      <DocSection title="API 参考">
        {apiRows ? (
          <PropsTable rows={apiRows} />
        ) : exports.length ? (
          <>
            <p className="text-muted-foreground text-sm">
              导出以下子组件（完整交互 Props 在 Storybook Controls 中调试）：
            </p>
            <ExportsList items={exports} />
          </>
        ) : (
          <p className="text-muted-foreground text-sm">
            完整交互 Props 在 Storybook Controls 中调试。
          </p>
        )}
      </DocSection>

      <DocSection title="更多">
        <div className="text-muted-foreground flex flex-col gap-1 text-sm">
          <span>分类：{getCategoryOf(slug)}</span>
          <a
            href={`http://localhost:6006/?path=/story/components-${slug}--default`}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            在 Storybook 中交互调试 →
          </a>
        </div>
      </DocSection>
    </DocPage>
  );
}
