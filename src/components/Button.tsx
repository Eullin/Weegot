import styled from "styled-components"
import { color, typography, space, layout } from "styled-system"

const Button = styled.button`
  ${color}
  ${typography}
  ${space}
  ${layout}
  display: inline-block;
  border: none;
  padding: 0.25em 1em;
  margin: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  appearance: none;
  background: ${({ theme }) => theme.colors.brandAutos};
  border-radius: 1em;
  height: 21px;
  width: auto;
`

export default Button
