import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { Input } from "./index";

describe("Input", () => {
  it("renders", () => {
    render(<Input placeholder="Type here" />);
  });

  it("accepts typing", async () => {
    const user = userEvent.setup();
    render(<Input placeholder="your name" />);
    const el = screen.getByPlaceholderText("your name");
    await user.type(el, "semi");
    expect(el).toHaveValue("semi");
  });
});
