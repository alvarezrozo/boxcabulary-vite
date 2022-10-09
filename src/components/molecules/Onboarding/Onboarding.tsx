import './Onboarding.scss'

enum DEFAULT_TEXTS {
  avatarPath = '/assets/avatar.png',
  title = '¡Hola!',
  description = '¿Qué quieres hacer?'
}

interface Props {
  avatarSrc?: string
  title?: string
  description?: string
}

const Onboarding = (props: Props) => {
  const { 
    avatarSrc = DEFAULT_TEXTS.avatarPath,
    description = DEFAULT_TEXTS.description,
    title = DEFAULT_TEXTS.title
  } = props

  return (
    <div className="bv-onboarding">
      <img
        className="bv-onboarding__avatar"
        src={avatarSrc}
        alt="Avatar"
      />
      <div className="bv-onboarding__text">
        <h2 className="bv-onboarding__title">{title}</h2>
        <p className="bv-onboarding__description">{description}</p>
      </div>
    </div>
  )
}

export default Onboarding