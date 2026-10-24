import { InputGroup, InputGroupAddon, InputGroupInput } from "./index"

const meta = {
  title: "Components/InputGroup",
}

export default meta

export const Default = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="inline-start">@</InputGroupAddon>
      <InputGroupInput placeholder="username" />
    </InputGroup>
  ),
}
