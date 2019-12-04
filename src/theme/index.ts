import colors from "./colors"

const space = [0, 4, 8, 16, 32, 64]


export default {
  breakpoints: ['576px', '768px', '991px', '1220px'],
  fontSizes: ['16px', '18x', '25px', '32px', '45px', '50px'],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontFamily: ["Roboto,sans-serif"],
  lineHeights: {
    normal: 1,
    normalText: 1.5,
    title: 2,
    text: 2,
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em",
  },
  borders: [
    0,
    "1px solid",
    "2px solid",
    "3px solid",
    "4px solid",
    "5px solid",
    "6px solid",
  ],
  radii: [3, 4, 5, 10, 20, 30, 60, 120, "50%"],
  widths: [36, 40, 45, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 48, 50, 55, 70, 80, 120, 230],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  space,
  colors,
}
