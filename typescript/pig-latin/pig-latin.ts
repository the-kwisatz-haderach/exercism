export default class PigLatin {
  private static readonly vowelSoundPattern = /([aeiou]|xr|yt)+/i
  private static readonly consonantSoundPattern = /([bcdfghjklmnprstvwxy]|th|qu?)+/i

  static translate(word: string): string {
    return word.split(/\s+/g).map(PigLatin.translateWord).join(' ')
  }

  private static translateWord(word: string): string {
    const vowelMatch = word.match(PigLatin.vowelSoundPattern)
    if (vowelMatch?.index === 0) {
      return `${word}ay`
    }

    const consonantMatch = word.match(PigLatin.consonantSoundPattern)
    if (consonantMatch?.index === 0) {
      if (word.length === 2 && word[1] === 'y') {
        return `y${word[0]}ay`
      }
      return word.slice(consonantMatch[0].length) + `${consonantMatch[0]}ay`
    }

    return word
  }
}
