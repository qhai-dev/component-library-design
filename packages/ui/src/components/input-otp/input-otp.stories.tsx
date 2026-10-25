import { InputOTP, InputOTPGroup, InputOTPSlot } from "./index";

const meta = {
  title: "Components/InputOtp",
};

export default meta;

export const Default = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
      </InputOTPGroup>
    </InputOTP>
  ),
};
