import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { DocPage } from "../components/docs-ui";

export default function NotFound() {
  return (
    <DocPage title="页面不存在" description="你访问的页面不存在或已被移动。">
      <Link to="/" className="text-primary inline-flex items-center gap-2 text-sm hover:underline">
        <ArrowLeftIcon className="size-4" /> 返回文档首页
      </Link>
    </DocPage>
  );
}
