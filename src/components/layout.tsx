import React, { ReactChildren, FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Header from "./header/header"
import theme from "../theme"
import GlobalStyle from "../styles/Global"

interface LayoutProps {
  children: ReactChildren
}

const Layout: FC<LayoutProps> = ({ children }) => {
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>Footer</footer>
        </div>
      </>
    </ThemeProvider>
  )
}

export default Layout
