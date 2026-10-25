import { BubbleGroup, Bubble, BubbleContent } from "./index";

const meta = {
  title: "Components/Bubble",
};

export default meta;

export const Default = {
  render: () => (
    <BubbleGroup>
      <Bubble>
        <BubbleContent>Hello</BubbleContent>
      </Bubble>
    </BubbleGroup>
  ),
};
