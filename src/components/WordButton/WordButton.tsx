import './_index.scss'

interface Props {
    text: string
    className?: string
    languageUsed: 'spanish' | 'english'
    gridRowPosition?: number
}

const BLOCK_CLASS = 'word'

const WordButton = (props: Props) => {
    const { text, gridRowPosition } = props

    return (
        <button 
            className={`${BLOCK_CLASS}`}
            style={{gridRowStart: gridRowPosition}}
        >{text}</button>
    )
}

export default WordButton