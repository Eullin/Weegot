import React from "react"
import { BackgroundBox } from "./homepage.styles"
import Heading from "../../components/Heading"
import theme from "../../theme"

const Delivery = () => {
  return (
    <BackgroundBox backgroundColor={theme.colors.background}>
      <Heading as="h1" fontWeight={400} color="textColor">
        Envio a todo Estados Unidos
      </Heading>
      <BackgroundBox backgroundColor={theme.colors.secondaryBrand}></BackgroundBox>
    </BackgroundBox>
  )
}

export default Delivery

