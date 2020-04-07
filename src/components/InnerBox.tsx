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
  marginTop,
} from 'styled-system';

type FlexProps = FlexboxProps &
  SpaceProps &
  BorderProps &
  LayoutProps &
  TypographyProps &
  ColorProps;

const InnerBox = styled.div<FlexProps>`
  display: flex;
  ${flexbox}
  ${space}
  ${layout}
  ${typography}
  ${border}
  ${color}
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    margin-right: ${({ theme }) => theme.space[0]};
  }
`;

 InnerBox.defaultProps = {
  marginRight: 5,
  borderBottom:"solid 1px",
  flexGrow: 1,
  marginTop: 3
}  

export default InnerBox;