import React from "react"
import Me from "./me"
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/core"
import { graphql, useStaticQuery, Link } from "gatsby"

import "./scrollbar.css"
import { Area } from "./area"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" }, name: { eq: "CV" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  const downloadUrl = data.allFile.edges[0]

  return (
    <Area backgroundColour="primary.midBlue">
      <Flex
        direction={["column-reverse", "column-reverse", "row", "row"]}
        align={["center", "center", "initial", "initial"]}
      >
        <Box
          mr={[0, 0, 2, 20]}
          maxW={["100%", "100%", "60%", "50%"]}
          mt={[10, 10, "auto", "auto"]}
          mb={[10, 10, "auto", "auto"]}
          pr={[5, 5, 5, 0]}
          pl={[5, 5, 5, 0]}
        >
          <Heading size="main">I'm Luis Dibdin,</Heading>
          <Text>
            I am a 26 year old Platform Engineer at the UK Health Security Agency. I have previously
            worked as a Data Scientist at the Office for National Statistics.
          </Text>
          <Link
            style={{ width: "inherit" }}
            href={"https://luisdibdin.uk/404"}
            target="_blank"
          >
            <Button variant="main" _hover={{ bg: "primary.darkBlue" }}>
              DOWNLOAD CV
            </Button>
          </Link>
        </Box>
        <Me />
      </Flex>
    </Area>
  )
}

export default About
