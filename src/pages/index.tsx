import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero, Process, AboutUs, BrandsSlider, Delivery } from "../containers/Homepage"
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
  const nodes = data.allImageSharp.nodes
  return (
    <Layout>
      <SEO title="Home" />
      <MainContainer>
        <Hero nodes={nodes} />
        <AboutUs />
        <Process />
        <BrandsSlider />
        <Delivery />
      </MainContainer>
    </Layout>
  )
}

export default IndexPage
