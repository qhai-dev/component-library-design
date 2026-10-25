import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./index";

const meta = {
  title: "Components/Resizable",
};

export default meta;

export const Default = {
  render: () => (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  ),
};
