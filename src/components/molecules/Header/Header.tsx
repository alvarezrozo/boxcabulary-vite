import './Header.scss'
import ChevronLeft from "../../atoms/Icons/ChevronLeft"

interface Props {
  backButtonClick?: () => void | null,
  title: string,
}

const Header = (props:Props) => {
  const { backButtonClick = null, title } = props

  return (
    <header className="bv-header">
      {backButtonClick && 
        <button className="bv-header__button" onClick={backButtonClick}>
          <ChevronLeft className="bv-header__icon" />
        </button>
      }
      <h1 className='bv-header__title'>{title}</h1>
    </header>
  )
}

export default Header