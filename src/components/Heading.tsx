import styled from "styled-components"
import { space, layout, SpaceProps, typography, color , LayoutProps, TypographyProps} from "styled-system"

export type HeadingProps = SpaceProps & LayoutProps & TypographyProps


 const Heading = styled.h1.attrs<SpaceProps>(props => ({
  mt: 4,
  mb: 4,
  fontWeight: 500,
  ...props,
}))<HeadingProps>`
  display: block;
  ${layout}
  ${space}
  ${typography}
  ${color}
`
export default Heading