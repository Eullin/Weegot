import styled from "styled-components"
import { space, layout, SpaceProps, typography, color , LayoutProps, TypographyProps} from "styled-system"

export type HeadingProps = SpaceProps & LayoutProps & TypographyProps


 const Heading = styled.h1.attrs<SpaceProps>(props => ({
  mt: 4,
  fontWeight: 500,
  textAlign:"center",
  ...props,
}))<HeadingProps>`
  display: block;
  ${layout}
  ${space}
  ${typography}
  ${color}
`
export default Heading