export default class Series {
  private readonly numberSequence: string
  private static readonly nonDigitPattern = /[^0-9]/
  private static readonly multiply = (acc: number, curr: number): number =>
    acc * curr

  constructor(numberSequence: string) {
    this.numberSequence = numberSequence
  }

  largestProduct(range: number): number {
    this.validateInput(range)

    let largestProduct = 0
    for (let i = 0; i <= this.numberSequence.length - range; i++) {
      const product = this.numberSequence
        .slice(i, i + range)
        .split('')
        .map(Number)
        .reduce<number>(Series.multiply, 1)

      if (product > largestProduct) {
        largestProduct = product
      }
    }
    return largestProduct
  }

  private validateInput(range: number): void {
    if (range < 0 || this.numberSequence.match(Series.nonDigitPattern)) {
      throw new Error('Invalid input.')
    }
    if (range > this.numberSequence.length) {
      throw new Error('Slice size is too big.')
    }
  }
}
