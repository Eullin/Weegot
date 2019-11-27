import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Hero from "../../components/hero"
import Button from "../../components/button"
import { ImgWrapper, ImgWrapp, Container, Title } from "./homepage.styles"

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
        <Container flexDirection="column">
          <Title>
            Ahorra tiempo y dinero <br />
            en la compra de tu <br />
            próximo auto
          </Title>
            <div style={{ maxWidth: "200px", flexGrow: 1 }}>
                <Img fluid={data.file.childImageSharp.fluid} style={{ position: "relative", bottom: "-50px" }}/>
            </div>
        </Container>
      </Hero>
      <Button>Contáctanos</Button>
    </>
  )
}

export default Homepage
