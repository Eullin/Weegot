import styled from "styled-components"
import { flexbox, FlexboxProps, typography } from "styled-system"
import { Link } from "gatsby"

export const CtaLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights[5]};
`

export const ImgContainer = styled.div`
  margin: 2rem auto;
`

export const Container = styled.div<FlexboxProps>`
  display: flex;
  flex-direction: column;
  ${flexbox}
`

export const Heading = styled.h1.attrs({ fontSize: [1, 2, 3, 4] })`
  ${typography}
  padding: 2rem 2rem 0;
  color: ${({ theme }) => theme.colors.white};
`

export const Title = styled.div`
  margin: 2.5rem auto;
  h2 {
    ${typography}
  }
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
