import { Flex } from "@chakra-ui/core"
import React from "react"
import { HamburgerDrawer } from "./hamburger-drawer"
import { NavbarLinks } from "./navbar-links"

const Navbar = () => {
  return (
    <Flex
      bg="primary.darkBlue"
      w="100%"
      h="80px"
      justify="center"
      align="center"
    >
      <Flex
        mx={[5, 5, 5, 0]}
        maxW="72.5rem"
        w="100%"
        h="100%"
        justify="flex-end"
        display={["none", "flex", "flex", "flex"]}
      >
        <NavbarLinks />
      </Flex>
      <Flex
        maxW="72.5rem"
        h="100%"
        w="100%"
        align="center"
        justify="flex-end"
        pr={5}
        display={["flex", "none", "none", "none"]}
      >
        <HamburgerDrawer />
      </Flex>
    </Flex>
  )
}

export default Navbar
