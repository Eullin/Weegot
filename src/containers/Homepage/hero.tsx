import React from "react"
import PlainCard from "../../components/PlainCard"
import { Container, HeroHeading, IMG, ButtonWrapp } from "./homepage.styles"
import Button from "../../components/button"
import { useStaticQuery, graphql } from "gatsby"

const Hero = (data: any) => {
  console.log("data", data.allImageSharp.nodes)
  return (
    <>
      <PlainCard bg="secondaryBrand" p={3}>
        <Container
          margin="0 auto"
          maxWidth="1000px"
          flexDirection={["column", "row"]}
          justifyContent="space-between"
        >
          <HeroHeading as="h1" color="white" width={1}>
            Ahorra tiempo y dinero en la compra de tu próximo auto
          </HeroHeading>
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
    </>
  )
}
export default Hero
