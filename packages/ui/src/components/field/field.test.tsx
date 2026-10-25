import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Field, FieldLabel, FieldError, FieldDescription } from "./index";

describe("Field", () => {
  it("renders", () => {
    render(
      <Field>
        <FieldLabel>Label</FieldLabel>
        <FieldDescription>Helper</FieldDescription>
        <FieldError>Error</FieldError>
      </Field>,
    );
  });
});
