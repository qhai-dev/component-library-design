import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "./index"

describe("Combobox", () => {
  it("renders", () => {
    render(
      <Combobox>
        <ComboboxTrigger>Open</ComboboxTrigger>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxEmpty>Nothing here</ComboboxEmpty>
            <ComboboxItem value="a">Item A</ComboboxItem>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>,
    )
  })
})
