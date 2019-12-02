import styled from "styled-components"
import { color, ColorProps } from 'styled-system'

const PlainCard = styled.div<ColorProps>`
  ${color}
  margin: 0.2rem;
  border-radius: 14px;
  padding: 1rem;
  width: 100%;
`


export default PlainCard
