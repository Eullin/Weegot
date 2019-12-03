import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

import {
  flexbox,
  position,
  PositionProps,
  LayoutProps,
  space,
  SpaceProps,
  FlexboxProps,
  TypographyProps,
  layout
} from "styled-system"

export type HeadingProps = SpaceProps & LayoutProps & TypographyProps
export type ContainerProps = FlexboxProps & LayoutProps
export type ImgProps = PositionProps & SpaceProps

export const ImgContainer = styled.div`
  margin: 2rem auto;
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  ${flexbox}
  ${layout}
`

/* 
this is the way to set default values
export const Title = styled.h1.attrs({ fontSize: [1, 2, 3, 4] })`
  ${typography}
  padding: 2rem 2rem 0;
  color: ${({ theme }) => theme.colors.white};
`
 */
export const ButtonWrapp = styled.div`
  text-align: center;
  margin: 1.5rem 0;
  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: none;
  }
`

export const ProcessWrap = styled.div<FlexboxProps>`
  display: flex;
  flex-direction: column;
  background-color: rgba(44, 39, 65, 0.05);
  padding: 1rem;
  padding-top: 0;
`

export const CardContainer = styled.div<FlexboxProps>`
  ${flexbox}
  display: flex;
`

export const CtaLink = styled(Link)`
padding: 1rem;
color: ${({ theme }) => theme.colors.white};
text-decoration: none;
`

export const IMG = styled(Img)<ImgProps>`
${space}
${position}
`
