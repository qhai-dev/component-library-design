import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from "./index";

describe("Empty", () => {
  it("renders", () => {
    render(
      <Empty>
        <EmptyHeader>
          <EmptyTitle>No data</EmptyTitle>
          <EmptyDescription>Nothing to show.</EmptyDescription>
        </EmptyHeader>
      </Empty>,
    );
  });
});
