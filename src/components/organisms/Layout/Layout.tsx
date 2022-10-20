import { ReactElement } from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from 'react-redux'
import { ROUTES } from "../../../utils/constants"
import { NAV_ITEM_NAMES } from "../../../utils/types"
import Header from "../../molecules/Header/Header"
import Onboarding from "../../molecules/Onboarding/Onboarding"
import NavBar from "../NavBar/NavBar"
import { RootState } from "../../../state/store"

interface Props {
  children: ReactElement
}

interface IElementFlags {
  hasHeader: boolean
  hasOnboarding: boolean
  hasNavBar: boolean,
  backButtonClick?: () => void
  activeNavBar?: NAV_ITEM_NAMES
}

interface ILayoutElements {
  [key: string]: IElementFlags
}

const elements: ILayoutElements = {
  [ROUTES.home]: {
    hasHeader: true,
    hasOnboarding: true,
    hasNavBar: true,
  },
  [ROUTES.profile]: {
    hasHeader: true,
    hasOnboarding: false,
    hasNavBar: true,
    activeNavBar: 'user'
  },
  [ROUTES.translating]: {
    hasHeader: true,
    backButtonClick: () => console.log('backing'),
    hasOnboarding: false,
    hasNavBar: false,
  }
}

const Layout = (props:Props) => {
  const {
    children,
  } = props

  const location = useLocation()

  const activePopUp = useSelector((state: RootState) => state.UI.activePopUp)

  return (
    <>
      {elements[location.pathname].hasHeader && <Header backButtonClick={elements[location.pathname].backButtonClick} />}
      {elements[location.pathname].hasOnboarding && <Onboarding />}
      <main>
        {children}
        {activePopUp}
      </main>
      {elements[location.pathname].hasNavBar
        && <NavBar activeItemOverwrite={elements[location.pathname].activeNavBar} />}
    </>
  )
}

export default Layout