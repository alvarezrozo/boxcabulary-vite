import './CardCTA.scss'

interface Props {
  imgName: 'astronaut-read.png' | 'astronaut-write.png'
  imgAlt?: string
  label: string
  alignment?: 'left' | 'right'
  backgroundColor?: 'blue' | 'star'
}

const IMG_PATH_PREFIX: string = '/assets/'

const CardCTA = (props: Props) => {
  const {
    imgName,
    imgAlt = '',
    backgroundColor = 'blue',
    label,
    alignment = 'left' 
  } = props

  return (
    <button className={`bv-card-cta bv-card-cta--${alignment} bv-card-cta--color-${backgroundColor}`}>
      <img className='bv-card-cta__img' src={`${IMG_PATH_PREFIX}${imgName}`} alt={imgAlt} />
      <span className='bv-card-cta__label'>{label}</span>
    </button>
  )
}

export default CardCTA