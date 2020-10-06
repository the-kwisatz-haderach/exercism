export default class Series {
    readonly digits: number[]

    constructor(series: string) {
        this.digits = Series.parse(series)
    }

    private static parse([...series]: string): number[] {
        return series.map(Number)
    }

    slices(length: number): number[][] {
        if (length > this.digits.length) {
            throw new Error('Not enough digits to slice.')
        }

        const slices: number[][] = []
        for (let sliceIndex = 0; sliceIndex + length <= this.digits.length; sliceIndex++) {
            const slice = this.digits.slice(sliceIndex, sliceIndex + length)
            slices.push(slice)
        }

        return slices
    }
}