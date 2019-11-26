import React from "react"
import { Link } from "gatsby"

<<<<<<< Updated upstream
import Layout from "../components/layout"
import SEO from "../components/seo"
import Homepage from '../containers/Homepage'
=======
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Button from "../../components/button"
import Hero from "./components/Hero"
>>>>>>> Stashed changes

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
<<<<<<< Updated upstream
    <Homepage />
=======
    <Hero />
    <Button>Test test</Button>
>>>>>>> Stashed changes
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
