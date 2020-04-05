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
    label: "Application Form",
    url: "/application-form",
  },
  {
    label: "Contacto",
    url: "/page-2",
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
