import { MouseEvent, ReactElement } from "react"
import './NavItem.scss'

interface Props {
  activeIcon: ReactElement
  inactiveIcon: ReactElement
  onClick: (e:MouseEvent<HTMLElement>) => void
  activeItem?: string
  name: string
}

const NavItem = (props:Props) => {
  const { activeIcon, inactiveIcon, onClick, activeItem, name} = props

  const handleClick = (e:MouseEvent<HTMLElement>) => {
    onClick(e)
  }

  return (
    <button className={`bv-nav-item bv-nav-item--name-${name}`} onClick={handleClick}>
      {activeItem === name ? 
        activeIcon
        :
        inactiveIcon
      }
    </button>
  )
}

export default NavItem