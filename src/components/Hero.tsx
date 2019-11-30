import React, { FC } from "react"
import styled from "styled-components"

const Background = styled.div`
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.colors.secondaryBrand};
  border-radius: 14px;
  padding: 1rem;
  width: 100%;
`

const Hero: FC = ({ children }) => <Background>{children}</Background>

export default Hero
