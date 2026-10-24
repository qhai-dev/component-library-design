import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { CodeBlock } from "./index"

describe("CodeBlock", () => {
  it("renders", () => {
    render(<CodeBlock>console.log(1)</CodeBlock>)
  })
})
