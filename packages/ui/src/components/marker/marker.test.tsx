import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { Marker, MarkerIcon, MarkerContent } from "./index"

describe("Marker", () => {
  it("renders", () => {
    render(
      <Marker>
        <MarkerIcon />
        <MarkerContent>Divider</MarkerContent>
      </Marker>,
    )
  })
})
