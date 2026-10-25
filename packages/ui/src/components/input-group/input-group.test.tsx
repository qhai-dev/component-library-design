import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./index";

describe("InputGroup", () => {
  it("renders", () => {
    render(
      <InputGroup>
        <InputGroupAddon align="inline-start">@</InputGroupAddon>
        <InputGroupInput placeholder="username" />
      </InputGroup>,
    );
  });
});
