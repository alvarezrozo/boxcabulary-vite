import Button, { MODIFIERS } from './Button'
import { BUTTON_THEME_COLORS } from '../../../utils/types'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

describe('Atoms - Button', () => {
  const textIdentifier = 'This is a test'

  test('Should render the component with just title', () => {

    const props = {
      title: textIdentifier,
    }

    const component = render(<Button {...props} />)

    component.getByText(textIdentifier)
  })

  test('Should has blue class modifier by default', () => {
    const expectedClass = MODIFIERS.blue

    const props = {
      title: textIdentifier,
    }

    const component = render(<Button {...props} />)

    const classes = component.getByText(textIdentifier).getAttribute('class')

    expect(classes).toContain(expectedClass)
  })

  test('Should has not red class modifier by default', () => {
    const expectedClass = MODIFIERS.red

    const props = {
      title: textIdentifier,
    }

    const component = render(<Button {...props} />)

    const classes = component.getByText(textIdentifier).getAttribute('class')

    expect(classes).not.toContain(expectedClass)
  })

  test('Should has red class modifier if the theme prop is setted as red', () => {
    const expectedClass = MODIFIERS.red
    const themeColor: BUTTON_THEME_COLORS = 'red'

    const props = {
      title: textIdentifier,
      themeColor: themeColor
    }

    const component = render(<Button {...props} />)

    const classes = component.getByText(textIdentifier).getAttribute('class')

    expect(classes).toContain(expectedClass)
  })
})
