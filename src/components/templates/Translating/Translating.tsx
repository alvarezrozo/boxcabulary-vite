import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFlagPopUp, setPopUp } from '../../../state/UIReducer'
import capitalize from '../../../utils/capitalize'
import { BUTTON_THEME_COLORS, INPUT_STATES, IWord, LANGUAGES } from '../../../utils/types'
import Button from '../../atoms/Button/Button'
import PopUp from '../../atoms/PopUp/PopUp'
import ProgressBar from '../../atoms/ProgressBar/ProgressBar'
import WordSlider from '../../organisms/WordSlider/WordSlider'
import './Translating.scss'

interface Props {
  words: IWord[],
}

const LANGUAGE_TRANSLATE_FROM: LANGUAGES = 'spanish'
const LANGUAGE_TRANSLATE_TO: LANGUAGES = 'english'

const Translating = (props: Props) => {
  const { words } = props

  const PopUpDispatch = useDispatch()

  const [currentWord, setCurrentWord] = useState(0)
  const [canWrite, setCanWrite] = useState(true)
  const [inputState, setInputState] = useState<INPUT_STATES>()
  const [inputValue, setinputValue] = useState('')
  const [buttonColor, setButtonColor] = useState<BUTTON_THEME_COLORS>('blue')
  const [wordManager, setWordManager] = useState<(null | IWord)[]>([null, null])
  const [wordSlotToClean, setWordSlotToClean] = useState<0 | 1>(0)
  const [isShowingPopUp, setIsShowingPopUp] = useState(false)

  useEffect(() => {
    setWordManager([words[currentWord], null])
  }, [])

  const handleInputChange = (value: string) => {
    setinputValue(value)
  }

  const handleUnmount = () => {
    const wordManager_ = [...wordManager]

    if (wordManager_[0]) {
      wordManager_[wordSlotToClean] = null
    } else {
      wordManager_[wordSlotToClean] = null
    }

    setWordManager(wordManager_)
  }

  const iterateNextWord = () => {
    const wordManager_ = [...wordManager]
    const nextWord = words[currentWord + 1]

    if (wordManager_[0]) {
      wordManager_[1] = nextWord
      setWordSlotToClean(0)
    } else {
      wordManager_[0] = nextWord
      setWordSlotToClean(1)
    }

    setWordManager(wordManager_)
  }

  const errorWordHandler = () => {
    PopUpDispatch(
      setPopUp(
        <PopUp
          title='La solución correcta es'
          description={words[currentWord][LANGUAGE_TRANSLATE_TO]}
          theme='red'
        />
      )
    )


    setButtonColor('red')
    setInputState('error')

    //Decrement word score here
  }

  const successWordHandler = () => {
    PopUpDispatch(
      setPopUp(
        <PopUp title='¡Muy bien!' theme='green' />
      )
    )

    setButtonColor('green')
    setInputState('success')

    //Increment word score here
  }

  const resetValidationStuff = () => {
    setIsShowingPopUp(false)
    setButtonColor('blue')
    setInputState(undefined)
    setCanWrite(true)

    PopUpDispatch(
      setFlagPopUp()
    )
  }

  const validateWorld = () => {
    const successWord = capitalize(inputValue) === capitalize(words[currentWord][LANGUAGE_TRANSLATE_TO])

    if (successWord) {
      successWordHandler()
    } else {
      errorWordHandler()
    }
  }

  const buttonClickHandler = () => {
    if (!isShowingPopUp) {
      //Show popup here  
      setIsShowingPopUp(true)
      validateWorld()
      setCanWrite(false)

      document.activeElement &&
        (document.activeElement as HTMLElement).blur()
      return
    }

    resetValidationStuff()
    setCurrentWord((prev) => prev + 1)
    iterateNextWord()
  }

  return (
    <div className='bv-translating'>
      <ProgressBar totalSteps={words.length} currentStep={currentWord} className='bv-translating__progress' />
      <p className='bv-translating__description'>Traduce las siguientes palabras</p>
      <div className='bv-translating__slider-wrapper'>
        {wordManager[0] &&
          <WordSlider
            className='bv-translating__slider'
            changeIndicator={currentWord}
            canWrite={canWrite}
            handleInputChange={handleInputChange}
            unmountedCallback={handleUnmount}
            word={wordManager[0][LANGUAGE_TRANSLATE_FROM]}
            inputState={inputState}
            handleSubmit={buttonClickHandler}
          />
        }
        {wordManager[1] &&
          <WordSlider
            className='bv-translating__slider'
            changeIndicator={currentWord}
            canWrite={canWrite}
            handleInputChange={handleInputChange}
            unmountedCallback={handleUnmount}
            word={wordManager[1][LANGUAGE_TRANSLATE_FROM]}
            inputState={inputState}
            handleSubmit={buttonClickHandler}
          />
        }
      </div>
      <div className='bv-translating__button-wrapper' >
        <Button
          className='bv-translating__button'
          title='Continuar'
          themeColor={buttonColor}
          onClick={buttonClickHandler}
          isDisable={inputValue === ''}
        />
      </div>
    </div>
  )
}

export default Translating