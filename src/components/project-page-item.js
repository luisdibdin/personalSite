import React from "react"
import { Box, Text, Flex, Link } from "@chakra-ui/core"


const ProjectPageItem = ({
  slug,
  title,
  languages,
  description,
  date,
  imageData,
}) => {
  return (
    <Flex align="center" mb={5}>
      <Box w="100%">
        <Link variant="header" href={slug}>
          {title}
        </Link>
        <Text color="gray.200">{date}</Text>
        <Text noOfLines={4}>{description}</Text>
      </Box>
    </Flex>
  )
}

export default ProjectPageItem
