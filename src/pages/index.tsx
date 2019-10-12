import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { theme } from "../theme/index"
<<<<<<< HEAD
import GlobalStyle from "../styles/Global.js"
=======
import Button from '../components/button'

>>>>>>> cb3aaf54319d7901409b43fbe83f564046c29a87
const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
      <Button>Test test</Button>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
