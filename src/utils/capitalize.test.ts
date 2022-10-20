import capitalize from "./capitalize";

describe('Capitalize', () => {
  test('Should remove spaces at beginning and end', () => {
    const textToCapitalize = '   Lorem ipsum     '

    const textCapitalized = capitalize(textToCapitalize)
    const expected = 'Lorem ipsum'

    expect(textCapitalized).toBe(expected)
  })

  test('Should replace the first char with its upper char', () => {
    const textToCapitalize = 'lorem ipsum'

    const textCapitalized = capitalize(textToCapitalize)
    const expected = 'Lorem ipsum'

    expect(textCapitalized).toBe(expected)
  })

  test('Should set lower all upper chars that are not at the beginning', () => {
    const textToCapitalize = 'LOREM IPSUM'

    const textCapitalized = capitalize(textToCapitalize)
    const expected = 'Lorem ipsum'

    expect(textCapitalized).toBe(expected)
  })

  test('Should return empty if receive empty', () => {
    const textToCapitalize = ''

    const textCapitalized = capitalize(textToCapitalize)
    const expected = ''

    expect(textCapitalized).toBe(expected)
  })
})
