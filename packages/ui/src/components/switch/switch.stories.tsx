import { Switch } from "./index";

const meta = {
  title: "Components/Switch",
};

export default meta;

export const Default = {
  render: () => <Switch aria-label="toggle" />,
};

export const States = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch defaultChecked aria-label="on" />
      <Switch aria-label="off" />
      <Switch size="sm" defaultChecked aria-label="small" />
    </div>
  ),
};
