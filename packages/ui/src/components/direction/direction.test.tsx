import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { DirectionProvider } from "./index"

describe("Direction", () => {
  it("renders", () => {
    render(
      <DirectionProvider direction="ltr">
        <div>dir</div>
      </DirectionProvider>,
    )
  })
})
