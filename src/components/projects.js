import React from "react"
import { Flex, Heading, Box, SimpleGrid, Text, Link } from "@chakra-ui/core"
import ProjectItem from "./project-item"
import { graphql, useStaticQuery } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        limit: 2
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              languages
              slug
              title
              description
              date(formatString: "MMMM, YYYY")
            }
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.edges

  return (
    <Flex
      direction="column"
      bg="primary.midBlue"
      justify="center"
      px={[6, 8, 10]}
      py={[8, 10, 12]}
      rounded="xl"
    >
      <Heading size="inContainer">Projects</Heading>
      <Text>
        Check out my most recent projects. You can see them all{" "}
        <Link variant="inText" href="/projects/">here</Link>{"."}
      </Text>
      <Box>
        <SimpleGrid minChildWidth="275px" spacing="20px">
          {projects.map(({ node: project }) => {
            const title = project.frontmatter.title
            const languages = project.frontmatter.languages
            const slug = project.frontmatter.slug
            const description = project.frontmatter.description
            const date = project.frontmatter.date
            const imageData = project.frontmatter.image.childImageSharp.fluid
            return (
              <ProjectItem
                title={title}
                slug={slug}
                description={description}
                languages={languages}
                date={date}
                imageData={imageData}
                directionVar="column"
              />
            )
          })}
        </SimpleGrid>
      </Box>
    </Flex>
  )
}

export default Projects
