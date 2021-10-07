import React from "react"
import { Flex, Heading, Box, Text } from "@chakra-ui/core"
import Projects from "./projects"
import { Area } from "./area"

const AboutCont = () => {
  return (
    <Area styleHelper="true">
      <Flex
        direction={["column-reverse", "column-reverse", "row", "row"]}
        w="100%"
        justify="space-between"
      >
        <Box w={["100%", "100%", "47.5%"]} mt={[5, 5, "117px"]}>
          <Projects />
        </Box>
        <Box w={["100%", "100%", "47.5%"]}>
          <Heading size="sub">About Me</Heading>
          <Text>
            I have lived in the New Forest my whole life. I love walking,
            camping, travelling, tea, watching anime and movies, listening to
            music, jumping rope, and cooking.
          </Text>
          <Text>
            I live my life striving to always be a better person. I want to
            always be challenged and to continue to learn. To be kind to people
            and to reduce my impact on the planet.
          </Text>
          <Heading size="subsub">Work Stuff</Heading>
          <Text>
            Having just finished my Masters in Computer Science, I am now
            looking for new opportunities.
          </Text>
          <Text>
            Over the course of my university education I have become experienced
            in Java and Python. I have completed numerous projects such as
            optimising algorithms in Java, developing a mobile app in Dart using
            Flutter, and data analysis and machine learning in Python.
          </Text>
          <Text>
            I thoroughly enjoy Software Development and Data Science. I am constantly
            striving to improve in these fields by learning new technologies,
            collaborating with others, and refining my programming skills to produce
            clean and tested code.
          </Text>
          <Heading size="subsub">This Site</Heading>
          <Text>
            I developed this site using the GatsbyJS framework for React. It was
            made with the intention of being an online portfolio to show case
            and discuss the projects I have completed. Please feel free to take
            a look around and get in touch with me.
          </Text>
        </Box>
      </Flex>
    </Area>
  )
}

export default AboutCont
