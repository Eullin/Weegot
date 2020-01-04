import React from "react"
import { Link } from "gatsby"
import { FiInstagram } from "react-icons/fi"
import styled from "styled-components"

const Container = styled.div`
color: ${({ theme }) => theme.colors.white}
  display: flex;
  flex-direction: column;
  max-height: 200px;
  background-color: ${({ theme }) => theme.colors.secondaryBrand};
  padding: 3rem;
  text-align: center;
    a {
    padding: 2rem;
    padding-bottom: 20px;
    color: ${({ theme }) => theme.colors.white}
    text-decoration: none;
  }
`

const Box = styled.div`
  display: flex;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoints[4]}) {
    flex-direction: column;
    align-items: center;
    span {
      padding: 10px 0;
    }
    a: first-child {
      padding-top: 20px 0;
      padding-bottom: 10px 0;
    }
    a {
      padding: 10px 0;
    }
  }
`

const Icon = styled.div`
  text-align: center;
  padding-bottom: 10px;
`

const Footer = () => (
  <Container>
    <Icon>
      <a target="_blank" href="https://www.instagram.com/weegot.us/?hl=en">
        <FiInstagram size="1.8em" />
      </a>
    </Icon>
    <Box>
      <a href="tel:+13054009180">(305) 400-9180</a>
      <a
        target="_blank"
        href="https://www.google.com/maps/dir//weegot/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88d9b963376aaaab:0x88e520bb119b134d?sa=X&ved=2ahUKEwjCkrD_4t3mAhVpkIsKHXLdBzAQ9RcwDHoECA0QEA"
      >
        2678 NW 97th Ave, Doral, FL 33172, USA
      </a>
      <Link to="/page-two">Privacy Policy</Link>
    </Box>
  </Container>
)

export default Footer
