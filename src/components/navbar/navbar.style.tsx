import styled from "styled-components"

const HeaderWrapper = styled.header`
  position: relative;
  z-index: 99999;
  transition: 0.25s ease-in-out;
`

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 30px 75px;
  background-color: #fff;
  transition: 0.25s ease-in-out;
  @media (max-width: 1400px) {
    padding: 25px 45px;
  }
  @media (max-width: 990px) {
    padding: 15px 25px;
  }
  @media (max-width: 575px) {
    padding: 3px 15px;
  }
`

export const Logo = styled.div`
  margin-right: 50px;
  flex-shrink: 0;
  @media (max-width: 990px) {
    margin: 0 25px;
  }
  @media (max-width: 575px) {
    max-width: 90px;
  }
  img {
    display: block;
    max-width: 10rem;
  
`
export const MenuWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  @media (max-width: 990px) {
    display: none;
  }
`
export const MenuItemWrapper = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
`

export const MenuItem = styled.li`
  margin: 0 20px;
  list-style: none;
  a {
    padding: 5px 10px;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSizes[2]};
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
  @media (min-width: 991px) {
    display: none;
  }
`

export const DrawerContentWrapper = styled.div`
  .mobile-menu {
    display: block;
    padding-top: 60px;
    li {
      margin: 0 0 38px 0;
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
