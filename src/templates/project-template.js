import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Flex, Box, Link, UnorderedList, List } from "@chakra-ui/core"
import { Area } from "../components/area"

const Container = styled(Box)`
  margin: 0 auto;
  max-width: 52rem;
  padding: 0.5rem 1.25rem;
  padding-top: 6rem;

  /* HTML elements */

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  .gatsby-highlight {
    background-color: #24305e;
    border-radius: 0.5rem;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
    word-wrap: normal;
    white-space: nowrap;
  }

  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    display: inline-block;
    margin: 0;
    padding: 0;
    overflow: hidden;
    float: left;
    min-width: 100%;
    max-width: fit-content;
    white-space: nowrap;
  }

  .gatsby-resp-image-link {
    overflow: hidden;
    border-radius: 0.5rem;
    width: 100vw;
    max-width: 58rem;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .gatsby-resp-image-image {
    overflow: hidden;
    border-radius: 0.5rem;
  }

  a {
    color: #a8d0e6;
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline !important;
  }

  html {
    line-height: 1.5;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: "Merriweather", "Georgia", Cambria, "Times New Roman", Times,
      serif;
    font-size: 1rem;
    color: #2e353f;
  }

  footer {
    padding: 1.5rem 0;
  }

  hr {
    background: #d1dce5;
    height: 1px;
    border: 0;
  }

  /* Heading */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1.5rem;
    line-height: 1.1;
    letter-spacing: -0.025em;
    color: #f8e9a1;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Merriweather", "Georgia", Cambria, "Times New Roman", Times,
      serif;
    font-weight: 700;
  }

  h1 {
    font-family: Montserrat, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    margin-top: 3rem;
    font-weight: 900;
    margin-bottom: 0.3rem;
    margin-top: 1.5rem;
    font-size: 3.75rem;
    overflow-wrap: anywhere;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.25rem;
  }

  h4 {
    font-size: 1.875rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  h6 {
    font-size: 1.25rem;
  }

  h1 > a {
    color: inherit;
    text-decoration: none;
  }

  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {
    text-decoration: none;
    color: inherit;
  }

  /* Prose */

  p {
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: 0 0 2rem 0;
    padding: 0;
    font-family: "Merriweather", "Georgia", Cambria, "Times New Roman", Times,
      serif;
    font-size: 1.5rem;
    color: white;
  }

  ul,
  ol {
    margin-left: 0;
    margin-right: 0;
    padding: 0;
    margin-bottom: 2rem;
    list-style-position: outside;
    list-style-image: none;
  }

  ul li,
  ol li {
    padding-left: 0;
    margin-bottom: calc(2rem / 2);
    font-family: "Merriweather", "Georgia", Cambria, "Times New Roman", Times,
      serif;
    font-size: 1.5rem;
    color: white;
  }

  li > p {
    margin-bottom: calc(2rem / 2);
  }

  li *:last-child {
    margin-bottom: 0;
  }

  li > ul {
    margin-left: 2rem;
    margin-top: calc(2rem / 2);
  }

  blockquote {
    margin-left: calc(-1 * 1.5rem);
    margin-right: 2rem;
    padding: 0 0 0 1.5rem;
    border-left: 0.25rem solid #f76c6c;
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 2rem;
    font-family: "Merriweather", "Georgia", Cambria, "Times New Roman", Times,
      serif;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  blockquote > ul,
  blockquote > ol {
    list-style-position: inside;
  }

  table {
    width: 100%;
    margin-bottom: 2rem;
    border-collapse: collapse;
    border-spacing: 0.25rem;
  }

  table thead tr th {
    border-bottom: 1px solid #d1dce5;
  }

  /* Link */

  a:hover,
  a:focus {
    text-decoration: none;
  }

  /* Custom classes */

  .global-wrapper {
    margin: 0 auto;
    max-width: 42rem;
    padding: 2.5rem 1.25rem;
  }

  .global-wrapper[data-is-root-path="true"] .bio {
    margin-bottom: 5rem;
  }

  .global-header {
    margin-bottom: 3rem;
  }

  .main-heading {
    font-size: 2.986rem;
    margin: 0;
  }

  .post-list-item {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .post-list-item p {
    margin-bottom: 0;
  }

  .post-list-item h2 {
    font-size: 1.728rem;
    color: #005b99;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  .post-list-item header {
    margin-bottom: 1rem;
  }

  .header-link-home {
    font-weight: 700;
    font-family: Montserrat, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    text-decoration: none;
    font-size: 1.2rem;
  }

  .bio {
    display: flex;
    margin-bottom: 4rem;
  }

  .bio p {
    margin-bottom: 0;
  }

  .bio-avatar {
    margin-right: 1rem;
    margin-bottom: 0;
    min-width: 50px;
    border-radius: 100%;
  }

  .blog-post header h1 {
    margin: 0 0 1rem 0;
  }

  .blog-post header p {
    font-size: 1.2rem;
    font-family: Montserrat, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
  }

  .blog-post-nav ul {
    margin: 0;
  }

  .gatsby-highlight {
    margin-bottom: 2rem;
  }

  /* Media queries */

  @media (max-width: 36em) {
    h1 {
      font-size: 2.25rem;
    }

    h2 {
      font-size: 1.875rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1.25rem;
    }

    h5 {
      font-size: 1.125rem;
    }

    p {
      font-size: 1.125rem;
    }

    ul li,
    ol li {
      font-size: 18px;
    }
  }

  @media (max-width: 50em) and (min-width: 36em) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2.25rem;
    }

    h3 {
      font-size: 1.875rem;
    }

    h4 {
      font-size: 1.5rem;
    }

    h5 {
      font-size: 1.25rem;
    }

    p {
      font-size: 1.25rem;
    }

    ul li,
    ol li {
      font-size: 20px;
    }
  }

  @media (max-width: 54rem) {
    .gatsby-resp-image-link {
      overflow: hidden;
      border-radius: 0;
      width: 100vw;
      max-width: 58rem;
      margin-left: 50%;
      transform: translateX(-50%);
    }

    .gatsby-resp-image-image {
      overflow: hidden;
      border-radius: 0;
    }

    blockquote {
      padding: 0 0 0 1rem;
      margin-left: 0;
    }
    ul,
    ol {
      list-style-position: inside;
    }
  }
`

class ProjectPostTemplate extends React.Component {
  render() {
    const data = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext
    const { frontmatter, html } = data

    return (
      <Layout>
        <SEO title={frontmatter.title} description={frontmatter.description} />
        <Box w="100%" bg="primary.midBlue" pb={5} overflow="hidden" >
          <Container>
            <Flex align="center">
              <Link variant="projectArrow" href="/projects/">
                <ArrowBackIcon mr={1} boxSize={[5, 6, 7]} />
                Projects
              </Link>
            </Flex>
            <header>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: html }} />
          </Container>
          <Area backgroundColour="primary.midBlue" styleHelper="true">
            <UnorderedList
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
                marginLeft: 0
              }}
            >
              <List>
                {next && (
                  <Link lineHeight="50px" variant="projectArrow" href={next.frontmatter.slug}>
                    <ArrowBackIcon mr={1} boxSize={[5, 6, 7]} />
                    {next.frontmatter.title}
                  </Link>
                )}
              </List>
              <List>
                {previous && (
                  <Link lineHeight="50px" variant="projectArrow" href={previous.frontmatter.slug}>
                    {previous.frontmatter.title}
                    <ArrowForwardIcon mr={1} boxSize={[5, 6, 7]} />
                  </Link>
                )}
              </List>
            </UnorderedList>
          </Area>
        </Box>
      </Layout>
    )
  }
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM, YYYY")
        slug
        title
      }
    }
  }
`
