import React, { useContext, FC } from "react"
import { Link } from "gatsby"
import Drawer from "../drawer/drawer"
import { DrawerContext } from "../drawer/drawerContext"
import Menu from "./menu"
import {
  MobileMenuWrapper,
  DrawerContentWrapper,
  DrawerHead,
  DrawerLogo,
  DrawerClose,
  HamburgerIcon,
} from "./navbar.style"
import { FiX } from "react-icons/fi"

type MobileMenuProps = {
  items: any
  logo: string
}

const MobileMenu: FC<MobileMenuProps> = ({ items, logo, ...props }) => {
  const { isOpen, toggle } = useContext(DrawerContext)

/*   // Toggle drawer
  const toggleDrawer = () => {
    dispatch({
      type: "TOGGLE",
    })
  }
 */
  return (
    <MobileMenuWrapper {...props}>
      <Drawer
        width="285px"
        placement="left"
        drawerHandler={
          <HamburgerIcon>
            <span />
            <span />
            <span />
          </HamburgerIcon>
        }
        open={isOpen}
        toggleHandler={toggle}
      >
        <DrawerContentWrapper>
          <DrawerHead>
            <DrawerLogo>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </DrawerLogo>
            <DrawerClose onClick={toggle}>
              <FiX />
            </DrawerClose>
          </DrawerHead>
          <Menu items={items} className="mobile-menu" />
        </DrawerContentWrapper>
      </Drawer>
    </MobileMenuWrapper>
  )
}

export default MobileMenu
