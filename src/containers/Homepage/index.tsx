import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Hero from "../../components/hero"
import Button from "../../components/button"
import { Container, Title } from "./homepage.styles"

const Homepage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "car.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <Hero>
        <Container>
          <Title>
            Ahorra tiempo y dinero <br />
            en la compra de tu <br />
            próximo auto
          </Title>
<<<<<<< Updated upstream
          <div style={{ maxWidth: "200px" }}>
            <div style={{ position: "relative", top: "10px" }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
=======
          <div style={{ maxWidth: "400px", flexGrow: 1 }}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              style={{ position: "relative", bottom: "-40px" }}
            />
>>>>>>> Stashed changes
          </div>
        </Container>
      </Hero>
      <Button>Contáctanos</Button>
    </>
  )
}

export default Homepage
