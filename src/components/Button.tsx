import React , {FC}  from 'react'
import styled from "styled-components"
import { color, typography, space, layout, LayoutProps } from "styled-system"

type ButtonProps = {
  onClick: () => void;
  text: string;
} & LayoutProps

const StyledButton = styled.button<LayoutProps>`
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
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  appearance: none;
  background: ${({ theme }) => theme.colors.brandAutos};
  border-radius: 1em;
`

StyledButton.defaultProps = {
  height: '26px',
  width: '200px'
}

const Button: FC<ButtonProps> = ({ onClick, text }) => {
 return (
 <StyledButton onClick={onClick}>
   {text}
   </StyledButton>
 )
}

export default Button