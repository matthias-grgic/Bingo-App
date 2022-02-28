import { useLottie } from 'lottie-react'

const style = {
  backgroundcolor: 'none',
  width: '80%',
  height: '20rem',
  zindex: -1,
  // position: 'fixed',
  margin: '0',
  padding: '0',
}

const LottieAnimationTwo = () => {
  const options = {
    path: 'https://assets4.lottiefiles.com/packages/lf20_iombyzfq.json',
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default LottieAnimationTwo
