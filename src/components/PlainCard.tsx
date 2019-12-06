import styled from "styled-components"
import { color, ColorProps, background, BackgroundProps, space, SpaceProps } from 'styled-system'
import Circle from '../images/test.svg'

type plainCardProps = ColorProps & BackgroundProps & SpaceProps

const PlainCard = styled.div<plainCardProps>`
  ${color}
  ${background}
  ${space}
  margin: 0.2rem;
  border-radius: 14px;
  background-image: url(${Circle});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`


export default PlainCard
