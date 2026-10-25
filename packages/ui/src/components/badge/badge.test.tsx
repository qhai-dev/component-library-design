import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Badge } from "./index";

describe("Badge", () => {
  it("renders", () => {
    render(<Badge>Badge</Badge>);
  });
});
