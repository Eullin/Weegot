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
  layout,
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
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
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
