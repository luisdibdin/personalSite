import React from "react"
import { graphql } from "gatsby"
import {
  Text,
  Heading,
  Box,
  Link,
  Flex,
  UnorderedList,
  List,
} from "@chakra-ui/core"
import Layout from "../components/layout"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import ProjectPageItem from "../components/project-page-item"
import { Area } from "../components/area"

class ProjectIndex extends React.Component {
  render() {
    const { data } = this.props
    const projects = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? "/projects" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout>
        <Area backgroundColour="primary.midBlue" styleHelper="true">
          <Heading size="main" mt={10}>
            Projects
          </Heading>
          <Text mb={10} w={["100%", "100", "80%", "70%"]}>
            I have completed many projects during my time at University as well
            as on my own time. Here you can check out the articles I have
            written about them.
          </Text>
          <Box>
            {projects.map(({ node: project }) => {
              const title = project.frontmatter.title
              const languages = project.frontmatter.languages
              const slug = project.frontmatter.slug
              const description = project.frontmatter.description
              const date = project.frontmatter.date
              const imageData = project.frontmatter.image.childImageSharp.fluid
              return (
                <Box
                  w={["90%", "80%", "70%", "60%"]}
                  ml={[0, "5%", "5%", "5%"]}
                  mr={5}
                  mb={10}
                >
                  <ProjectPageItem
                    title={title}
                    languages={languages}
                    slug={slug}
                    description={description}
                    date={date}
                    imageData={imageData}
                  />
                </Box>
              )
            })}
          </Box>
          <UnorderedList
            justifyContent="space-between"
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              alignItems: "center",
              listStyle: "none",
              padding: 0,
              marginLeft: 0,
            }}
          >
            {!isFirst && (
              <Link
                display={["none", "flex", "flex", "flex"]}
                variant="projectArrow"
                href={prevPage}
                rel="prev"
              >
                <ArrowBackIcon mr={1} boxSize={[5, 6, 7]} />
                Previous Page
              </Link>
            )}
            <Flex
              w={["50%", "25%"]}
              justify="space-between"
              marginRight={isLast ? "50%" : 0}
              marginLeft={isFirst ? "50%" : 0}
              style={{
                transform: `translateX(${
                  isFirst || isLast ? (isFirst ? "-50%" : "50%") : 0
                })`,
              }}
            >
              {Array.from({ length: numPages }, (_, i) => (
                <List
                  key={`pagination-number${i + 1}`}
                  style={{
                    margin: 0,
                  }}
                >
                  <Link
                    href={`/projects/${i === 0 ? "" : i + 1}`}
                    variant="projectArrow"
                    style={{
                      background: i + 1 === currentPage ? "#24305e" : "",
                      borderRadius: "0.2em",
                      padding: "8px",
                    }}
                  >
                    {i + 1}
                  </Link>
                </List>
              ))}
            </Flex>
            {!isLast && (
              <Link
                display={["none", "flex", "flex", "flex"]}
                variant="projectArrow"
                href={nextPage}
                rel="next"
              >
                Next Page
                <ArrowForwardIcon ml={1} boxSize={[5, 6, 7]} />
              </Link>
            )}
          </UnorderedList>
        </Area>
      </Layout>
    )
  }
}

export default ProjectIndex

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM, YYYY")
            title
            description
            languages
            slug
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
