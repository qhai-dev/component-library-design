import { Route, Routes } from "react-router-dom";
import { DocsLayout } from "./layouts/docs-layout";
import Home from "./pages/home";
import ComponentPage from "./pages/component-page";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <Routes>
      <Route element={<DocsLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/components/:slug" element={<ComponentPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
