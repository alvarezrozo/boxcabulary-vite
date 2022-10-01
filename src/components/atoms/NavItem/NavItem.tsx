import { MouseEvent, ReactElement } from "react"
import { NAV_ITEM_NAMES } from "../../../utils/types"
import './NavItem.scss'

interface Props {
  activeIcon: ReactElement
  inactiveIcon: ReactElement
  onClick: (e:MouseEvent<HTMLElement>) => void
  activeItem?: string
  name: NAV_ITEM_NAMES
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