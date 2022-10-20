import { useState } from 'react'
import { INPUT_STATES } from '../../../utils/types'
import './Input.scss'

enum MODIFIERS {
  filled = 'bv-input--filled',
  success = 'bv-input--success',
  error = 'bv-input--error',
  canWrite = 'bv-input--can-write',
}

interface Props {
  autofocus?: boolean
  state?: INPUT_STATES
  handleChange: (value: string) => void
  canWrite?: boolean
}

const Input = (props:Props) => {
  const { autofocus = false, state, handleChange, canWrite = true } = props

  const [value, setValue] = useState('')

  const isFilled = value !== ''

  const handleChange_ = (value: string) => {
    setValue(value)
    handleChange(value)
  }

  return (
    <input
      className={`bv-input ${isFilled ? MODIFIERS.filled : ''} ${state ? MODIFIERS[state] : ''} ${canWrite ? MODIFIERS.canWrite : ''}`}
      tabIndex={canWrite ? 0 : -1}
      autoFocus={autofocus}
      value={value}
      placeholder='Type the word here...'
      onChange={(e) => canWrite && handleChange_(e.target.value)}
    />
  )
}

export default Input
