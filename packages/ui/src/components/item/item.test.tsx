import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Item, ItemContent, ItemTitle, ItemDescription } from "./index";

describe("Item", () => {
  it("renders", () => {
    render(
      <Item>
        <ItemContent>
          <ItemTitle>Title</ItemTitle>
          <ItemDescription>Description</ItemDescription>
        </ItemContent>
      </Item>,
    );
  });
});
