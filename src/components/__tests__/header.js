import React from "react"
import { render } from "@testing-library/react"
import Header from '../header'

test("Displays the correct title", () => {
  const { getByTestId } = render(<Header />)
  // Assertion
  expect(getByTestId("header")).toMatchSnapshot()
  // --> Test will pass
})