import { Marker, MarkerIcon, MarkerContent } from "./index"

const meta = {
  title: "Components/Marker",
}

export default meta

export const Default = {
  render: () => (
    <Marker>
      <MarkerIcon />
      <MarkerContent>Divider</MarkerContent>
    </Marker>
  ),
}
