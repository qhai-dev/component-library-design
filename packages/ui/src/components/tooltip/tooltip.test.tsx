import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Tooltip, TooltipTrigger, TooltipContent } from "./index";

describe("Tooltip", () => {
  it("renders", () => {
    render(
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>Tip</TooltipContent>
      </Tooltip>,
    );
  });
});
