import { pricify } from "./pricify"

describe("takes in a price, rounding the number to keep only two decimals ", () => {
  it("takes in a number and returns a string", () => {
    expect(typeof pricify(200)).toEqual("string")
    expect(typeof pricify(200)).not.toEqual("number")
  })

  it("takes in a number and returns a number", () => {
    expect(typeof pricify(200, true)).toEqual("number")
    expect(typeof pricify(200, true)).not.toEqual("string")
  })

  it("takes in a price and returns a decimal price", () => {
    expect(pricify(200)).toEqual("2.00")
  })
})
