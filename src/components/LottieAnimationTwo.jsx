import { useLottie } from 'lottie-react'

const style = {
  width: '45%',
  opacity: 0.8,
  zindex: -1,
}

const LottieAnimationTwo = () => {
  const options = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_iombyzfq.json',
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default LottieAnimationTwo
