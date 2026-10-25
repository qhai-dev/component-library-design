import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { Button } from "./index";

describe("Button", () => {
  it("renders", () => {
    render(<Button>Click me</Button>);
  });

  it("calls onClick", async () => {
    const user = userEvent.setup();
    let clicked = 0;
    render(<Button onClick={() => clicked++}>Go</Button>);
    await user.click(screen.getByRole("button", { name: "Go" }));
    expect(clicked).toBe(1);
  });

  it("ignores clicks when disabled", async () => {
    const user = userEvent.setup();
    let clicked = 0;
    render(
      <Button disabled onClick={() => clicked++}>
        Nope
      </Button>,
    );
    await user.click(screen.getByRole("button", { name: "Nope" }));
    expect(clicked).toBe(0);
  });
});
