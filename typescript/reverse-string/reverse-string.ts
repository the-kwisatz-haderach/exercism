class ReverseString {
    static reverse = ([...string] = ''): string => string
        .reduce((reversedStr, letter) => reversedStr = letter + reversedStr, '')
}

export default ReverseString
