import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./index";

describe("Checkbox", () => {
  it("renders", () => {
    render(<Checkbox aria-label="Check me" />);
  });

  it("toggles on click", async () => {
    const user = userEvent.setup();
    render(<Checkbox aria-label="agree" />);
    const cb = screen.getByRole("checkbox", { name: "agree" });
    expect(cb).not.toBeChecked();
    await user.click(cb);
    expect(cb).toBeChecked();
  });
});
