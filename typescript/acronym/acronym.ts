export default class Acronym {
  public static parse(phrase: string): string {
    return phrase
      .split(/\W+/)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .flatMap((word) => word.split(/[a-z]+/).map((word) => word[0]))
      .join('')
  }
}
