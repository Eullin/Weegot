import styled from "styled-components"
import { color, ColorProps } from "styled-system"

const TextWrapper = styled.div<ColorProps>`
  max-width: 100%;
  margin: 2rem auto;
  padding: 0 1.5rem;
  ${color}
  h2 {
    padding-bottom: 0.5rem;
  }
  span {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 40px;
    line-height: ${({ theme }) => theme.lineHeights.normalText};
    @media (max-width: 990px) {
      margin-bottom: 30px;
      line-height: 2rem;
    }
    @media (max-width: 767px) {
      font-size: 1rem;
      margin-bottom: 25px;
      line-height: 1.5rem;
    }
  }
`

export default TextWrapper
