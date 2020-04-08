import React, { FC, createContext, useState } from "react"

interface IDrawerType {
  isOpen: boolean;
  toggle: () => void;
}

export const DrawerContext = createContext<IDrawerType>({
  isOpen: false,
  toggle: () => {},
})

export const DrawerProvider: FC = ( props ) => {
  const [isOpen, setIsOpen] = useState(false)

const toggle = () => setIsOpen(prevProps => !prevProps)

  const value = {
    isOpen,
    toggle,
  }

  return (
    <DrawerContext.Provider value={value} {...props} />
  )
}
