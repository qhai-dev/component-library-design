import { Kbd, KbdGroup } from "./index"

const meta = {
  title: "Components/Kbd",
}

export default meta

export const Default = {
  render: () => (
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
}
