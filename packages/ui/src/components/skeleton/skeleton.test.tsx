import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Skeleton } from "./index";

describe("Skeleton", () => {
  it("renders", () => {
    render(<Skeleton className="h-8 w-48" />);
  });
});
