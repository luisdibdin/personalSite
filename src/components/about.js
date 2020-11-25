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
            I am a 22 year old aspiring Data Scientist and recent graduate with
            a MSc in Computer Science and BSc (Hons) in Mathematics.
          </Text>
          <Link
            style={{ width: "inherit" }}
            href={downloadUrl.node.publicURL}
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
