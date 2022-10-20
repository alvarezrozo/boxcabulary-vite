import shuffle from "./shuffle";

describe('Shuffle', () => {
  test('Should return an array with different items order', () => {
    const array = [1, 5, 6, 7, 8, {a: 'test'}]
    const shuffledArray = shuffle(array)

    expect(shuffledArray).not.toEqual(array)
  })

  test('Should return empty array if receive empty array', () => {
    const array: unknown[] = []
    const shuffledArray = shuffle(array)

    expect(shuffledArray).toEqual(array)
  })
})
