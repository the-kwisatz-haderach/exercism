export default class Anagram {
  readonly word: string

  constructor(word: string) {
    this.word = word
  }

  matches(...candidates: string[]): string[] {
    const normalizedWord = Anagram.normalize(this.word)

    return candidates.filter(
      (candidate) =>
        candidate.toLowerCase() !== this.word.toLowerCase() &&
        Anagram.normalize(candidate) === normalizedWord
    )
  }

  private static normalize(word: string): string {
    return [...word.toLowerCase()].sort().join('')
  }
}
