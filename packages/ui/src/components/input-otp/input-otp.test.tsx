import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./index"

describe("InputOtp", () => {
  it("renders", () => {
    render(
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
      </InputOTP>,
    )
  })
})
