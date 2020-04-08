import styled from "styled-components"
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
  bg: "#fff",
  color: "black",
  ...props,
}))<plainCardProps>`
  ${typography}
  ${color}
  ${background}
  ${space}
  ${border}
  box-shadow: 0 2px 6px 0 rgba(41,41,43,.07);
`

export default PlainCard
