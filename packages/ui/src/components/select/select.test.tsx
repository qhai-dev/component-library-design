import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./index"

describe("Select", () => {
  it("renders", () => {
    render(
      <Select items={[{ value: "a", label: "Option A" }]}>
        <SelectTrigger aria-label="select">
          <SelectValue placeholder="Pick" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
        </SelectContent>
      </Select>,
    )
  })
})
