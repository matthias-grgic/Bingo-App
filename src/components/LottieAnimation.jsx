import { useLottie } from 'lottie-react'

const style = {
  opacity: 0.8,
  width: '100%',
  height: '100%',
}

const LottieAnimation = () => {
  const options = {
    path: 'https://assets4.lottiefiles.com/private_files/lf30_2cu1eh3s.json',
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default LottieAnimation
