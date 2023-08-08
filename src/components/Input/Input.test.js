import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import Input from "./Input"

describe("Input component styles test", () => {
  it("default styles for LabelStyled ", () => {
    const { container } = render(<Input />)
    const labelStyled = container.firstChild
    const labelStyles = getComputedStyle(labelStyled)

    expect(labelStyles.background).toEqual("rgb(245, 245, 245)")
    expect(labelStyles.fontSize).toEqual("14px")
    expect(labelStyles.fontWeight).toEqual("bold")
    expect(labelStyles.padding).toEqual("5px")
    expect(labelStyles.borderBottom).toEqual("2px solid #dcdcdc")
    expect(labelStyles.marginBottom).toEqual("20px")
    expect(labelStyles.width).toEqual("100%")
    expect(labelStyles.color).toEqual("rgb(63, 79, 88)")
  })
  it("prop styles for LabelStyled test", () => {
    const { container } = render(
      <Input marginBottom={"50px"} width={"350px"} />
    )
    const labelStyled = container.firstChild
    const labelStyles = getComputedStyle(labelStyled)

    expect(labelStyles.marginBottom).toEqual("50px")
    expect(labelStyles.width).toEqual("350px")

    expect(labelStyles.marginBottom).not.toEqual("20px")
    expect(labelStyles.width).not.toEqual("")
  })

  it("prop styles for InputStyled test", () => {
    const { container } = render(<Input width={"350px"} />)
    const labelStyled = container.firstChild
    const inputStyled = labelStyled.firstChild
    const inputStyles = getComputedStyle(inputStyled)

    expect(inputStyles.border).toEqual("")
    expect(inputStyles.width).toEqual("100%")
    expect(inputStyles.background).toEqual("rgb(245, 245, 245)")
    expect(inputStyles.fontSize).toEqual("16px")
    expect(inputStyles.lineHeight).toEqual("24px")
    expect(inputStyles.color).toEqual("black")
    expect(inputStyles.fontWeight).toEqual("normal")
  })
})

describe("Prop values are passed to each part of the component", () => {
  it("className prop is passed to Label", () => {
    const { container } = render(
      <Input className={"class_test"} label={"label_test"} />
    )

    const label = screen.getByLabelText(/label_test/i)
    expect(label.className).toContain("class_test")
  })

  it("className prop is passed to Input", () => {
    const { container } = render(
      <Input className={"class_test"} label={"label_test"} />
    )

    const inputBox = screen.getByRole("textbox", { name: "label_test" })

    expect(inputBox.className).toContain("class_test")
    expect(inputBox.type).toEqual("text")
    expect(inputBox.label).not.toEqual("label_test")
  })

  it("input default prop is type: text is expected", () => {
    const { container } = render(
      <Input className={"class_test"} label={"label_test"} />
    )

    const inputBox = screen.getByRole("textbox", { name: "label_test" })

    expect(inputBox.type).toEqual("text")
  })

  it("label prop does pass to Input but shouldn't", () => {
    const { container } = render(
      <Input className={"class_test"} label={"label_test"} />
    )
    const inputBox = screen.getByRole("textbox", { name: "label_test" })
    expect(inputBox).toBeInTheDocument()
    // inputBox element returns in document with label="none"
    // <input
    //   class="class_test css-pntxdr-InputStyled eh4hk1y0"
    //   label="none"
    //   type="text"
    // />
  })
})
