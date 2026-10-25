import { Button } from "./index";

const meta = {
  title: "Components/Button",
};

export default meta;

export const Default = {
  render: () => <Button>Click me</Button>,
};

export const Variants = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Danger</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small 24</Button>
      <Button>Default 32</Button>
      <Button size="lg">Large 40</Button>
    </div>
  ),
};

export const Disabled = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button disabled>Primary</Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
    </div>
  ),
};
