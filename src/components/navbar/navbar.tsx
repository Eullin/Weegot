import React, { useState, FC } from "react"
import { Link } from "gatsby"
import { IoIosSearch, IoIosClose } from "react-icons/io"
import { DrawerProvider } from "../drawer/drawerContext"
import Menu from "./menu"
import MobileMenu from "./mobileMenu"
import HeaderWrapper, { NavbarWrapper, Logo, MenuWrapper } from "./navbar.style"
import LogoImage from "../../images/weegot-logo.png"

type NavbarProps = {
  className?: string
}

const MenuItems = [
  {
    label: "FAQ",
    url: "/",
  },
  {
    label: "Weegot Help",
    url: "/",
  },
  {
    label: "Contacto",
    url: "/",
  },
]

const Navbar: FC<NavbarProps> = ({ className, ...props }) => {
  const [state, setState] = useState({
    toggle: false,
  })

  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    })
  }
  // Add all classs to an array
  const addAllClasses = ["header"]

  // className prop checking
  if (className) {
    addAllClasses.push(className)
  }
  return (
    <HeaderWrapper>
      <NavbarWrapper>
        <DrawerProvider>
          <MobileMenu items={MenuItems} logo={LogoImage} />
        </DrawerProvider>
        <Logo>
          <Link to="/">
            <img src={LogoImage} alt="logo" />
          </Link>
        </Logo>
        <MenuWrapper>
          <Menu items={MenuItems} />
        </MenuWrapper>
      </NavbarWrapper>
    </HeaderWrapper>
  )
}

export default Navbar

/* import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"

import Brand from "./brand"
import BurgerMenu from "./burguerMenu"
import CollapseMenu from "./collapseMenu"

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
          <NavLinks style={linkAnimation}>
            <a href="#">link n1</a>
            <a href="#">link n2</a>
            <a href="#">link n3</a>
            <a href="#">link n4</a>
          </NavLinks>
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
 */
