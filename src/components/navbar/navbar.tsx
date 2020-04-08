import React, { FC, Fragment, useEffect, useRef, useState, useMemo } from "react"
import { Link } from "gatsby"
import { IoIosSearch, IoIosClose } from "react-icons/io"
import { DrawerProvider } from "../drawer/drawerContext"
import Menu from "./menu"
import MobileMenu from "./mobileMenu"
import HeaderWrapper, { NavbarWrapper, Logo, MenuWrapper } from "./navbar.style"
import LogoImage from "../../images/weegot-logo.png"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

type NavbarProps = {
  className?: string
}

const MenuItems = [
  {
    label: "Application Form",
    url: "/application-form",
  },
  {
    label: "Contacto",
    url: "/",
  },
]

const Navbar: FC<NavbarProps> = ({ className }) => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  console.log(hideOnScroll);
  
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    false,
    false,
    300
  )
  return useMemo(
    () => (
      <HeaderWrapper show={hideOnScroll}>
        <NavbarWrapper show={hideOnScroll}>
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
  ),
  [hideOnScroll]
  )
}

export default Navbar
