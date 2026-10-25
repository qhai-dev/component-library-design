import { Attachment, AttachmentContent, AttachmentTitle, AttachmentDescription } from "./index";

const meta = {
  title: "Components/Attachment",
};

export default meta;

export const Default = {
  render: () => (
    <Attachment>
      <AttachmentContent>
        <AttachmentTitle>file.png</AttachmentTitle>
        <AttachmentDescription>Image attachment</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  ),
};
