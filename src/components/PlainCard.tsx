import styled from "styled-components"
import { color, ColorProps, layout, LayoutProps } from "styled-system"

const PlainCard = styled.div<ColorProps>`
  ${color}
  ${layout}
  margin: 0.2rem 0;
  border-radius: 14px;
  padding: 1rem;
`

export default PlainCard
