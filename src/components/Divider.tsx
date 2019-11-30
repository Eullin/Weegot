import React from "react"
import styled from "styled-components"

const Dots = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${({ theme }) => theme.colors.brandAutos};
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
`

const Container = styled.div`
  text-align: center;
`

export default () => (
  <Container>
    <Dots />
    <Dots />
    <Dots />
  </Container>
)
