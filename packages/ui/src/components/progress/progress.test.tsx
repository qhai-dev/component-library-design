import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Progress } from "./index";

describe("Progress", () => {
  it("renders", () => {
    render(<Progress value={60} aria-label="progress" />);
  });
});
