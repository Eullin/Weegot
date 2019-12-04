import { ParamHTMLAttributes } from 'react';
import { TypographyProps, typography, space, SpaceProps, color } from 'styled-system';
import styled from 'styled-components';

export type ParagraphProps = TypographyProps &
  SpaceProps &
  ParamHTMLAttributes<HTMLParagraphElement>;

const Paragraph = styled.p.attrs<ParagraphProps>(props => ({
  mb: 3,
  'data-testid': 'paragraph',
  ...props,
}))<ParagraphProps>`
  ${typography}
  ${space}
  ${color}
`;

export default Paragraph;
