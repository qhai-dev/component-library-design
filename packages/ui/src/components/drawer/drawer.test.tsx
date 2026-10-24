import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "./index"

describe("Drawer", () => {
  it("renders", () => {
    render(
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer</DrawerTitle>
            <DrawerDescription>Description</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>,
    )
  })
})
