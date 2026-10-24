import { RadioGroup, RadioGroupItem } from "./index"

const meta = {
  title: "Components/RadioGroup",
}

export default meta

export const Default = {
  render: () => (
    <RadioGroup defaultValue="a">
      <RadioGroupItem value="a" aria-label="A" />
      <RadioGroupItem value="b" aria-label="B" />
    </RadioGroup>
  ),
}
