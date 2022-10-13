import './Button.scss'

enum MODIFIERS {
  filled = 'bv-button--filled',
  ghost = 'bv-button--ghost',
  blue = 'bv-button--blue',
  red = 'bv-button--red',
  green = 'bv-button--green',
}

interface Props {
  title: string
  themeColor?: 'blue' | 'green' | 'red'
  state?: 'filled' | 'ghost'
  isDisable?: boolean
}

const Button = (props:Props) => {
  const { themeColor = 'blue', title, state = 'filled', isDisable = false } = props

  return (
    <button disabled={isDisable} className={`bv-button ${MODIFIERS[themeColor]} ${MODIFIERS[state]}`}>
      {title}
    </button>
  )
}

export default Button