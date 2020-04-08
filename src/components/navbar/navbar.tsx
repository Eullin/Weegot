import React, { FC, Fragment, useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import { IoIosSearch, IoIosClose } from "react-icons/io"
import { DrawerProvider } from "../drawer/drawerContext"
import Menu from "./menu"
import MobileMenu from "./mobileMenu"
import HeaderWrapper, { NavbarWrapper, Logo, MenuWrapper } from "./navbar.style"
import LogoImage from "../../images/weegot-logo.png"
import Flex from "../Flex"

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
  /*   const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  console.log(ref)
  const [state, setState] = useState({
    toggle: false,
  })

   const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top <= 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []); */

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
