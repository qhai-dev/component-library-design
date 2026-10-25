import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "./index";

describe("Table", () => {
  it("renders", () => {
    render(
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
      </Table>,
    );
  });
});
