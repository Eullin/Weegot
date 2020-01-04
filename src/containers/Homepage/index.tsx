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
  Box,
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
  console.log(data.allImageSharp)
  return (
    <>
      <MainContainer>
        <PlainCard bg="secondaryBrand" p={3}>
          <Container
            flexDirection={["column", "row"]}
            justifyContent="space-between"
          >
            <Heading as="h1" color="white" width={1}>
              Ahorra tiempo y dinero en la compra de tu próximo auto
            </Heading>
            <div style={{ width: "100%", flexGrow: 1 }}>
              <IMG
                fluid={data.allImageSharp.nodes[8].fluid}
                position="relative"
                bottom={[6, 7, 8, 9]}
              />
            </div>
          </Container>
        </PlainCard>
        <ButtonWrapp>
          <Button>Contáctanos</Button>
        </ButtonWrapp>
        <Box>
          <Paragraph mt={4} mb={4} lineHeight="normalText">
            Somos expertos al momento de negociar la compra y venta de
            automóviles.​ Evita ser engañado por concesionarios sin principios
            que, con el objetivo de lograr una venta, implementan estrategias
            maliciosas que afectan tu pago inicial, tus cuotas y hasta tu
            situación crediticia. Te garantizamos el mejor negocio posible según
            tu situación.
          </Paragraph>
        </Box>
      </MainContainer>
      <ProcessWrap>
        <Heading as="h2" textAlign="center" fontWeight={400} color="textColor">
          Nuestro Proceso
        </Heading>
        <CardContainer flexDirection={["column", "row"]}>
          <PlainCard p={4} textAlign={["center", "left"]}>
            <Icon fluid={data.allImageSharp.nodes[4].fluid} />
            <Heading as="h2" mt={2} mb={2} fontSize={8} color="secondaryBrand">
              Asesoría
            </Heading>
            <Paragraph fontSize={7} color="lightTextColor">
              Esta nos brindará toda la información necesaria para conocer tu
              situación y tus posibilidades
            </Paragraph>
            <CtaLink to="/contacto">Comenzar ahora →</CtaLink>
          </PlainCard>
          <PlainCard p={4} textAlign={["center", "left"]}>
            <Icon fluid={data.allImageSharp.nodes[5].fluid} />
            <Heading as="h2" mt={2} mb={2} fontSize={8} color="secondaryBrand">
              Gestión
            </Heading>
            <Paragraph fontSize={7} color="lightTextColor">
              Esta nos brindará toda la información necesaria para conocer tu
              situación y tus posibilidades
            </Paragraph>
            <CtaLink to="/contacto">Comenzar ahora →</CtaLink>
          </PlainCard>
          <PlainCard p={4} textAlign={["center", "left"]}>
            <Icon fluid={data.allImageSharp.nodes[6].fluid} />
            <Heading as="h2" mt={2} mb={2} fontSize={8} color="secondaryBrand">
              Delivery
            </Heading>
            <Paragraph fontSize={7} color="lightTextColor">
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
