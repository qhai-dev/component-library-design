import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
} from "./index";

const meta = {
  title: "Components/MessageScroller",
};

export default meta;

export const Default = {
  render: () => (
    <MessageScrollerProvider>
      <MessageScroller className="h-64">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            <MessageScrollerItem>Message</MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </MessageScrollerProvider>
  ),
};
