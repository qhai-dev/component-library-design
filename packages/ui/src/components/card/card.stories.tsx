import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./index";

const meta = {
  title: "Components/Card",
};

export default meta;

export const Default = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>Body</CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
  ),
};
