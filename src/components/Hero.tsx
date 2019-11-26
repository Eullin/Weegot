import React from "react"
import styled from "styled-components"

const Background = styled.div`
  max-width: 700px;
  background-color: ${({ theme }) => theme.colors.secondaryBrand};
  max-height: 400px;
`

const Hero = () => <Background>Hero</Background>

export default Hero
