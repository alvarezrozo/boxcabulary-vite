import { FormEvent, useEffect, useState } from 'react'
import { INPUT_STATES } from '../../../utils/types'
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
  word: string
  className?: string
  inputState?: INPUT_STATES
  handleInputChange: (value: string) => void
  handleSubmit: () => void
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
    handleSubmit
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

  const handleSubmit_ = (event: FormEvent) => {
    event.preventDefault()
    handleSubmit()
  }

  return (
    <div className={`bv-word-slider ${className} ${mounted ? MODIFIERS.mounted : ''} ${unmounted ? MODIFIERS.unmounted : ''}`}>
      <CardWord title={word} />

      <form autoComplete='false' autoCapitalize='true' onSubmit={handleSubmit_} >
        <Input handleChange={handleInputChange} canWrite={canWrite} state={inputState} />
      </form>
    </div>
  )
}

export default WordSlider