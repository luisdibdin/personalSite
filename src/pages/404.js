import React from "react"
import { Heading, Text, Flex } from "@chakra-ui/core"
import { Area } from "../components/area"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Area backgroundColour="primary.midBlue" styleHelper="true">
      <Flex direction="column" w="100%" align="center" my="100px">
        <Heading size="main">404: Not Found</Heading>
        <Text>You've stumbled upon a page that does not exist.</Text>
      </Flex>
    </Area>
  </Layout>
)

export default NotFoundPage
