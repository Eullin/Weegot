import React, { FC } from "react"
import PlainCard, { HeroPlainCard } from "../../components/PlainCard"
import { Container, HeroHeading, IMG, ButtonWrapp } from "./homepage.styles"
import Button from "../../components/Button"
import Flex from "../../components/Flex"

interface HeroProps {
  nodes: any
}

const Hero: FC<HeroProps> = ({ nodes }) => {
  const image = nodes.filter((res: any) => res.fluid.originalName === "car.png")

  return (
    <>
      <HeroPlainCard className="hero" bg="secondaryBrand" p={3}>
        <Container
          margin="0 auto"
          maxWidth="1000px"
          flexDirection={["column", "row"]}
          justifyContent="space-between"
        >
          <Flex flexDirection="column">
            <HeroHeading as="h1" color="white" width={1}>
              Ahorra tiempo y dinero en la compra de tu próximo auto
            </HeroHeading>
            <ButtonWrapp display={['none', 'inline-block']}>
              <Button
                maxWidth={1}
                onClick={() => console.log("clicked")}
                text={"Contáctanos"}
              />
            </ButtonWrapp>
          </Flex>
          <div style={{ width: "100%", flexGrow: 1 }}>
            {nodes && (
              <IMG
                fluid={image[0].fluid}
                position="relative"
                bottom={[6, 7, 8, 9]}
              />
            )}
          </div>
        </Container>
      </HeroPlainCard>
        <ButtonWrapp display={['block', 'none']} textAlign="center" mt={4}>
              <Button
                maxWidth={1}
                onClick={() => console.log("clicked")}
                text={"Contáctanos"}
              />
       </ButtonWrapp>
    </>
  )
}
export default Hero
