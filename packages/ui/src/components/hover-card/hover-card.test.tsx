import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./index"

describe("HoverCard", () => {
  it("renders", () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>,
    )
  })
})
