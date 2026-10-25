import { ToggleGroup, ToggleGroupItem } from "./index";

const meta = {
  title: "Components/ToggleGroup",
};

export default meta;

export const Default = {
  render: () => (
    <ToggleGroup>
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
    </ToggleGroup>
  ),
};
