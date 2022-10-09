import { ReactElement } from "react"
import Header from "../../molecules/Header/Header"
import Onboarding from "../../molecules/Onboarding/Onboarding"
import NavBar from "../NavBar/NavBar"

interface Props {
  hasHeader?: boolean
  hasOnboarding?: boolean
  hasNavBar?: boolean
  children: ReactElement
}

const Layout = (props:Props) => {
  const {
    hasHeader = true,
    hasOnboarding = true,
    hasNavBar = true,
    children,
  } = props

  return (
    <>
      {hasHeader && <Header />}
      {hasOnboarding && <Onboarding />}
      <main>
        {children}
      </main>
      {hasNavBar && <NavBar />}
    </>
  )
}

export default Layout