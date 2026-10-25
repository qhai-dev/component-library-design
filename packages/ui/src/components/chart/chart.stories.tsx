import { ChartContainer } from "./index";

const meta = {
  title: "Components/Chart",
};

export default meta;

export const Default = {
  render: () => (
    <ChartContainer config={{ v: { label: "V", color: "var(--chart-1)" } }} className="h-40 w-64">
      <div>chart</div>
    </ChartContainer>
  ),
};
