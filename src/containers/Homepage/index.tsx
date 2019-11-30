import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Hero from "../../components/hero"
import Button from "../../components/button"
import TextArea from "../../components/TextArea"
import Divider from "../../components/Divider"
import { Container, Title, ButtonWrapp } from "./homepage.styles"

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
          <div style={{ maxWidth: "400px", flexGrow: 1 }}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              style={{ position: "relative", bottom: "-40px" }}
            />
          </div>
        </Container>
      </Hero>
      <ButtonWrapp>
        <Button>Contáctanos</Button>
      </ButtonWrapp>
      <TextArea>
        <span>
          Somos expertos al momento de negociar la compra y venta de
          automóviles.​ Evita ser engañado por concesionarios sin principios
          que, con el objetivo de lograr una venta, implementan estrategias
          maliciosas que afectan tu pago inicial, tus cuotas y hasta tu
          situación crediticia. Te garantizamos el mejor negocio posible según
          tu situación.
        </span>
      </TextArea>
      <Divider />
    </>
  )
}

export default Homepage
