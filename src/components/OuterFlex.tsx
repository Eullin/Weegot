import styled from 'styled-components';
import {
  flexbox,
  space,
  layout,
  typography,
  border,
  color,
  FlexboxProps,
  SpaceProps,
  BorderProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
} from 'styled-system';

type FlexProps = FlexboxProps &
  SpaceProps &
  BorderProps &
  LayoutProps &
  TypographyProps &
  ColorProps;

const OuterFlex = styled.div<FlexProps>`
  display: flex;
  ${flexbox}
  ${space}
  ${layout}
  ${typography}
  ${border}
  ${color}
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    flex-direction: column;
  }
`;

/*  OuterFlex.defaultProps = {
  flexGrow: 1
}   */

export default OuterFlex;