import React, { FC } from "react"
import { BackgroundBox, CardContainer, Icon, CtaLink } from "./homepage.styles"
import Heading from "../../components/Heading"
import PlainCard from "../../components/PlainCard"
import Paragraph from "../../components/Paragraph"
import { useStaticQuery, graphql } from "gatsby"
import theme from "../../theme"


interface ProcessProps {
  nodes: any;
}

const Process: FC<ProcessProps> = ({ nodes }) => {
  const icons = nodes.filter((res: any) => res.fluid.originalName.startsWith("web-icons"))


  return (
    <BackgroundBox backgroundColor={theme.colors.background}>
      <Heading  mb={4} mt={4}>
        Nuestro Proceso
      </Heading>
      <CardContainer flexDirection={["column", "row"]} >
        <PlainCard p={4} textAlign={["center", "left"]} m={2} borderRadius="14px">
          <Icon fluid={icons[0].fluid} />
          <Heading textAlign={["center", "left"]} as="h2" mt={2} mb={2} fontSize={8} color="secondaryBrand">
            Asesoría
          </Heading>
          <Paragraph fontSize={7} color="lightTextColor">
            Esta nos brindará toda la información necesaria para conocer tu
            situación y tus posibilidades
          </Paragraph>
          <CtaLink to="/contacto">Comenzar ahora →</CtaLink>
        </PlainCard>
        <PlainCard p={4} textAlign={["center", "left"]} m={2} borderRadius="14px">
          <Icon fluid={icons[1].fluid} />
          <Heading textAlign={["center", "left"]} as="h2" mt={2} mb={2} fontSize={8} color="secondaryBrand">
            Gestión
          </Heading>
          <Paragraph fontSize={7} color="lightTextColor">
            Esta nos brindará toda la información necesaria para conocer tu
            situación y tus posibilidades
          </Paragraph>
          <CtaLink to="/contacto">Comenzar ahora →</CtaLink>
        </PlainCard>
        <PlainCard p={4} textAlign={["center", "left"]} m={2} borderRadius="14px">
          <Icon fluid={icons[2].fluid} />
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
