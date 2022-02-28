import { useLottie } from 'lottie-react'

const style = {
  width: '150%',
  height: '100%',
  position: 'fixed',
  opacity: 0.9,
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
