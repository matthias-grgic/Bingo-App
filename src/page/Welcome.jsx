import Introduction from '../components/Introduction'
import LottieAnimationTwo from '../components/LottieAnimationTwo'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Welcome() {
  return (
    <WelcomeSection to='/bingo'>
      <LottieAnimationTwo />
      <Introduction />
    </WelcomeSection>
  )
}

const WelcomeSection = styled(Link)`
  display: flex;
  background: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease;
  }
`
