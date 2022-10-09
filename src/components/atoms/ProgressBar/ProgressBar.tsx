import './ProgressBar.scss'

interface Props {
  totalSteps: number
  currentStep: number
}

const ProgressBar = (props:Props) => {
  const { totalSteps, currentStep } = props

  const currentPercentage =  (currentStep / (totalSteps + 1)) * 100
  const currentPercentageDrawer = currentPercentage > 100 ? 100 : currentPercentage

  return (
    <progress max="100" value={currentPercentageDrawer} className="bv-progress-bar">
      {`${currentPercentageDrawer}%`}
    </progress>
  )
}

export default ProgressBar