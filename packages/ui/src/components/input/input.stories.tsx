import { Input } from "./index";

const meta = {
  title: "Components/Input",
};

export default meta;

export const Default = {
  render: () => <Input placeholder="Type here" />,
};

export const States = {
  render: () => (
    <div className="flex w-64 flex-col gap-3">
      <Input placeholder="Default" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Invalid" aria-invalid />
    </div>
  ),
};
