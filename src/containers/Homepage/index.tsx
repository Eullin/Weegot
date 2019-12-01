import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

import PlainCard from "../../components/PlainCard"
import Button from "../../components/button"
import TextArea from "../../components/TextArea"
import {
  Container,
  Text,
  H2,
  ButtonWrapp,
  PlainCardWrap,
  CtaLink,
  ProcessWrap,
} from "./homepage.styles"
import MainContainer from "../../components/MainContainer"

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
          <Container flexDirection={["column", "row", "row", "row"]}>
            <Text>
              Ahorra tiempo y dinero <br />
              en la compra de tu <br />
              próximo auto
            </Text>
            <div style={{ maxWidth: "400px", flexGrow: 1 }}>
              <Img
                fluid={data.file.childImageSharp.fluid}
                style={{ position: "relative", bottom: "-40px" }}
              />
            </div>
          </Container>
        </PlainCard>
        <ButtonWrapp>
          <Link to="/contacto">
            <Button>Contáctanos</Button>
          </Link>
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
      <ProcessWrap>
        <H2>Nuestro proceso</H2>
        <PlainCardWrap>
          <PlainCard bg="brandAutos" width={[1, 1 / 4]}>
            <TextArea color="white">
              <h2>Llena nuestra aplicación</h2>
              <span>
                Esta nos brindará toda la información necesaria para conocer tu
                situación y tus posibilidades
              </span>{" "}
              <br />
              <CtaLink to="/contacto">Comenzar ahora →</CtaLink>
            </TextArea>
          </PlainCard>
          <PlainCard bg="secondaryBrand" width={[1, 1 / 4]}>
            <TextArea color="white">
              <h2>Negociamos por ti</h2>
              <span>
                Conocemos todo sobre la tasa de interés, las opciones y los
                precios, pudiendo negociar sin problema la adquisición de tu
                vehículo, garantizando ahorro de tiempo y dinero.
              </span>{" "}
              <br />
              <CtaLink to="/contacto">Comenzar ahora →</CtaLink>
            </TextArea>
          </PlainCard>
          <PlainCard bg="brandAutos" width={[1, 1 / 4]}>
            <TextArea color="white">
              <h2>Entrega</h2>
              <span>
                Elige el lugar de entrega, que puede ser en tu casa, en el
                concesionario o recogerlo en nuestra oficina. Si es para regalo
                te apoyamos con la sorpresa.
              </span>
              <br />
              <CtaLink to="/contacto">Comenzar ahora →</CtaLink>
            </TextArea>
          </PlainCard>
        </PlainCardWrap>
      </ProcessWrap>
    </>
  )
}

export default Homepage
