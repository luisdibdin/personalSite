import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from "../components/about"
import SpotifySection from "../components/spotify-section"
import AboutCont from "../components/about-cont"

const IndexPage = () => {
  return (
    <Layout finalColor="primary.darkBlue">
      <SEO title="Home" />
      <About />
      <AboutCont />
      <SpotifySection />
    </Layout>
  )
}

export default IndexPage
