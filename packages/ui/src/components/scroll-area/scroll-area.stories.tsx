import { ScrollArea, ScrollBar } from "./index";

const meta = {
  title: "Components/ScrollArea",
};

export default meta;

export const Default = {
  render: () => (
    <ScrollArea className="h-32 w-48">
      <div>Long content</div>
      <ScrollBar />
    </ScrollArea>
  ),
};
