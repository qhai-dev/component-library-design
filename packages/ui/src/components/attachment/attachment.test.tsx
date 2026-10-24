import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import {
  Attachment,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
} from "./index"

describe("Attachment", () => {
  it("renders", () => {
    render(
      <Attachment>
        <AttachmentContent>
          <AttachmentTitle>file.png</AttachmentTitle>
          <AttachmentDescription>Image attachment</AttachmentDescription>
        </AttachmentContent>
      </Attachment>,
    )
  })
})
