import { useMemo, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "shadcn-semi-design";
import { CATEGORIES } from "../docs/registry";

function DarkToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="切换暗色"
      onClick={() => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
      }}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}

export function DocsLayout() {
  const { pathname } = useLocation();
  // 路由变化回到顶部
  useMemo(() => window.scrollTo(0, 0), [pathname]);

  return (
    <div className="min-h-screen">
      <header className="bg-background/95 supports-backdrop-filter:bg-background/80 sticky top-0 z-50 border-b border-border backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-6">
          <NavLink to="/" className="text-sm font-semibold">
            shadcn-semi-design
          </NavLink>
          <NavLink to="/" className="text-muted-foreground hover:text-foreground text-sm">
            文档
          </NavLink>
          <a
            href="http://localhost:6006"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            Storybook
          </a>
          <div className="ml-auto">
            <DarkToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] gap-10 px-6">
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 overflow-y-auto py-8 md:block">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="mb-6">
              <div className="mb-2 text-sm leading-6 font-semibold">{cat.name}</div>
              <ul className="space-y-0.5">
                {cat.items.map((slug) => (
                  <li key={slug}>
                    <NavLink
                      to={`/components/${slug}`}
                      className={({ isActive }) =>
                        `text-muted-foreground hover:text-foreground block rounded-md px-2 py-1 text-sm leading-5 ${
                          isActive ? "bg-muted text-foreground font-medium" : ""
                        }`
                      }
                    >
                      {cat.titles[slug]}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        <main className="min-w-0 flex-1 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
