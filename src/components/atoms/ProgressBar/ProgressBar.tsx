import './ProgressBar.scss'

interface Props {
  totalSteps: number
  currentStep: number
  className?: string
}

const ProgressBar = (props:Props) => {
  const { totalSteps, currentStep, className = '' } = props

  const currentPercentage =  ((currentStep + 1) / (totalSteps + 1)) * 100
  const currentPercentageDrawer = currentPercentage > 100 ? 100 : currentPercentage

  return (
    <progress max="100" value={currentPercentageDrawer} className={`bv-progress-bar ${className}`}>
      {`${currentPercentageDrawer}%`}
    </progress>
  )
}

export default ProgressBar
