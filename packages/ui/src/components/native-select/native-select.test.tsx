import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { NativeSelect, NativeSelectOption } from "./index";

describe("NativeSelect", () => {
  it("renders", () => {
    render(
      <NativeSelect aria-label="pick">
        <NativeSelectOption value="a">Option A</NativeSelectOption>
      </NativeSelect>,
    );
  });
});
