import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { BubbleGroup, Bubble, BubbleContent } from "./index"

describe("Bubble", () => {
  it("renders", () => {
    render(
      <BubbleGroup>
        <Bubble>
          <BubbleContent>Hello</BubbleContent>
        </Bubble>
      </BubbleGroup>,
    )
  })
})
