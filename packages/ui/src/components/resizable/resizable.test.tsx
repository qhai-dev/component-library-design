import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./index";

describe("Resizable", () => {
  it("renders", () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>One</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>,
    );
  });
});
