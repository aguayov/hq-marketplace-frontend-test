import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import "@testing-library/dom"
import { Text } from "components"

describe("Text component test block", () => {
  it("Text renders Title style component with kind=h1 ", () => {
    const kind = "h1"
    const className = "serif"
    const message = "Test H1"
    render(
      <Text kind={kind} className={className}>
        {message}
      </Text>
    )
    expect(screen.getByText("Test H1")).toBeInTheDocument()
    expect(screen.getByText("Test H1").className).toContain("h1")
    expect(screen.getByText("Test H1")).toHaveStyle("font-weight: bold")
    expect(screen.getByText("Test H1")).toHaveStyle("font-size: 32px")
    expect(screen.getByText("Test H1")).toHaveStyle("line-height: 48px")
  })
  it("Text renders Body styled component when not h1 ", () => {
    const kind = "f3"
    const color = "white"
    const message = "Test Body"
    render(
      <Text kind={kind} color={color}>
        {message}
      </Text>
    )
    expect(screen.getByText("Test Body")).toBeInTheDocument()
    expect(screen.getByText("Test Body").className).toContain(kind)
    expect(screen.getByText("Test Body")).toHaveStyle(
      "color: rgb(250, 250, 250)"
    )
    expect(screen.getByText("Test Body")).toHaveStyle("font-size: 18px")
    expect(screen.getByText("Test Body")).toHaveStyle("line-height: 1.4")
  })
})
