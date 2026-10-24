import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { MessageGroup, Message, MessageContent } from "./index"

describe("Message", () => {
  it("renders", () => {
    render(
      <MessageGroup>
        <Message>
          <MessageContent>Hello world</MessageContent>
        </Message>
      </MessageGroup>,
    )
  })
})
