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

export const Icon = styled(Img)<SpaceProps>`
  max-width: 45px;
  margin-bottom: 2rem;
  ${space}
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    margin: 0 auto 2rem;
  }
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
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 1rem 3rem;
`

export const CardContainer = styled.div<FlexboxProps>`
  ${flexbox}
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
`

export const CtaLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textColor};
  text-decoration: none;
`

export const IMG = styled(Img)<ImgProps>`
  ${space}
  ${position}
`

export const Box = styled.div`
  max-width: 800px;
  text-align: left;
  margin: 0 auto;
  font-size: 16px;
`
