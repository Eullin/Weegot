import React, { ReactChildren, FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import theme from "../theme"
import GlobalStyle from "../styles/Global"
import NavBar from "../components/navbar/navbar"

const Layout: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <NavBar />
        <div>
          <main>{children}</main>
          <footer>Footer</footer>
        </div>
      </>
    </ThemeProvider>
  )
}

export default Layout
