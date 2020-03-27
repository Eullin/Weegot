import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero, Process, AboutUs } from "../containers/Homepage"
import { MainContainer } from "../components/MainContainer"
import { useStaticQuery, graphql } from "gatsby"

//import Homepage from "../containers/Homepage"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 300) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <MainContainer>
        <Hero data={data} />
        <AboutUs />
        <Process />
      </MainContainer>
    </Layout>
  )
}

export default IndexPage
