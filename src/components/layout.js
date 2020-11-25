/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { ChakraProvider } from "@chakra-ui/core"
import theme from '../theme/theme'
import Navbar from "./navbar"
import Contact from "./contact"

const Layout = ({ finalColor, children }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Navbar />
        {children}
        <Contact backgroundColor={finalColor} />
      </ChakraProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
