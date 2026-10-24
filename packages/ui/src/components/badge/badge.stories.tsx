import { Badge } from "./index"

const meta = {
  title: "Components/Badge",
}

export default meta

export const Default = {
  render: () => <Badge>Badge</Badge>,
}

export const Variants = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>default</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="destructive">danger</Badge>
    </div>
  ),
}
