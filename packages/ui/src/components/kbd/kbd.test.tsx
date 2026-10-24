import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { Kbd, KbdGroup } from "./index"

describe("Kbd", () => {
  it("renders", () => {
    render(
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>,
    )
  })
})
