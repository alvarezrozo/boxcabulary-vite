import { useEffect, useState } from 'react'
import { INPUT_STATES, IWord } from '../../../utils/types'
import Button from '../../atoms/Button/Button'
import ProgressBar from '../../atoms/ProgressBar/ProgressBar'
import WordSlider from '../../organisms/WordSlider/WordSlider'
import './Translating.scss'

interface Props {
  words: IWord[],
}

const Translating = (props: Props) => {
  const { words } = props

  const [currentWord, setCurrentWord] = useState(0)
  const [canWrite, setCanWrite] = useState(true)
  const [inputState, setInputState] = useState<INPUT_STATES>()
  const [inputValue, setinputValue] = useState('')
  const [buttonColor, setButtonColor] = useState()
  const [wordManager, setWordManager] = useState<(null | IWord)[]>([null, null])
  const [wordSlotToClean, setwordSlotToClean] = useState<0 | 1>(0)

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
      setwordSlotToClean(0)
    } else {
      wordManager_[0] = nextWord
      setwordSlotToClean(1)
    }

    setWordManager(wordManager_)
  }

  const validateWord = () => {
    /* ======================= */
    /* =====VALIDATE HERE===== */
    /* ======================= */

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
            word={wordManager[0]}
            inputState={inputState}
          />
        }
        {wordManager[1] &&
          <WordSlider
            className='bv-translating__slider'
            changeIndicator={currentWord}
            canWrite={canWrite}
            handleInputChange={handleInputChange}
            unmountedCallback={handleUnmount}
            word={wordManager[1]}
            inputState={inputState}
          />
        }
      </div>
      <div className='bv-translating__button-wrapper' >
        <Button
          className='bv-translating__button'
          title='Continuar'
          themeColor={buttonColor}
          onClick={validateWord}
        />
      </div>
    </div>
  )
}

export default Translating