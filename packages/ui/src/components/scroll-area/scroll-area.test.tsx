import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { ScrollArea, ScrollBar } from "./index"

describe("ScrollArea", () => {
  it("renders", () => {
    render(
      <ScrollArea className="h-32 w-48">
        <div>Long content</div>
        <ScrollBar />
      </ScrollArea>,
    )
  })
})
