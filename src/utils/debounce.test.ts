/**
 * @jest-environment jsdom
 */

import { describe, expect, test } from '@jest/globals';
import debounce from "./debounce";

describe('Debounce', () => {
  test('Should call function when enough time has passed', (done) => {
    const functionToSpy = jest.fn()
    const functionToCall = debounce(functionToSpy, 500)

    functionToCall()
    functionToCall()
    functionToCall()
    functionToCall()
    functionToCall()

    setTimeout(() => {
      expect(functionToSpy).toHaveBeenCalled()
      done()
    }, 600)
  })

  test('Should not call function when enough time has not passed', (done) => {
    const functionToSpy = jest.fn()
    const functionToCall = debounce(functionToSpy, 500)

    functionToCall()
    functionToCall()
    functionToCall()
    functionToCall()
    functionToCall()

    setTimeout(() => {
      expect(functionToSpy).not.toHaveBeenCalled()
      done()
    }, 100)
  })
})
