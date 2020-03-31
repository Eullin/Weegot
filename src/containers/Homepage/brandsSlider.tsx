import React, { useState, useEffect } from "react"
import { Box, Slider } from "./homepage.styles"
import Heading from "../../components/Heading"

const BrandsSlider = () => {
  const [brands, setBrands] = useState([
    "https://via.placeholder.com/80x80.png?text=1",
    "https://via.placeholder.com/80x80.png?text=2",
    "https://via.placeholder.com/80x80.png?text=3",
    "https://via.placeholder.com/80x80.png?text=4",
    "https://via.placeholder.com/80x80.png?text=5",
    "https://via.placeholder.com/80x80.png?text=6",
    "https://via.placeholder.com/80x80.png?text=7",
    "https://via.placeholder.com/80x80.png?text=8",
  ])

  useEffect(() => {
    setTimeout(() => {
      const brandsCopy = [...brands]
      brandsCopy.push(brandsCopy.shift())
      setBrands(brandsCopy)
    }, 1000)
  }, [brands])

  return (
    <Box>
      <Heading as="h2" width={1}>
        Trabajamos con tu marca preferida
      </Heading>
      <Slider><ul
      style={{ display: "flex", flexDirection: "row", listStyleType: "none" }}
      >
      {brands.map(img => (
      <li key={img}>
      <img src={img} />
      </li>
      ))}
      </ul></Slider>
    </Box>
  )
}

export default BrandsSlider
