import { Progress } from "./index"

const meta = {
  title: "Components/Progress",
}

export default meta

export const Default = {
  render: () => <Progress value={60} aria-label="progress" />,
}
