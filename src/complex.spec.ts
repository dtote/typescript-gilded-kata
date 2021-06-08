import { Complex } from "./complex"

describe("Complex", () => {
  it("adds two complex numbers", () => {
    const c1 = new Complex(1, 2)
    const c2 = new Complex(3, 4)

    const result = c1.add(c2)

    expect(result).toEqual(new Complex(4, 6))
  })

  it("subtracts two complex numbers", () => {
    const c1 = new Complex(1, 2)
    const c2 = new Complex(3, 4)

    const result = c1.subtract(c2)

    expect(result).toEqual(new Complex(-2, -2))
  })

  it("multiplies two complex numbers", () => {
    const c1 = new Complex(3, 2)
    const c2 = new Complex(1, 4)

    const result = c1.multiply(c2)

    expect(result).toEqual(new Complex(-5, 14))
  })

  it("can instantiate a zero complex", () => {
    const zero = Complex.zero()

    expect(zero).toEqual(new Complex(0, 0))
  })

  it("has a maximum complex number", () => {
    expect(Complex.MAX_COMPLEX).toBeDefined()
  })
})
