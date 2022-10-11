import { ReactElement, useEffect, useRef } from "react"

interface Props {
  children: ReactElement
  pixels?: number
  from?: 'top' | 'left' | 'right' | 'bottom'
  gravity?: number
  energyLoss?: number
  executionsCounterExpected?: number
  initialVelocity?: number
  className?: string
}

interface ITransforms {
  [key: string]: (px: number) => string
}

const transforms:ITransforms = {
  right: (px) => `translate3d(${px}px, 0, 0)`,
  top: (px) => `translate3d(0, -${px}px, 0)`,
  left: (px) => `translate3d(-${px}px, 0, 0)`,
  bottom: (px) => `translate3d(0, ${px}px, 0)`,
}

const Bouncer = (props:Props) => {
  const { children,
    from = 'top',
    pixels = 140,
    gravity = 0.5,
    energyLoss = 0.7,
    executionsCounterExpected = 80,
    initialVelocity = 3,
    className = ''
  } = props
  
  const intervalId = useRef<number | null>(null)
  const bouncerWrapper = useRef<null | HTMLDivElement>(null)
  const bouncerChild = useRef<null | HTMLElement>(null)

  let velocity:number = initialVelocity
  let initialPosition:number = pixels
  let coor:number = initialPosition
  let pixelsBounding = pixels
  let oldPosition: number | null = null
  let executionsCounter:number = 0

  const calculatePosition = () => {
    const oldCoor = coor
    const oldGravity = gravity

    executionsCounter++
    pixelsBounding = coor - 10
    coor = oldCoor - velocity
    velocity += oldGravity
    
    if (coor <= 10) {
      velocity = -1 * Math.round(velocity * energyLoss)
    }
  
    if (executionsCounter === executionsCounterExpected) {
      executionsCounter = 0
      oldPosition = coor
    }
  
    if(coor === oldPosition) {
      clearInterval(intervalId.current as number)
      pixelsBounding = 0
    }
    
    (bouncerChild.current as HTMLElement).style.cssText = `transform:${transforms[from](pixelsBounding)}`
  }

  useEffect(() => {
    bouncerChild.current = bouncerWrapper.current?.childNodes[0] as HTMLElement
    (bouncerWrapper.current as HTMLDivElement).style.cssText =
      `height:${bouncerChild.current.offsetHeight}px`
    intervalId.current = window.setInterval(calculatePosition, 15)
  
    return () => {
      window.clearInterval(intervalId.current as number)
    }
  }, [])

  return (
    <div className={className} ref={bouncerWrapper}>
      {children}
    </div>
  )
}

export default Bouncer