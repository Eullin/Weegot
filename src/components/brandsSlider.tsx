import React, { useState, useEffect } from "react"

const BrandSlider = () => {
  const [brands, setBrands] = useState([
    "https://via.placeholder.com/40x40.png?text=1",
    "https://via.placeholder.com/40x40.png?text=2",
    "https://via.placeholder.com/40x40.png?text=3",
    "https://via.placeholder.com/40x40.png?text=4",
    "https://via.placeholder.com/40x40.png?text=5",
  ])

  useEffect(() => {
    setTimeout(() => {
      const brandsCopy = [...brands]
      brandsCopy.push(brandsCopy.shift())
      setBrands(brandsCopy)
    }, 1000)
  }, [brands])

  return (
    <ul
      style={{ display: "flex", flexDirection: "row", listStyleType: "none" }}
    >
      {brands.map(img => (
        <li key={img}>
          <img src={img} />
        </li>
      ))}
    </ul>
  )
}

export default BrandSlider
