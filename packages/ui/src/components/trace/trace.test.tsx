import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Trace, TraceLine, TraceTitle, TraceDescription } from "./index";

describe("Trace", () => {
  it("renders", () => {
    render(
      <Trace>
        <TraceLine>
          <TraceTitle>Step one</TraceTitle>
          <TraceDescription>Something happened</TraceDescription>
        </TraceLine>
      </Trace>,
    );
  });
});
