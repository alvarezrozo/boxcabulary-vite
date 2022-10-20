import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../state/store'
import { setPopUp } from '../../../state/UIReducer'
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

  const flagPopUp = useSelector((state: RootState) => state.UI.flagPopUp)
  const PopUpDispatch = useDispatch()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if(mounted) {
      autoUnmount()
    }
  }, [flagPopUp])

  const autoUnmount = () => {
    setMounted(false)

    setTimeout(() => {
      PopUpDispatch(
        setPopUp(null)
      )
    }, 300);
  }

  return (
    <div className={`bv-pop-up ${MODIFIERS[theme]} ${mounted ? MODIFIERS.mounted : ''}`}>
      <h2 className="bv-pop-up__title">{title}</h2>
      {description && <h3 className="bv-pop-up__description">{description}</h3>}
    </div>
  )
}

export default PopUp