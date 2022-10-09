import './CardWord.scss'

interface Props {
  title: string
}

const CardWord = (props:Props) => {
  const { title } = props

  return (
    <div className="bv-card-word">
      <h2 className="bv-card-word__title">
        {title}
      </h2>
    </div>
  )
}

export default CardWord