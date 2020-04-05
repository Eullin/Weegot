import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Personal } from "../containers/Form"
import MainBox from "../components/MainBox"

const SecondPage = () => (
  <Layout>
    <MainBox>
      <SEO title="Page two" />
      <Personal />
      <Link to="/">Go back to the homepage</Link>
    </MainBox>
  </Layout>
)

export default SecondPage
