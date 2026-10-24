import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import userEvent from "@testing-library/user-event"
import { Toggle } from "./index"

describe("Toggle", () => {
  it("renders", () => {
    render(<Toggle aria-label="bold">B</Toggle>)
  })

  it("presses", async () => {
    const user = userEvent.setup()
    render(<Toggle aria-label="bold">B</Toggle>)
    const t = screen.getByRole("button", { name: "bold" })
    await user.click(t)
    expect(t).toHaveAttribute("data-pressed")
  })
})
