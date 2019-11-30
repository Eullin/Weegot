import styled from "styled-components"
<<<<<<< Updated upstream
=======
import { flexbox, FlexboxProps } from "styled-system"
>>>>>>> Stashed changes

export const ImgContainer = styled.div`
  margin: 2rem auto;
`

<<<<<<< Updated upstream
export const Container = styled.div``
=======
export const Container = styled.div<FlexboxProps>`
  display: flex;
  flex-direction: column;
  ${flexbox}
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
>>>>>>> Stashed changes

export const Title = styled.span`
  padding: 2rem 2rem 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
`
