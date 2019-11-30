import styled from "styled-components"
import {flexbox, FlexboxProps} from 'styled-system'

export const ImgContainer = styled.div`
  margin: 2rem auto;
`

export const Container = styled.div<FlexboxProps>`
  display: flex;
  flex-direction: column;
  ${flexbox}
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

`

export const Title = styled.span`
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
