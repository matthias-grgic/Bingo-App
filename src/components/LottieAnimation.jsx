import { useLottie } from 'lottie-react'

const style = {
  opacity: 1,
  width: '100%',
  height: '100%',
}

const LottieAnimation = () => {
  const options = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_ppL5oX.json',
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default LottieAnimation
