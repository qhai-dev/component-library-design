import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
} from "./index"

describe("MessageScroller", () => {
  it("renders", () => {
    render(
      <MessageScrollerProvider>
        <MessageScroller className="h-64">
          <MessageScrollerViewport>
            <MessageScrollerContent>
              <MessageScrollerItem>Message</MessageScrollerItem>
            </MessageScrollerContent>
          </MessageScrollerViewport>
        </MessageScroller>
      </MessageScrollerProvider>,
    )
  })
})
