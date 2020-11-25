import React from "react"
import { Box, Text, Link } from "@chakra-ui/core"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled(Box)`
  display: Flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 200px;
  background-color: white;
  //nesting

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`
const ProjectItem = ({
  slug,
  title,
  languages,
  description,
  date,
  imageData,
}) => {
  return (
    <Box>
      <Wrapper rounded="lg">
        <Img fluid={imageData} alt={title} />
      </Wrapper>
      <Box mt={3}>
        <Link href={slug} variant="sub">
          {title}
        </Link>
        <Text mb={3} color="gray.200">{date}</Text>
        <Text noOfLines={3}>{description}</Text>
      </Box>
    </Box>
  )
}

export default ProjectItem
