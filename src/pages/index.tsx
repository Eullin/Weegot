import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { theme } from "../theme/index"
import GlobalStyle from "../styles/Global.js"
const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
      <h1>Homepage</h1>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
