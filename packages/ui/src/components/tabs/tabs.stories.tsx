import { Tabs, TabsList, TabsTrigger, TabsContent } from "./index";

const meta = {
  title: "Components/Tabs",
};

export default meta;

export const Default = {
  render: () => (
    <Tabs defaultValue="a">
      <TabsList>
        <TabsTrigger value="a">A</TabsTrigger>
        <TabsTrigger value="b">B</TabsTrigger>
      </TabsList>
      <TabsContent value="a">Content A</TabsContent>
      <TabsContent value="b">Content B</TabsContent>
    </Tabs>
  ),
};
