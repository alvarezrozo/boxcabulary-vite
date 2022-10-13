import { useState } from 'react'
import './Input.scss'

enum MODIFIERS {
  filled = 'bv-input--filled',
  success = 'bv-input--success',
  error = 'bv-input--error',
}

interface Props {
  autofocus?: boolean
  state?: 'filled' | 'error' | 'success'
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
      className={`bv-input ${isFilled ? MODIFIERS.filled : ''} ${state ? MODIFIERS[state] : ''}`}
      autoFocus={autofocus}
      value={value}
      onChange={(e) => canWrite && handleChange_(e.target.value)}
    />
  )
}

export default Input
