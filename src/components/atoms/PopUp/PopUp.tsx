import { useEffect, useState } from 'react'
import './PopUp.scss'

enum MODIFIERS {
  green = 'bv-pop-up--green',
  red = 'bv-pop-up--red',
  mounted = 'bv-pop-up--mounted',
}

interface Props {
  title: string
  description?: string
  theme: 'green' | 'red'
}

const PopUp = (props:Props) => {
  const { title, description, theme } = props

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`bv-pop-up ${MODIFIERS[theme]} ${mounted ? MODIFIERS.mounted : ''}`}>
      <h2 className="bv-pop-up__title">{title}</h2>
      {description && <h3 className="bv-pop-up__description">{description}</h3>}
    </div>
  )
}

export default PopUp