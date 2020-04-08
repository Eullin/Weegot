import React, { FC } from "react"
import PlainCard from "../../components/PlainCard"
import { Container, HeroHeading, IMG, ButtonWrapp } from "./homepage.styles"
import Button from "../../components/Button"
import { useStaticQuery, graphql } from "gatsby"

interface HeroProps {
  nodes: any;
}

const Hero: FC<HeroProps> = ({ nodes }) => {
  const image = nodes.filter((res: any) => res.fluid.originalName === "car.png")

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
        {nodes &&  <IMG
              fluid={image[0].fluid}
              position="relative"
              bottom={[6, 7, 8, 9]}
            />}
          </div> 
        </Container>
      </PlainCard>
      <ButtonWrapp>
        <Button onClick={() => console.log('clicked')} text={'Contáctanos'} />
      </ButtonWrapp>
    </>
  )
}
export default Hero
