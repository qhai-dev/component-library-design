import { AspectRatio } from "./index";

const meta = {
  title: "Components/AspectRatio",
};

export default meta;

export const Default = {
  render: () => (
    <AspectRatio ratio={16 / 9}>
      <div>16:9</div>
    </AspectRatio>
  ),
};
