import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { Textarea } from "./index";

describe("Textarea", () => {
  it("renders", () => {
    render(<Textarea placeholder="Write" />);
  });

  it("accepts typing", async () => {
    const user = userEvent.setup();
    render(<Textarea placeholder="bio" />);
    const el = screen.getByPlaceholderText("bio");
    await user.type(el, "hello");
    expect(el).toHaveValue("hello");
  });
});
