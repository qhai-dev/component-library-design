import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "./index"

const meta = {
  title: "Components/Popover",
}

export default meta

export const Default = {
  render: () => (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
}
