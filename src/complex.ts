export class Complex {
  public static MAX_COMPLEX = new Complex(
    Number.MAX_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER,
  )

  static zero() {
    return new Complex(0, 0)
  }

  constructor(private real: number, private imaginary: number) {}

  add(other: Complex) {
    return new Complex(this.real + other.real, this.imaginary + other.imaginary)
  }

  subtract(other: Complex): Complex {
    return new Complex(this.real - other.real, this.imaginary - other.imaginary)
  }

  multiply(other: Complex): Complex {
    const real = this.real * other.real - this.imaginary * other.imaginary
    const imaginary = this.real * other.imaginary + this.imaginary * other.real

    return new Complex(real, imaginary)
  }
}
