import debounce from "./debounce";

jest.useFakeTimers()

describe('Debounce', () => {
  test('Should call function when enough time has passed', () => {
    const functionToSpy = jest.fn()
    const functionToCall = debounce(functionToSpy, 500)

    functionToCall()
    functionToCall()
    functionToCall()
    functionToCall()
    functionToCall()

    jest.advanceTimersByTime(600)

    expect(functionToSpy).toHaveBeenCalledTimes(1)
  })

  test('Should not call function when enough time has not passed', () => {
    const functionToSpy = jest.fn()
    const functionToCall = debounce(functionToSpy, 500)

    functionToCall()
    functionToCall()
    functionToCall()
    functionToCall()
    functionToCall()

    jest.advanceTimersByTime(100)

    expect(functionToSpy).not.toHaveBeenCalled()
  })
})
