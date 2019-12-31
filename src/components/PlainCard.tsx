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
} from "styled-system"

type plainCardProps = ColorProps &
  BackgroundProps &
  SpaceProps &
  TypographyProps

const PlainCard = styled.div.attrs(props => ({
  bg: "#fff",
  color: "black",
  ...props,
}))<plainCardProps>`
  ${typography}
  ${color}
  ${background}
  ${space}
  margin: 0.6rem;
  border-radius: 14px;
  width: 100%;
  box-shadow: 0 2px 6px 0 rgba(41,41,43,.07);

`

export default PlainCard
