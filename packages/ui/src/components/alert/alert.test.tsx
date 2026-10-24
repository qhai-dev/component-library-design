import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { Alert, AlertTitle, AlertDescription } from "./index"

describe("Alert", () => {
  it("renders", () => {
    render(
      <Alert>
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>Something happened.</AlertDescription>
      </Alert>,
    )
  })
})
