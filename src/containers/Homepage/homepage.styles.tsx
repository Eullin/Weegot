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
  color,
  typography,
  TypographyProps,
  layout,
  ColorProps,
} from "styled-system"

export type HeadingProps = SpaceProps & LayoutProps & TypographyProps

export type ContainerProps = FlexboxProps & LayoutProps & SpaceProps
export type ImgProps = PositionProps & SpaceProps
export type BackgroundBoxProps = FlexboxProps & ColorProps & SpaceProps

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
  ${space}
  ${flexbox}
  ${layout}
   @media (max-width: ${({ theme }) => theme.breakpoints[0]})  {
    padding:0  1rem;
  }
`

export const ButtonWrapp = styled.div`
  text-align: center;
  margin: 1.5rem 0;
  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: none;
  }
`

export const BackgroundBox = styled.div<BackgroundBoxProps>`
  ${color}
  ${flexbox}
  ${space}
  display: flex;
  flex-direction: column;
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

export const HeroHeading = styled.h1.attrs<SpaceProps>(props => ({
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
    @media (min-width: 900px) {
    font-size: 2.5rem;
  };
    @media (min-width: 1000px) {
    font-size: 3rem;
  };
`

export const Slider = styled.div`
overflow: hidden;
z-indez: 9999;
background-image: radial-gradient(circle, white, ); /* Standard syntax (must be last) */
ul {
  display: flex;
  flex-direction: row; 
  
}
li {
  width: 9.8rem;
  heigh: 9.8rem;
  padding: 1.5rem 0.5rem;
}
img{
  max-width: 80px;
}
`
