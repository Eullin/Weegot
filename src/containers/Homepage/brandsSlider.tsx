import React, { useState, useEffect } from "react"
import { Box, Slider } from "./homepage.styles"
import Heading from "../../components/Heading"
import bmw from '../../images/brands/bmw.png'
import audi from '../../images/brands/audi.png'
import chevrolet from '../../images/brands/chevrolet.png'
import honda from '../../images/brands/honda.png'
import lexus from '../../images/brands/lexus.png'
import toyota from '../../images/brands/toyota.png'
import nissan from '../../images/brands/nissan.png'
import mercedes from '../../images/brands/mercedes.png'

const BrandsSlider = () => {
  const [brands, setBrands] = useState([
    bmw,
    audi,
    chevrolet,
    honda,
    lexus,
    toyota,
    nissan,
    mercedes,
  ])

  useEffect(() => {
    setTimeout(() => {
      const brandsCopy = [...brands]
      brandsCopy.push(brandsCopy.shift())
      setBrands(brandsCopy)
    }, 2000)
  }, [brands])

  return (
    <Box>
      <Heading as="h2" width={1}>
        Trabajamos con tu marca preferida
      </Heading>
      <Slider>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyleType: "none",
          }}
        >
          {brands.map(img => (
            <li key={img}>
              <img src={img} />
            </li>
          ))}
        </ul>
      </Slider>
    </Box>
  )
}

export default BrandsSlider
