import React from "react"
import { BackgroundBox, CardContainer, Icon, CtaLink } from "./homepage.styles"
import Heading from "../../components/Heading"
import PlainCard from "../../components/PlainCard"
import Paragraph from "../../components/Paragraph"
import { useStaticQuery, graphql } from "gatsby"
import theme from "../../theme"

const Process = () => {
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
    <BackgroundBox backgroundColor={theme.colors.background}>
      <Heading as="h2"  fontWeight={400} color="textColor">
        Nuestro Proceso
      </Heading>
      <CardContainer flexDirection={["column", "row"]}>
        <PlainCard p={4} textAlign={["center", "left"]}>
          <Icon fluid={data.allImageSharp.nodes[3].fluid} />
          <Heading textAlign={["center", "left"]} as="h2" mt={2} mb={2} fontSize={8} color="secondaryBrand">
            Asesoría
          </Heading>
          <Paragraph fontSize={7} color="lightTextColor">
            Esta nos brindará toda la información necesaria para conocer tu
            situación y tus posibilidades
          </Paragraph>
          <CtaLink to="/contacto">Comenzar ahora →</CtaLink>
        </PlainCard>
        <PlainCard p={4} textAlign={["center", "left"]}>
          <Icon fluid={data.allImageSharp.nodes[4].fluid} />
          <Heading textAlign={["center", "left"]} as="h2" mt={2} mb={2} fontSize={8} color="secondaryBrand">
            Gestión
          </Heading>
          <Paragraph fontSize={7} color="lightTextColor">
            Esta nos brindará toda la información necesaria para conocer tu
            situación y tus posibilidades
          </Paragraph>
          <CtaLink to="/contacto">Comenzar ahora →</CtaLink>
        </PlainCard>
        <PlainCard p={4} textAlign={["center", "left"]}>
          <Icon fluid={data.allImageSharp.nodes[5].fluid} />
          <Heading textAlign={["center", "left"]} as="h2" mt={2} mb={2} fontSize={8} color="secondaryBrand">
            Delivery
          </Heading>
          <Paragraph fontSize={7} color="lightTextColor">
            Esta nos brindará toda la información necesaria para conocer tu
            situación y tus posibilidades
          </Paragraph>
          <CtaLink to="/contacto">Comenzar ahora →</CtaLink>
        </PlainCard>
      </CardContainer>
    </BackgroundBox>
  )
}

export default Process
