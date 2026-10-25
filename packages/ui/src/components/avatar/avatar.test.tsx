import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Avatar, AvatarFallback } from "./index";

describe("Avatar", () => {
  it("renders", () => {
    render(
      <Avatar>
        <AvatarFallback>SD</AvatarFallback>
      </Avatar>,
    );
  });
});
