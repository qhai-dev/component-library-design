import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./index";

const meta = {
  title: "Components/Accordion",
};

export default meta;

export const Default = {
  render: () => (
    <Accordion defaultValue={["a"]} className="w-96">
      <AccordionItem value="a">
        <AccordionTrigger>First section</AccordionTrigger>
        <AccordionContent>Content of the first section.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Second section</AccordionTrigger>
        <AccordionContent>Content of the second section.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
