import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./navbar/navbar"
import NavBar from "../components/navbar/navbar.jsx"

const Layout = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState("test")

  handleNavbar = () => {
    setNavbarOpen(true)
    console.log(setNavbarOpen)
  }

  console.log("state", navbarOpen)

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <NavBar navbarState={navbarOpen} onClick={() => handleNavbar} />
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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
