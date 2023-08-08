import React from "react"
import { render } from "@testing-library/react"
import { colors } from "utils"

import Flex from "./Flex"

describe("Flex component test no props", () => {
  it("default styles with no props", () => {
    const { container } = render(<Flex />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.display).toEqual("flex")
    expect(stylesFlex.flexDirection).not.toEqual("column")

    // flexDirection should equal "row" but failed
    // updated Flex.js line 6 to reflect the passing expectation
    // referring to Line 25 in Flex.js
    expect(stylesFlex.flexDirection).toEqual("row")

    expect(stylesFlex.justifyContent).toEqual("space-between")
    expect(stylesFlex.flexWrap).toEqual("nowrap")
    expect(stylesFlex.alignItems).toEqual("center")
  })
})
describe("Flex component props with passed in props", () => {
  it("styles with width prop", () => {
    const width = "100%"
    const { container } = render(<Flex width={width} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.width).toEqual("100%")
  })
  it("styles with justify prop", () => {
    const justify = "space-around"
    const { container } = render(<Flex justify={justify} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.justifyContent).toEqual("space-around")
  })
  it("styles with align prop", () => {
    const align = "flex-start"
    const { container } = render(<Flex align={align} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.alignItems).toEqual("flex-start")
  })
  it("styles with column boolean prop", () => {
    const { container } = render(<Flex column />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.flexDirection).toEqual("column")
  })
  it("styles with flexWrap prop", () => {
    const flexWrap = "wrap-reverse"
    const { container } = render(<Flex flexWrap={flexWrap} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.flexWrap).toEqual("wrap-reverse")
  })
  it("styles with flexGrow prop", () => {
    const flexGrow = "3"
    const { container } = render(<Flex flexGrow={flexGrow} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.flexGrow).toEqual("3")
  })
  it("styles with height prop", () => {
    const height = "420px"
    const { container } = render(<Flex height={height} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.height).toEqual("420px")
  })
  it("styles with padding prop", () => {
    const padding = "2px"
    const { container } = render(<Flex padding={padding} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.padding).toEqual("2px")
  })
  it("styles with margin prop", () => {
    const margin = "2px"
    const { container } = render(<Flex margin={margin} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.margin).toEqual("2px")
  })
  it("styles with maxWidth prop", () => {
    const maxWidth = "3.5em"
    const { container } = render(<Flex maxWidth={maxWidth} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.maxWidth).toEqual("3.5em")
  })
  it("styles with minWidth prop", () => {
    const minWidth = "3.5em"
    const { container } = render(<Flex minWidth={minWidth} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.minWidth).toEqual("3.5em")
  })
  it("styles with maxHeight prop", () => {
    const maxHeight = "3.5em"
    const { container } = render(<Flex maxHeight={maxHeight} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.maxHeight).toEqual("3.5em")
  })
  it("styles with minHeight prop", () => {
    const minHeight = "3.5em"
    const { container } = render(<Flex minHeight={minHeight} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.minHeight).toEqual("3.5em")
  })
  it("styles with background prop", () => {
    const background = colors.gold100
    const { container } = render(<Flex background={background} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.background).toEqual("rgb(179, 148, 100)")
  })
  it("styles with border prop", () => {
    const border = "1px solid #B39464"
    const { container } = render(<Flex border={border} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.border).toEqual("1px solid #b39464")
  })
  it("styles with borderRadius prop", () => {
    const borderRadius = "5px"
    const { container } = render(<Flex borderRadius={borderRadius} />)
    const styledFlexdiv = container.firstChild
    const stylesFlex = getComputedStyle(styledFlexdiv)

    expect(stylesFlex.borderRadius).toEqual("5px")
  })
})
