import { Alert, AlertTitle, AlertDescription } from "./index";

const meta = {
  title: "Components/Alert",
};

export default meta;

export const Default = {
  render: () => (
    <Alert>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>Something happened.</AlertDescription>
    </Alert>
  ),
};

export const Types = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Alert>
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Semi info banner.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Danger</AlertTitle>
        <AlertDescription>Semi danger banner.</AlertDescription>
      </Alert>
    </div>
  ),
};
