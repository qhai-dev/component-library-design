import { HoverCard, HoverCardTrigger, HoverCardContent } from "./index"

const meta = {
  title: "Components/HoverCard",
}

export default meta

export const Default = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>Content</HoverCardContent>
    </HoverCard>
  ),
}
