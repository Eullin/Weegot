import styled from "styled-components"
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
import { Link } from "gatsby"
import Img from "gatsby-image"

export type HeadingProps = SpaceProps & LayoutProps & TypographyProps
export type ContainerProps = FlexboxProps & LayoutProps
export type ImgProps = PositionProps & SpaceProps

export const CtaLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights[5]};
`


export const ImgContainer = styled.div`
  margin: 2rem auto;
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  ${flexbox}
  ${layout}
`

export const ButtonWrapp = styled.div`
  text-align: center;
  margin: 1.5rem 0;
  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: none;
  }
`

export const ProcessWrap = styled.div<FlexboxProps>`
  ${flexbox}
  display: flex;
  background-color: rgba(204, 78, 99, 0.15);
  padding: 0 1rem 3rem;
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
