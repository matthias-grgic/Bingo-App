import { useLottie } from 'lottie-react'

const style = {
  width: '100%',
  position: 'fixed',
  opacity: 0.8,
  zindex: -1,
}

const LottieAnimationTwo = () => {
  const options = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_5q3dohib.json',
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default LottieAnimationTwo
