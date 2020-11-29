export default class ISBN {
  private sequence: string

  constructor(sequence: string) {
    this.sequence = sequence.toLowerCase().replace(/[^\dx]/g, '')
  }

  isValid(): boolean {
    if (this.sequence.length !== 10) return false

    const chars = this.sequence.slice(0, 9).replace(/[^\d]/, '')

    if (chars.length !== 9) return false

    const checkChar = this.sequence[9] === 'x' ? '10' : this.sequence[9]

    return (
      [...chars, checkChar]
        .map(Number)
        .reduce<number>((sum, x, i) => sum + x * (10 - i), 0) %
        11 ===
      0
    )
  }
}
