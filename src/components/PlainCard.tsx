import styled from "styled-components"
import { color, ColorProps, background, BackgroundProps } from 'styled-system'

type plainCardProps = ColorProps & BackgroundProps

const PlainCard = styled.div<plainCardProps>`
  ${color}
  ${background}
  margin: 0.2rem;
  border-radius: 14px;
  padding: 1rem;
  width: 100%;
`


export default PlainCard
