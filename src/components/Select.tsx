import { SelectHTMLAttributes } from 'react';
import {
  typography,
  layout,
  space,
  color,
  border,
  TypographyProps,
  LayoutProps,
  SpaceProps,
  ColorProps,
  BorderProps,
} from 'styled-system';
import styled from 'styled-components';

export type SelectProps = TypographyProps &
  LayoutProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  SelectHTMLAttributes<HTMLSelectElement>;

const Select = styled.select.attrs<SelectProps>(props => ({
  borderRadius: 4,
  p: 7,
  'data-testid': 'select',
  ...props,
}))<SelectProps>`
  background: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%3E%0A%3Cpath%20d%3D%22m23.25%207.311-10.72%2010.719c-0.292%200.293-0.767%200.293-1.059%201e-3l-1e-3%20-1e-3%20-10.72-10.719%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E'), #FFFFFF;
  background-repeat: no-repeat;
  background-position: right 1em top 50%;
  background-size: .65em auto;
  border: none;
  margin: 0;
  text-decoration: none;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  font: inherit;
  box-sizing: border-box;
  
  &:hover,
  &:focus {
  }
  
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

export default Select;