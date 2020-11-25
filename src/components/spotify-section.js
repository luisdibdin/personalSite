import React from "react"
import { Flex, Box, Heading, Text } from "@chakra-ui/core"
import { FetchRecentTracks } from "./lastfm-api"
import { Area } from "./area"

const SpotifySection = () => {
  return (
    <Area styleHelper="true" backgroundColour="primary.midBlue">
      <Box w="100%">
        <Heading size="inContainer">Listening To</Heading>
        <Text>Here's a list of my most recently played songs.</Text>
        <Flex>
          <FetchRecentTracks />
        </Flex>
      </Box>
    </Area>
  )
}

export default SpotifySection
