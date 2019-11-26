import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Hero from "./Homepage/components/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Button>Test test</Button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
