import React from "react"
import { space } from "styled-system"
import { useStaticQuery, graphql } from "gatsby"
import { Container, LogoWrapper, ItemsWrapper } from "./header.style"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteLogoQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <LogoWrapper>
          <img src={data.site.siteMetadata.logo} />
          <span>Weegot</span>
        </LogoWrapper>
        <ItemsWrapper>
          <ul>
            <li>Asesoría</li>
            <li>Asesoría</li>
            <li>Asesoría</li>
          </ul>
        </ItemsWrapper>
      </Container>
    </>
  )
}

export default Header
