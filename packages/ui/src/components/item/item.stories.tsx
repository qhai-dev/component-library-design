import { Item, ItemContent, ItemTitle, ItemDescription } from "./index"

const meta = {
  title: "Components/Item",
}

export default meta

export const Default = {
  render: () => (
    <Item>
      <ItemContent>
        <ItemTitle>Title</ItemTitle>
        <ItemDescription>Description</ItemDescription>
      </ItemContent>
    </Item>
  ),
}
