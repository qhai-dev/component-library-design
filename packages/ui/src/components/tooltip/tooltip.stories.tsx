import { Tooltip, TooltipTrigger, TooltipContent } from "./index";

const meta = {
  title: "Components/Tooltip",
};

export default meta;

export const Default = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>Hover</TooltipTrigger>
      <TooltipContent>Tip</TooltipContent>
    </Tooltip>
  ),
};
