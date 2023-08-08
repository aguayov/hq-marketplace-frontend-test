import React from "react"
import { render } from "@testing-library/react"

import { Button } from "."

describe("button test component", () => {
  it("renders a button with default styles", () => {
    const { container } = render(<Button kind="" />)
    const button = container.firstChild
    expect(button.className).toContain("")
    const buttonStyles = getComputedStyle(container.firstChild)

    expect(buttonStyles.display).toEqual("inline-block")
    expect(buttonStyles.textDecoration).toEqual("none")
    expect(buttonStyles.border).toEqual("")
    expect(buttonStyles.width).toEqual("")
    expect(buttonStyles.borderRadius).toEqual("5px")
    expect(buttonStyles.cursor).toEqual("pointer")
    expect(buttonStyles.padding).toEqual("8px 16px")
    expect(buttonStyles.fontSize).toEqual("")
    expect(buttonStyles.textAlign).toEqual("center")
    expect(buttonStyles.lineHeight).toEqual("1em")
    expect(buttonStyles.opacity).toEqual("1")
    expect(buttonStyles.transitionDuration).toEqual("0.3s")
    expect(buttonStyles.margin).toEqual("")
    expect(buttonStyles.boxShadow).toEqual("0 4px 4px -2px rgba(0,20,30,0.3)")

    // Defaults to ButtonFace (not found in search of application)
    // expect(buttonStyles.backgroundColor).toEqual("")

    // Defaults to ButtonText (located in index.css: (deprecated))
    // expect(buttonStyles.color).toEqual("")
  })

  it("renders a button with a kind=primary", () => {
    const { container } = render(<Button kind="primary" />)
    const button = container.firstChild
    expect(button.className).toContain("primary")
    const buttonStyles = getComputedStyle(container.firstChild)

    expect(buttonStyles.color).toEqual("white")
    expect(buttonStyles.backgroundColor).toEqual("rgb(179, 148, 100)")
  })

  it("renders a button with a kind=secondary", () => {
    const { container } = render(<Button kind="secondary" />)
    const button = container.firstChild
    expect(button.className).toContain("secondary")
    const buttonStyles = getComputedStyle(container.firstChild)

    expect(buttonStyles.padding).toEqual("10px 20px")
  })

  it("renders a button with a kind=gold", () => {
    const { container } = render(<Button kind="gold" />)
    const button = container.firstChild
    expect(button.className).toContain("gold")
    const buttonStyles = getComputedStyle(container.firstChild)

    // Computed style turns color values to rgb
    expect(buttonStyles.backgroundColor).toEqual("rgb(180, 149, 97)")
    expect(buttonStyles.color).toEqual("white")
  })

  it("renders a button with a kind=green", () => {
    const { container } = render(<Button kind="green" />)
    const button = container.firstChild
    expect(button.className).toContain("green")
    const buttonStyles = getComputedStyle(container.firstChild)

    // Computed style turns color values to rgb
    expect(buttonStyles.backgroundColor).toEqual("rgb(68, 164, 95)")
    expect(buttonStyles.color).toEqual("white")
  })

  it("renders a button with kind=blue", () => {
    const { container } = render(<Button kind="blue" />)
    const button = container.firstChild
    expect(button.className).toContain("blue")
    const buttonStyles = getComputedStyle(container.firstChild)

    // Computed style turns color values to rgb
    expect(buttonStyles.backgroundColor).toEqual("rgb(0, 102, 153)")
    expect(buttonStyles.color).toEqual("white")
  })

  it("renders a button with kind=black", () => {
    const { container } = render(<Button kind="black" />)
    const button = container.firstChild
    expect(button.className).toContain("black")
    const buttonStyles = getComputedStyle(container.firstChild)

    // Computed style turns color values to rgb
    expect(buttonStyles.backgroundColor).toEqual("rgb(0, 20, 30)")
    expect(buttonStyles.color).toEqual("white")
  })

  it("renders a button with kind=red", () => {
    const { container } = render(<Button kind="red" />)
    const button = container.firstChild
    expect(button.className).toContain("red")
    const buttonStyles = getComputedStyle(container.firstChild)

    // Computed style turns color values to rgb
    expect(buttonStyles.backgroundColor).toEqual("rgb(224, 99, 99)")
    expect(buttonStyles.color).toEqual("white")
  })

  it("renders a button with kind=shadow", () => {
    const { container } = render(<Button kind="shadow" />)
    const button = container.firstChild
    expect(button.className).toContain("shadow")
    const buttonStyles = getComputedStyle(container.firstChild)

    expect(buttonStyles.boxShadow).toEqual("0 4px 4px -2px rgba(0,20,30,0.2)")
  })
  it("renders a button with kind=popoutSecondary", () => {
    const { container } = render(<Button kind="popoutSecondary" />)
    const button = container.firstChild
    expect(button.className).toContain("popoutSecondary")
    const buttonStyles = getComputedStyle(container.firstChild)

    // Computed style turns color values #3F4F58 to rgb
    expect(buttonStyles.color).toEqual("rgb(63, 79, 88)")
    // Computed style turns color values #FFFFFF to rgb
    expect(buttonStyles.background).toEqual("rgb(255, 255, 255)")
    expect(buttonStyles.padding).toEqual("5px 15px")
    expect(buttonStyles.width).toEqual("100%")
  })

  it("renders a button with kind=b", () => {
    const { container } = render(<Button kind="b" />)
    const button = container.firstChild
    expect(button.className).toContain("b")
    const buttonStyles = getComputedStyle(container.firstChild)

    expect(buttonStyles.fontWeight).toEqual("bold")
  })

  it("renders a button with kind=outline", () => {
    const { container } = render(<Button kind="outline"></Button>)
    const button = container.firstChild
    expect(button.className).toContain("outline")

    const buttonStyles = getComputedStyle(container.firstChild)
    expect(buttonStyles.background).toEqual("none")
    // Computed style turns color values to rgb
    expect(buttonStyles.color).toEqual("rgb(64, 79, 87)")
    expect(buttonStyles.background).toEqual("none")
    expect(buttonStyles.border).toEqual("1px solid #f2f3f4")
  })

  it("renders a button with kind=outline white", () => {
    const { container } = render(<Button kind="outline white"></Button>)
    const button = container.firstChild
    expect(button.className).toContain("outline")

    const buttonStyles = getComputedStyle(container.firstChild)
    expect(buttonStyles.background).toEqual("none")
    // Computed style turns color values #FAFAFA to rgb
    expect(buttonStyles.color).toEqual("rgb(250, 250, 250)")
    expect(buttonStyles.border).toEqual("1px solid #fafafa")
  })

  it("renders a button with kind=outline primary", () => {
    const { container } = render(<Button kind="outline primary"></Button>)
    const button = container.firstChild
    expect(button.className).toContain("outline primary")

    const buttonStyles = getComputedStyle(container.firstChild)
    expect(buttonStyles.background).toEqual("none")
    // Computed style turns color values #B39464 to rgb
    expect(buttonStyles.color).toEqual("rgb(179, 148, 100)")
    expect(buttonStyles.border).toEqual("1px solid #b39464")
  })

  it("renders a button with kind=outline guide", () => {
    const { container } = render(<Button kind="outline guide"></Button>)
    const button = container.firstChild
    expect(button.className).toContain("outline guide")

    const buttonStyles = getComputedStyle(container.firstChild)
    expect(buttonStyles.padding).toEqual("8px 32px")
    expect(buttonStyles.marginRight).toEqual("16px")
  })

  it("renders a button with kind=outline short", () => {
    const { container } = render(<Button kind="outline short"></Button>)
    const button = container.firstChild
    expect(button.className).toContain("outline short")

    const buttonStyles = getComputedStyle(container.firstChild)
    expect(buttonStyles.padding).toEqual("8px 32px")
  })

  it("renders a button with kind=absolute", () => {
    const { container } = render(<Button kind="absolute" />)
    const button = container.firstChild
    expect(button.className).toContain("absolute")
    const buttonStyles = getComputedStyle(container.firstChild)

    expect(buttonStyles.position).toEqual("absolute")
    expect(buttonStyles.top).toEqual("8px")
    expect(buttonStyles.left).toEqual("12px")
  })

  it("renders a button with kind=transparent", () => {
    const { container } = render(<Button kind="transparent" />)
    const button = container.firstChild
    expect(button.className).toContain("transparent")
    const buttonStyles = getComputedStyle(container.firstChild)

    expect(buttonStyles.background).toEqual("transparent")
    expect(buttonStyles.boxShadow).toEqual("none")
  })

  it("renders a button with kind=emoji", () => {
    const { container } = render(<Button kind="emoji" />)
    const button = container.firstChild
    expect(button.className).toContain("emoji")
    const buttonStyles = getComputedStyle(container.firstChild)

    expect(buttonStyles.boxShadow).toEqual("none")
    expect(buttonStyles.background).toEqual("transparent")
    expect(buttonStyles.borderRadius).toEqual("50%")
    expect(buttonStyles.border).toEqual("1px solid transparent")
    expect(buttonStyles.padding).toEqual("16px")
  })

  it("renders a button with a prop margin for a default override", () => {
    const { container } = render(<Button kind="primary" margin="0 8px" />)
    const button = container.firstChild
    expect(button.className).toContain("primary")
    const buttonStyles = getComputedStyle(container.firstChild)

    expect(buttonStyles.margin).toEqual("0px 8px")
  })

  it("renders a button with a prop border for a default override", () => {
    const { container } = render(<Button kind="" border="2px solid black" />)
    const button = container.firstChild
    expect(button.className).toContain("")
    const buttonStyles = getComputedStyle(container.firstChild)

    // Test fails with a border prop
    expect(buttonStyles.border).toEqual("2px solid black")
  })

  it("renders a button with a prop width does not override the style width in popoutSecondary", () => {
    const { container } = render(<Button kind="popoutSecondary" width="90%" />)
    const button = container.firstChild
    expect(button.className).toContain("popoutSecondary")
    const buttonStyles = getComputedStyle(container.firstChild)

    expect(buttonStyles.width).toEqual("100%")
  })

  it("renders a button with a prop boxShadow to override", () => {
    const { container } = render(
      <Button kind="" shadow="0 4px 4px -2px rgba(0, 20, 30, 0.2)" />
    )
    const button = container.firstChild
    expect(button.className).toContain("")
    const buttonStyles = getComputedStyle(container.firstChild)

    expect(buttonStyles.boxShadow).toEqual("0 4px 4px -2px rgba(0,20,30,0.2)")
  })

  it("renders a button with a prop boxShadow and a shadow kind prop", () => {
    const { container } = render(
      <Button kind="shadow" shadow="0 4px 4px -2px rgba(0, 20, 30, 0.4)" />
    )
    const button = container.firstChild
    expect(button.className).toContain("shadow")
    const buttonStyles = getComputedStyle(container.firstChild)

    expect(buttonStyles.boxShadow).toEqual("0 4px 4px -2px rgba(0,20,30,0.2)")
  })
})
