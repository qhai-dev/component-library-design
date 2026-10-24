import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { ButtonGroup } from "./index"
import { Button } from "../button"

describe("ButtonGroup", () => {
  it("renders", () => {
    render(
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>,
    )
  })
})
