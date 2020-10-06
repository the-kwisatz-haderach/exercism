export default class FlattenArray {
  static flatten = (array: any[]): any[] =>
    array.reduce<any[]>(
      (flattenedArray, arrayItem) =>
        arrayItem !== undefined && arrayItem !== null
          ? Array.isArray(arrayItem)
            ? [...flattenedArray, ...FlattenArray.flatten(arrayItem)]
            : [...flattenedArray, arrayItem]
          : flattenedArray,
      []
    )
}
