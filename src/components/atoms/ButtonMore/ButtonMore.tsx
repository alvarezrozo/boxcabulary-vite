import './ButtonMore.scss'
import PlusIcon from '../Icons/Plus'
import { useState } from 'react'

enum MODIFIERS {
  activeButton = 'bv-button-more--active'
}

interface Props {
  onClick: () => void
  disabled?: boolean
  onClickClose?: () => void
}

const TIMEOUT_DELAY = 1000

const ButtonMore = (props:Props) => {
  const { 
    disabled = false, 
    onClick,
    onClickClose
  } = props

  const [isActive, setIsActive] = useState<boolean>(false)
  const [currentTimeOutId, setCurrentTimeOutId] = useState<number | null>(null)

  const handleClick = () => {
    setIsActive(true)
    
    onClick()

    if(currentTimeOutId){
      window.clearTimeout(currentTimeOutId)
    }

    if(!onClickClose) {
      const timeOutId = window.setTimeout(() => {
        setIsActive(false)
        setCurrentTimeOutId(null)
      }, TIMEOUT_DELAY);

      setCurrentTimeOutId(timeOutId)
    } else {
      if(isActive) {
        onClickClose()
        setIsActive(false)
      }
    }
  }

  return (
    <button 
      disabled={disabled}
      className={`bv-button-more ${isActive ? MODIFIERS.activeButton : ''}`}
      onClick={handleClick}
    >
      <PlusIcon className='bv-button-more__icon' />

      <span className='bv-button-more__child'>
        <PlusIcon className='bv-button-more__icon' />
      </span>
    </button>
  )
}

export default ButtonMore