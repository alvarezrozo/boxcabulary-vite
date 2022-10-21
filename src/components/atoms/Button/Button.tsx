import { BUTTON_THEME_COLORS } from '../../../utils/types'
import './Button.scss'

export enum MODIFIERS {
  filled = 'bv-button--filled',
  ghost = 'bv-button--ghost',
  blue = 'bv-button--blue',
  red = 'bv-button--red',
  green = 'bv-button--green',
}

interface Props {
  title: string
  themeColor?: BUTTON_THEME_COLORS
  state?: 'filled' | 'ghost'
  isDisable?: boolean
  className?: string
  onClick?: () => void
}

const Button = (props: Props) => {
  const { themeColor = 'blue', title, state = 'filled', isDisable = false, className = '', onClick } = props

  return (
    <button
      onClick={onClick}
      disabled={isDisable}
      className={`bv-button ${className} ${MODIFIERS[themeColor]} ${MODIFIERS[state]}`}
    >
      {title}
    </button>
  )
}

export default Button