import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { Calendar } from "./index"

describe("Calendar", () => {
  it("renders", () => {
    render(<Calendar />)
  })
})
