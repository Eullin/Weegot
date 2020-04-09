import styled from "styled-components"
import circle from "../images/forms/circle.png"
import pink from "../images/forms/pink.png"
import pinkL from "../images/forms/pinkL.png"

import {
  color,
  ColorProps,
  background,
  BackgroundProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
} from "styled-system"

type plainCardProps = ColorProps &
  BackgroundProps &
  SpaceProps &
  TypographyProps & 
  BorderProps

const PlainCard = styled.div.attrs(props => ({
  tabIndex: 0,
  bg: "#fff",
  color: "black",
  ...props,
}))<plainCardProps>`
  ${typography}
  ${color}
  ${background}
  ${space}
  ${border}
`

export default PlainCard

export const HeroPlainCard = styled(PlainCard)`
box-shadow: 0 2px 6px 0 rgba(41,41,43,.07);
background-image: url(${pink}), url(${pinkL}), url(${circle});
background-repeat: no-repeat;
background-position-x: 100%, 70%, 80%;
background-position-y: 50%, 0%, 20%;
`
