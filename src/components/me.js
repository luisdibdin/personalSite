import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from '@chakra-ui/core'

const StyledBox = styled(Box)`
  .gatsby-image-wrapper {
    height: 100%;
  }
`

const Me = () => {
  const data = useStaticQuery(graphql`
  query {
    file(name: { eq: "me" }, extension: { eq: "jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

const avatar = data.file.childImageSharp.fluid

  return (
    <StyledBox w="100%" minH={['intitial', 'initial', "60vh" , "60vh"]} overflow="hidden" mr={[0, 0, 5, 0]}>
        <Img fluid={avatar} />
    </StyledBox>
  )
}



export default Me
