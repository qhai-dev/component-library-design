import { MessageGroup, Message, MessageContent } from "./index";

const meta = {
  title: "Components/Message",
};

export default meta;

export const Default = {
  render: () => (
    <MessageGroup>
      <Message>
        <MessageContent>Hello world</MessageContent>
      </Message>
    </MessageGroup>
  ),
};
