import styled from "styled-components"

type NavBarProps = { show: boolean }

const Navbar = styled.header`
  background-color: white;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const HeaderWrapper = styled(Navbar)<NavBarProps>`
  transition: all 200ms ${props => (props.show ? "ease-in" : "ease-out")};
  border-bottom: ${props => (props.show ? "" : "solid 1px rgba(0, 0, 0, 0.2)")};
`

export const NavbarWrapper = styled.div<NavBarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 75px;
  background-color: #fff;
  transition: 0.25s ease-in-out;
  @media (max-width: ${({ theme }) => theme.breakpoints[3]}) {
    padding: 25px 45px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 2rem 3rem 1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    padding: 2rem 3rem 1rem;
  }
`

export const Logo = styled.div`
  margin-right: 50px;
  flex-shrink: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin: 0 25px;
  }
  @media (max-width: 575px) {
    max-width: 90px;
  }
  img {
    display: block;
    max-width: 10rem;
  }
`
export const MenuWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  @media (max-width: ${({ theme }) => theme.breakpoints[2]}) {
    display: none;
  }
`
export const MenuItemWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: left;
  margin-left: auto;
  margin-top: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints[2]}) {
    flex-direction: column;
  }
`

export const MenuItem = styled.li`
  margin: 7px 20px;
  list-style: none;
  a {
    text-decoration: none;
    padding: 5px 10px;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSizes[6]};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    color: ${({ theme }) => theme.colors.secondaryBrand};
    transition: 0.15s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.brandAutos};
    }
    &.active-link {
      color: ${({ theme }) => theme.colors.brandAutos};
      font-weight: ${({ theme }) => theme.fontWeights[2]};
    }
  }
`
export const MobileMenuWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    display: none;
  }
`

export const DrawerContentWrapper = styled.div`
  .mobile-menu {
    display: block;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    li {
      margin: 10px 0 38px 0;
      a {
        display: block;
        position: relative;
        padding-left: 30px;
        padding-right: 30px;
        &.active-link {
          &:before {
            opacity: 1;
          }
        }
        &:before {
          content: "";
          position: absolute;
          width: 3px;
          height: 18px;
          top: 50%;
          left: 0;
          opacity: 0;
          background: #292929;
          transform: translateY(-50%);
        }
      }
    }
  }
`

export const DrawerHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
  padding: 3px 0;
`

export const DrawerLogo = styled.div`
  max-width: 110px;
  padding-left: 30px;
  img {
    max-width: 100%;
  }
`

export const DrawerClose = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  padding: 0 15px;
`

export const HamburgerIcon = styled.div`
  width: 30px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  span {
    display: block;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondaryBrand};
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
      width: 20px;
    }
  }
`
export default HeaderWrapper

/* 
export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 75px;
  background-color: #fff;
  transition: 0.25s ease-in-out;
  @media (max-width: ${({ theme }) => theme.breakpoints[3]}) {
    padding: 25px 45px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 15px 25px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    padding: 3px 15px;
  }
`
*/
