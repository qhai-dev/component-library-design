import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "./index"

const meta = {
  title: "Components/Table",
}

export default meta

export const Default = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Semi</TableCell>
        </TableRow>
      </TableBody>
      <TableCaption>Caption</TableCaption>
    </Table>
  ),
}
