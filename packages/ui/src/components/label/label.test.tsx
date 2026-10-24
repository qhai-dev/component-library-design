import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { Label } from "./index"

describe("Label", () => {
  it("renders", () => {
    render(<Label htmlFor="x">Label</Label>)
  })
})
