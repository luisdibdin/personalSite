import React from "react"
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/core"
import ContactForm from "../components/contact-form"
import SocialLinks from "./social-links"
import { Area } from "./area"

const Contact = ({ backgroundColor }) => {
  return (
    <Area styleHelper="true">
      <Box id="contact" w="100%" mb={[10, 10, 0, 0]}>
        <Heading size="sub">Contact</Heading>
        <Flex
          direction={["column", "column", "row", "row"]}
          align={["center", "center", "initial", "initial"]}
          justify="space-between"
          w="100%"
        >
          <Box w={["100%", "100%", "47.5%", "47.5%"]} mb={10}>
            <Text>
              Please feel free to get in touch with me or follow me on any of
              the following social media. If you want to get hold of me either
              use the form to the right or send me an email at:{" "}
              <Link variant="inText" href="mailto:luisdibdin@gmail.com">
                luisdibdin@gmail.com
              </Link>.
            </Text>
            <SocialLinks iconSize="3x" maxWidth="300px" />
          </Box>
          <Box w={["100%", "100%", "47.5%", "47.5%"]}>
            <ContactForm />
          </Box>
        </Flex>
      </Box>
      <Text fontSize="lg">
        Site built using{" "}
        <Link variant="inText" href="https://www.gatsbyjs.com">
          GatsbyJS
        </Link>{" "}
        and hosted on{" "}
        <Link variant="inText" href="https://www.netlify.com">
          Netlify
        </Link>{"."}
        <br /> Styled with the help of{" "}
        <Link variant="inText" href="https://chakra-ui.com">
          Chakra UI
        </Link>{"."}
      </Text>
      <Text fontSize="lg">© Luis Dibdin, {new Date().getFullYear()}</Text>
    </Area>
  )
}

export default Contact
