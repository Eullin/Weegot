import styled from "styled-components"
import { flexbox, FlexboxProps } from "styled-system"
import { Link } from "gatsby"

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
  margin: 1rem 0;
`

export const ProcessWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  padding-top: 1rem;
`

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
  @media (min-width: 767px) {
    justify-content: space-between;
    flex-direction: row;
  }
`

export const Text = styled.span`
  padding: 2rem 2rem 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
`

export const ButtonWrapp = styled.div`
  text-align: center;
  margin: 1.5rem 0;
  @media (min-width: 767px) {
    display: none;
  }
`

export const PlainCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`
