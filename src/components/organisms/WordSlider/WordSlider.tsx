import { useEffect, useState } from 'react'
import { INPUT_STATES, IWord } from '../../../utils/types'
import CardWord from '../../atoms/CardWord/CardWord'
import Input from '../../atoms/Input/Input'
import './WordSlider.scss'

enum MODIFIERS {
  mounted = 'bv-word-slider--mounted',
  unmounted = 'bv-word-slider--unmounted'
}

interface Props {
  changeIndicator: any
  canWrite: boolean
  word: IWord
  className?: string
  inputState?: INPUT_STATES
  handleInputChange: (value: string) => void
  unmountedCallback: () => void
}

const WordSlider = (props:Props) => {
  const {
    changeIndicator,
    unmountedCallback,
    word,
    handleInputChange,
    canWrite,
    inputState,
    className = '',
  } = props

  const [mounted, setMounted] = useState(false)
  const [unmounted, setUnmounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  useEffect(() => {
    if (mounted) {  
      setUnmounted(true)

      setTimeout(() => {
        unmountedCallback && unmountedCallback()
      }, 400);
    }
  }, [changeIndicator])

  return (
    <div className={`bv-word-slider ${className} ${mounted ? MODIFIERS.mounted : ''} ${unmounted ? MODIFIERS.unmounted : ''}`}>
      <CardWord title={word.spanish} />
      <Input handleChange={handleInputChange} canWrite={canWrite} state={inputState} />
    </div>
  )
}

export default WordSlider