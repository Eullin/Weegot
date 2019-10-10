import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { theme } from "../theme/index"
import Button from '../components/button'

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <Button>Test test</Button>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
