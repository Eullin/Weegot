import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated, config } from "react-spring"

import Brand from "./brand"
import BurgerMenu from "./burguerMenu"
import CollapseMenu from "./collapseMenu"

const MenuItems = [
  {
    label: "FAQ",
    url: "/FAQ",
  },
  {
    label: "Weegot Help",
    url: "/weegot-help",
  },
  {
    label: "Contacto",
    url: "/contacto",
  },
]

const Navbar = (props: any) => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  })

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  })

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          {MenuItems.map((item, index) => (
            <NavLinks style={linkAnimation}>
              <Link to={item.url} key={index}>{item.label}</Link>
            </NavLinks>
          ))}
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.onClick}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.onClick}
      />
    </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.white};
  z-index: 1;
  font-size: 1.4rem;
`

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: ${({ theme }) => theme.colors.secondaryBrand};
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`
