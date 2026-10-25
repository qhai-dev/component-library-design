import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from "./index";

const meta = {
  title: "Components/Empty",
};

export default meta;

export const Default = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>No data</EmptyTitle>
        <EmptyDescription>Nothing to show.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};
