import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./index";

const meta = {
  title: "Components/Collapsible",
};

export default meta;

export const Default = {
  render: () => (
    <Collapsible>
      <CollapsibleTrigger>Toggle</CollapsibleTrigger>
      <CollapsibleContent>Hidden</CollapsibleContent>
    </Collapsible>
  ),
};
