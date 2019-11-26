import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 72.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`

export default GlobalStyles
