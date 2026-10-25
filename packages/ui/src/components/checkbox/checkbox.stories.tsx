import { Checkbox } from "./index";

const meta = {
  title: "Components/Checkbox",
};

export default meta;

export const Default = {
  render: () => <Checkbox aria-label="Check me" />,
};

export const States = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox defaultChecked aria-label="checked" />
      <Checkbox aria-label="unchecked" />
      <Checkbox disabled aria-label="disabled" />
      <Checkbox disabled defaultChecked aria-label="disabled checked" />
    </div>
  ),
};
