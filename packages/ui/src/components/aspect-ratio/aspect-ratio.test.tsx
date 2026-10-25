import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { AspectRatio } from "./index";

describe("AspectRatio", () => {
  it("renders", () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <div>16:9</div>
      </AspectRatio>,
    );
  });
});
