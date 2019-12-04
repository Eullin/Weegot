import styled from "styled-components"

const TextArea = styled.div`
  width: 870px;
  max-width: 100%;
  margin: 2rem auto;
  padding: 0 1.5rem;

  span {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textColor};
    margin-bottom: 40px;
    line-height: 2rem;
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



export default TextArea
