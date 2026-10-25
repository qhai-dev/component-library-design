import { NativeSelect, NativeSelectOption } from "./index";

const meta = {
  title: "Components/NativeSelect",
};

export default meta;

export const Default = {
  render: () => (
    <NativeSelect aria-label="pick">
      <NativeSelectOption value="a">Option A</NativeSelectOption>
    </NativeSelect>
  ),
};
