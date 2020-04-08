import styled from 'styled-components'
import {
    flexbox,
    position,
    PositionProps,
    LayoutProps,
    space,
    SpaceProps,
    FlexboxProps,
    color,
    typography,
    TypographyProps,
    layout,
    ColorProps,
  } from "styled-system"

export type MainBoxProps = SpaceProps & LayoutProps & ColorProps
  
const MainBox = styled.div<MainBoxProps>`
  ${space}
  ${layout}
`

MainBox.defaultProps = {
  maxWidth: '800px',
  margin: '2rem auto',
  padding: '0 1.5rem'
}

export default MainBox