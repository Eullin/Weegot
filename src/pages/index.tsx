import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Homepage from '../containers/Homepage'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Homepage />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
