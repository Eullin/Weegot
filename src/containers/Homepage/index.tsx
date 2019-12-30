import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Heading from "../../components/Heading"
import Paragraph from "../../components/Paragraph"
import Button from "../../components/button"
import { MainContainer } from "../../components/MainContainer"
import {
  Container,
  ButtonWrapp,
  ProcessWrap,
  CtaLink,
  CardContainer,
  IMG,
  Icon,
} from "./homepage.styles"
import PlainCard from "../../components/PlainCard"

const Homepage = () => {
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
    <>
      <MainContainer>
        <PlainCard bg="secondaryBrand" p={3}>
          <Container
            flexDirection={["column", "row"]}
            justifyContent="space-between"
          >
            <Heading as="h1" color="white" pl={3} width={1}>
              Ahorra tiempo y dinero en la compra de tu próximo auto
            </Heading>
            <div style={{ width: "100%", flexGrow: 1 }}>
              <IMG
                fluid={data.allImageSharp.nodes[3].fluid}
                position="relative"
                bottom={[6, 7, 8, 9]}
              />
            </div>
          </Container>
        </PlainCard>
        <ButtonWrapp>
          <Button>Contáctanos</Button>
        </ButtonWrapp>
        <Paragraph m={4} mb={4} lineHeight="normalText">
          Somos expertos al momento de negociar la compra y venta de
          automóviles.​ Evita ser engañado por concesionarios sin principios
          que, con el objetivo de lograr una venta, implementan estrategias
          maliciosas que afectan tu pago inicial, tus cuotas y hasta tu
          situación crediticia. Te garantizamos el mejor negocio posible según
          tu situación.
        </Paragraph>
      </MainContainer>
      <ProcessWrap>
        <Heading as="h2" textAlign="center" fontWeight={400} color="textColor">
          Nuestro Proceso
        </Heading>
        <CardContainer flexDirection={["column", "row"]}>
          <PlainCard p={3} textAlign={["center", "left"]}>
            <Icon fluid={data.allImageSharp.nodes[6].fluid} />
            <Heading as="h2" mt={2} mb={2}>
              Asesoría
            </Heading>
            <Paragraph p={3}>
              Esta nos brindará toda la información necesaria para conocer tu
              situación y tus posibilidades
            </Paragraph>
            <CtaLink to="/contacto">Comenzar ahora →</CtaLink>
          </PlainCard>
          <PlainCard p={3} textAlign={["center", "left"]}>
            <Paragraph p={3}>
              <Icon fluid={data.allImageSharp.nodes[8].fluid} />
              <Heading as="h2" mt={2} mb={2}>
                Gestión
              </Heading>
              Esta nos brindará toda la información necesaria para conocer tu
              situación y tus posibilidades
            </Paragraph>
            <CtaLink to="/contacto">Comenzar ahora →</CtaLink>
          </PlainCard>
          <PlainCard p={3} textAlign={["center", "left"]}>
            <Paragraph p={3}>
              <Icon fluid={data.allImageSharp.nodes[7].fluid} />
              <Heading as="h2" mt={2} mb={2}>
                Delivery
              </Heading>
              Esta nos brindará toda la información necesaria para conocer tu
              situación y tus posibilidades
            </Paragraph>
            <CtaLink to="/contacto">Comenzar ahora →</CtaLink>
          </PlainCard>
        </CardContainer>
      </ProcessWrap>
    </>
  )
}

export default Homepage
