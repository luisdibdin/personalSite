import React from "react"
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/core"
import { HamburgerIcon } from '@chakra-ui/icons'
import { NavbarLinks } from "./navbar-links"

export function HamburgerDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton onClick={onOpen} variant="ghost" _hover={{  }} icon={<HamburgerIcon color="primary.yellow" boxSize={10} />} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg="primary.darkBlue">
          <DrawerCloseButton color="primary.yellow" _hover={{ }} boxSize={10} size={10} />
          <DrawerBody>
              <NavbarLinks clicked={onClose} navStyle="hamburger" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
