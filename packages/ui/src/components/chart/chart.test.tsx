import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { ChartContainer } from "./index"

describe("Chart", () => {
  it("renders", () => {
    render(
      <ChartContainer
        config={{ v: { label: "V", color: "var(--chart-1)" } }}
        className="h-40 w-64"
      >
        <div>chart</div>
      </ChartContainer>,
    )
  })
})
