import React, { ReactChildren, FC, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import theme from "../theme"
import GlobalStyle from "../styles/Global"
import NavBar from "../components/navbar/navbar"

interface LayoutProps {
  children: ReactChildren
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <NavBar navbarState={navbarOpen} onClick={handleNavbar} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: "8rem",
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
