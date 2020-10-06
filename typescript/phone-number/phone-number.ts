export default class PhoneNumber {
  private static countryCode = '1'
  private readonly phoneNumber: string

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber
  }

  number(): string | undefined {
    const normalizedNumber = this.phoneNumber.replace(/\W+/g, '')

    if (normalizedNumber.match(/[a-zA-Z]/)) {
      return undefined
    }

    switch (normalizedNumber.length) {
      case 11:
        return PhoneNumber.isValidCountryCode(normalizedNumber)
          ? normalizedNumber.slice(1)
          : undefined
      case 10:
        return normalizedNumber
    }
  }

  private static isValidCountryCode(phoneNumber: string): boolean {
    return phoneNumber[0] === PhoneNumber.countryCode
  }
}
