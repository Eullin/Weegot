import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

import Hero from '../../components/hero'
import Button from '../../components/button'
import { HeroImg } from './homepage.styles'

const Homepage = () => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "car.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
        <>
            <Hero>
            <HeroImg>
                <Img fluid={data.file.childImageSharp.fluid} />
            </HeroImg>
            </Hero>
            <Button>Contáctanos</Button>
        </>
    )
}


export default Homepage;
