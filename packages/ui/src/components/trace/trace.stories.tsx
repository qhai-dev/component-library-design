import { Trace, TraceLine, TraceTitle, TraceDescription } from "./index"

const meta = {
  title: "Components/Trace",
}

export default meta

export const Default = {
  render: () => (
    <Trace>
      <TraceLine>
        <TraceTitle>Step one</TraceTitle>
        <TraceDescription>Something happened</TraceDescription>
      </TraceLine>
    </Trace>
  ),
}
