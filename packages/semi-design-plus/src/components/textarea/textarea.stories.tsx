import type { Meta, StoryObj } from "@storybook/react-vite";
import { within, expect, userEvent } from "storybook/test";
import { Textarea } from "./index";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Please enter" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Textarea size="sm" placeholder="Small 14px" />
      <Textarea placeholder="Default 14px" />
      <Textarea size="lg" placeholder="Large 16px" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Textarea placeholder="Default" />
      <Textarea
        validateStatus="error"
        placeholder="Error"
        defaultValue="Invalid value"
      />
      <Textarea validateStatus="warning" placeholder="Warning" />
      <Textarea placeholder="Disabled" disabled />
    </div>
  ),
};

export const InteractiveTyping: Story = {
  args: { placeholder: "Type and blur" },
  play: async () => {
    const el = within(document.body).getByPlaceholderText("Type and blur");
    await userEvent.type(el, "semi design");
    await expect(el).toHaveValue("semi design");
    await userEvent.tab();
    await expect(el).not.toHaveFocus();
  },
};
