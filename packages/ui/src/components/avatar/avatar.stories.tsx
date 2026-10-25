import { Avatar, AvatarFallback } from "./index";

const meta = {
  title: "Components/Avatar",
};

export default meta;

export const Default = {
  render: () => (
    <Avatar>
      <AvatarFallback>SD</AvatarFallback>
    </Avatar>
  ),
};
