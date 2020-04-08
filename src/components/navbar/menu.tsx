import React, { FC } from "react"
import { Link } from "gatsby"
import { MenuItemWrapper, MenuItem } from "./navbar.style"

type MenuProps = {
  items: MenuItemsProps[]
  className?: string
}

type MenuItemsProps = {
  url: string
  label: string
  external?: boolean
}

const Menu: FC<MenuProps> = ({ items, className, ...props }) => {

  return (
    <MenuItemWrapper>
      {items.map((item, index) => (
        <MenuItem key={index}>
          {item.external ? (
            <a href={item.url}>{item.label}</a>
          ) : (
            <Link to={item.url} activeClassName="active-link">
              {item.label}
            </Link>
          )}
        </MenuItem>
      ))}
    </MenuItemWrapper>
  )
}
export default Menu
