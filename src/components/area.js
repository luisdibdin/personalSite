import { Flex, Box } from "@chakra-ui/core"
import React from "react"

export const Area = ({ backgroundColour, styleHelper, children }) => {
  if (styleHelper === "true") {
    return (
      <Flex bg={backgroundColour} direction="vertical" w="100%" justify="center">
      <Box w="100%" maxW="72.5rem" px={[5, 5, 5, 0]} py={[10, 12, 16, 16]}>
        {children}
      </Box>
    </Flex>
    )
  }
  return (
    <Flex bg={backgroundColour} direction="vertical" w="100%" justify="center">
      <Flex w="100%" maxW="72.5rem" direction="column">
        {children}
      </Flex>
    </Flex>
  )
}
