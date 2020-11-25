import React from "react"
import { Flex, Link, UnorderedList, ListItem } from "@chakra-ui/core"
import LinkData from "../constants/navbar-links.json"
import SocialLinks from "./social-links"

export const NavbarLinks = ({ navStyle, clicked }) => {
  if (navStyle === "hamburger") {
    return (
      <Flex direction="column" w="100%" align="center" mt="100px">
        <UnorderedList styleType="none" textAlign="center" mb={10} ml={0}>
          {LinkData.navbarlinks.map(link => {
            return (
              <ListItem mb={10}>
                <Link
                  _hover={{ color: "primary.red" }}
                  color="primary.yellow"
                  fontFamily="heading"
                  fontWeight={900}
                  fontSize="4xl"
                  href={link.slug}
                  onClick={clicked}
                >
                  {link.title}
                </Link>
              </ListItem>
            )
          })}
        </UnorderedList>
        <SocialLinks iconSize="3x" maxWidth="80%" clicked={clicked} />
      </Flex>
    )
  }
  return (
    <Flex>
      <Flex align="center">
        <UnorderedList styleType="none">
          {LinkData.navbarlinks.map(link => {
            return (
              <ListItem display="inline" ml={10}>
                <Link
                  _hover={{ color: "primary.red" }}
                  color="primary.yellow"
                  fontFamily="heading"
                  fontWeight={900}
                  fontSize="xl"
                  href={link.slug}
                >
                  {link.title}
                </Link>
              </ListItem>
            )
          })}
        </UnorderedList>
      </Flex>
    </Flex>
  )
}
