import { useEffect, useRef, useState } from 'react'
import { NAV_ITEM_NAMES } from '../../../utils/types';
import ButtonMore from '../../atoms/ButtonMore/ButtonMore'
import Home from '../../atoms/Icons/Home';
import HomeFull from '../../atoms/Icons/HomeFull';
import NavBarShape from '../../atoms/Icons/NavBarShape';
import User from '../../atoms/Icons/User';
import UserFull from '../../atoms/Icons/UserFull';
import NavItem from '../../atoms/NavItem/NavItem';
import './NavBar.scss'
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../../../utils/constants';

interface Props {
  activeItemOverwrite?: NAV_ITEM_NAMES
}

const NavBar = (props:Props) => {
  const { activeItemOverwrite = 'home' } = props

  const [activeItem, setactiveItem] = useState<NAV_ITEM_NAMES>(activeItemOverwrite)

  const navigate = useNavigate()

  const shapeWrapper = useRef(null);
  const activeItemRef = useRef(activeItem);

  useEffect(() => {
    window.addEventListener('resize', handleChangeActiveItem)
  
    return () => {
      window.removeEventListener('resize', handleChangeActiveItem)
    }
  }, [])
  

  useEffect(() => {
    handleChangeActiveItem()
  }, [activeItem])
  

  const hanldeMoreClick = () => {}
  const hanldeMoreClickClose = () => {}

  const setActiveNavItem = (name:NAV_ITEM_NAMES) => {
    setactiveItem(name)
    activeItemRef.current = name
  }

  const handleChangeActiveItem = () => {
    const $activeElement = document.querySelector(
      `.bv-nav-item--name-${activeItemRef.current}`) as HTMLElement
    
    if(!$activeElement) return

    const leftValue = $activeElement.offsetLeft
    const $shapeWrapper = shapeWrapper.current as unknown as HTMLElement
    
    $shapeWrapper.style.left = `${leftValue}px`
  }

  const handleUserClick = () => {
    navigate(ROUTES.profile)
    setActiveNavItem('user')
  }

  const handleHomeClick = () => {
    navigate(ROUTES.home)
    setActiveNavItem('home')
  }

  return (
    <nav className='bv-nav-bar'>
      <div className='bv-nav-bar__shape-wrapper' ref={shapeWrapper} >
        <NavBarShape className='bv-nav-bar__shape' />
      </div>
      <div className="bv-nav-bar__left bv-nav-bar__side">
        <NavItem 
          activeIcon={<HomeFull />} 
          inactiveIcon={<Home />} 
          onClick={handleHomeClick}
          name={'home'}
          activeItem={activeItem}
        />
      </div>
      <div className="bv-nav-bar__center">
        <div className="bv-nav-bar__more-position">
          <ButtonMore
            onClick={hanldeMoreClick}
            onClickClose={hanldeMoreClickClose}
          />
        </div>
      </div>
      <div className="bv-nav-bar__right bv-nav-bar__side">
        <NavItem 
          activeIcon={<UserFull />} 
          inactiveIcon={<User />} 
          onClick={handleUserClick}
          name={'user'}
          activeItem={activeItem}
        />
      </div>
    </nav>
  )
}

export default NavBar