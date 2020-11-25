import React from "react"
import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/core"
import { Link } from "gatsby"


const SpotifyElement = ({ imageData, name, artist, url, played }) => {
  return (
    <Tooltip
      shouldWrapChildren
      label={played}
      placement="top-start"
      bg="transparent"
      fontFamily="body"
      fontWeight={500}
      fontSize="18px"
      color="white"
      maxW="250px"
      p={0}
      boxShadow={0}
    >
      <Link to={url}>
        <Flex
          w="250px"
          direction="column"
          mb={3}
          mr={5}
          blur
          _hover={{
            p: { color: "primary.red" },
            img: {
              filter: "blur(2px)",
              webkitFilter: "blur(2px)",
              transition: "all 0.5s ease-in",
            }, 
          }}
        >
          <Image rounded="lg" src={imageData} />
          <Box mt={2}>
            <Text
              fontFamily="heading"
              fontWeight="700"
              fontSize={18}
              mb={0}
              noOfLines={2}
              color="primary.yellow"
            >
              {name}
            </Text>
            <Text fontSize={18} fontFamily="heading" color="white">
              {artist}
            </Text>
          </Box>
        </Flex>
      </Link>
    </Tooltip>
  )
}

export default SpotifyElement
