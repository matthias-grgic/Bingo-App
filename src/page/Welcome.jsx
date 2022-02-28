import Header from '../components/Header'
import Introduction from '../components/Introduction'
import LottieAnimationTwo from '../components/LottieAnimationTwo'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Welcome() {
  return (
    <WelcomeSection to='/bingo'>
      <Header />
      <LottieAnimationTwo />
      <Introduction />
    </WelcomeSection>
  )
}

const WelcomeSection = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
