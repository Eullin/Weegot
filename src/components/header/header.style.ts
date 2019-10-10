import styled from "styled-components"
import { space } from "styled-system"

export const Container = styled.header`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
  }
`

export const LogoWrapper = styled.div``

export const ItemsWrapper = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding: 0 0.5rem;
    margin: 0;
  }
`
