import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { Switch } from "./index";

describe("Switch", () => {
  it("renders", () => {
    render(<Switch aria-label="toggle" />);
  });

  it("toggles on click", async () => {
    const user = userEvent.setup();
    render(<Switch aria-label="notifications" />);
    const sw = screen.getByRole("switch", { name: "notifications" });
    await user.click(sw);
    expect(sw).toBeChecked();
  });
});
