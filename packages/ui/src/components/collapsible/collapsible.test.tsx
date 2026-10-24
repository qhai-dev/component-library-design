import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import userEvent from "@testing-library/user-event"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./index"

describe("Collapsible", () => {
  it("renders", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Hidden</CollapsibleContent>
      </Collapsible>,
    )
  })

  it("expands", async () => {
    const user = userEvent.setup()
    render(
      <Collapsible>
        <CollapsibleTrigger>More</CollapsibleTrigger>
        <CollapsibleContent>Details</CollapsibleContent>
      </Collapsible>,
    )
    await user.click(screen.getByRole("button", { name: "More" }))
    expect(await screen.findByText("Details")).toBeInTheDocument()
  })
})
