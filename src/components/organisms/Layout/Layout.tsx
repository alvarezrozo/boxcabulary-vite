import { ReactElement } from "react"
import { useLocation } from "react-router-dom"
import { ROUTES } from "../../../utils/constants"
import { NAV_ITEM_NAMES } from "../../../utils/types"
import Header from "../../molecules/Header/Header"
import Onboarding from "../../molecules/Onboarding/Onboarding"
import NavBar from "../NavBar/NavBar"

interface Props {
  children: ReactElement
}

interface IElementFlags {
  hasHeader: boolean
  hasOnboarding: boolean
  hasNavBar: boolean
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
}

const Layout = (props:Props) => {
  const {
    children,
  } = props

  const location = useLocation()

  return (
    <>
      {elements[location.pathname].hasHeader && <Header />}
      {elements[location.pathname].hasOnboarding && <Onboarding />}
      <main>
        {children}
      </main>
      {elements[location.pathname].hasNavBar
        && <NavBar activeItemOverwrite={elements[location.pathname].activeNavBar} />}
    </>
  )
}

export default Layout