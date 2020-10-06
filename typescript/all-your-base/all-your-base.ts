export default class Converter {
    convert(digits: number[], fromBase: number, toBase: number): number[] {
        return digits.reduce((acc, curr, i) => {
            acc += curr * (Math.pow(toBase, i))
            return acc
        }, 0)
    }
}

// För alla siffror: siffra[i] * (längd - i) ^ base