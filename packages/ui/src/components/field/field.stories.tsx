import { Field, FieldLabel, FieldError, FieldDescription } from "./index"

const meta = {
  title: "Components/Field",
}

export default meta

export const Default = {
  render: () => (
    <Field>
      <FieldLabel>Label</FieldLabel>
      <FieldDescription>Helper</FieldDescription>
      <FieldError>Error</FieldError>
    </Field>
  ),
}
