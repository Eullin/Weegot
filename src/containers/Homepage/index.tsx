import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Button from "../../components/button"
import TextArea from "../../components/TextArea"
import {MainContainer} from "../../components/MainContainer"
import { Container, Title, ButtonWrapp, ProcessWrap } from "./homepage.styles"
import PlainCard from "../../components/PlainCard"

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
      <MainContainer>
        <PlainCard bg="secondaryBrand">
          <Container flexDirection={['column','row']} justifyContent="space-between">
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
        </PlainCard>
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
      </MainContainer>
      <ProcessWrap flexDirection={["column", "row"]}>
        <PlainCard bg="brandAutos">
          Text 1
        </PlainCard>
        <PlainCard bg="secondaryBrand">
          Text 2 
        </PlainCard>
        <PlainCard bg="brandAutos">
          Text 3
        </PlainCard>
      </ProcessWrap>
    </>
  )
}

export default Homepage
