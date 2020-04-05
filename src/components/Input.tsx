
import React, { FC, InputHTMLAttributes } from 'react';
import {
  typography,
  layout,
  space,
  color,
  border,
  variant,
  TypographyProps,
  LayoutProps,
  SpaceProps,
  ColorProps,
  BorderProps,
} from 'styled-system';
import styled from 'styled-components';

export type InputProps = { label?: string, placeholder?: string, value: string } & TypographyProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  BorderProps &
  InputHTMLAttributes<HTMLInputElement>;


const StyledInput = styled.input<any>`
  display: inline-block;
  border: none;
  margin: 0;
  text-decoration: none;
  font: inherit;
  width: auto;

  &:focus {
    outline: none;
  }
  
  &:active {
    
  }
  ${border}
  ${typography}
  ${layout}
  ${space}
  ${color}
`;

const StyledLabel = styled.label<SpaceProps>`
  display: block;
  ${space}
`;

const Input: FC<InputProps> = ({ label, placeholder, value, width, ...props }) => {
  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        data-testid="input"
        p={7}
        variant="primary"
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Input;