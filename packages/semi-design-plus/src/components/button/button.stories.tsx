import type { Meta, StoryObj } from "@storybook/react-vite";
import { within, expect, fn, userEvent, waitFor } from "storybook/test";
import { Plus } from "lucide-react";
import { Button } from "./index";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Click me" },
};

export const Variants: Story = {
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

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small 24</Button>
      <Button>Default 32</Button>
      <Button size="lg">Large 40</Button>
      <Button size="icon" aria-label="Add">
        <Plus />
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button disabled>Primary</Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { loading: true, children: "Saving…" },
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button>
        <Plus aria-hidden /> New
      </Button>
      <Button variant="outline">
        <Plus aria-hidden /> Add
      </Button>
    </div>
  ),
};

export const InteractiveClick: Story = {
  args: { children: "Interactive", onClick: fn() },
  play: async ({ args }) => {
    const btn = within(document.body).getByRole("button", { name: "Interactive" });
    await userEvent.click(btn);
    await expect(args.onClick).toHaveBeenCalledOnce();
    await waitFor(() => expect(btn).toHaveFocus());
  },
};
