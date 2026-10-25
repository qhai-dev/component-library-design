import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./index";

const meta = {
  title: "Components/Select",
};

export default meta;

export const Default = {
  render: () => (
    <Select items={[{ value: "a", label: "Option A" }]}>
      <SelectTrigger aria-label="select">
        <SelectValue placeholder="Pick" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Option A</SelectItem>
      </SelectContent>
    </Select>
  ),
};
