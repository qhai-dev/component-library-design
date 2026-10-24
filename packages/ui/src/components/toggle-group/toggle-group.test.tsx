import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { ToggleGroup, ToggleGroupItem } from "./index"

describe("ToggleGroup", () => {
  it("renders", () => {
    render(
      <ToggleGroup>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>,
    )
  })
})
