import {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "./index"

const meta = {
  title: "Components/Combobox",
}

export default meta

export const Default = {
  render: () => (
    <Combobox>
      <ComboboxTrigger>Open</ComboboxTrigger>
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>Nothing here</ComboboxEmpty>
          <ComboboxItem value="a">Item A</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}
