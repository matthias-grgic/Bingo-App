import styled from 'styled-components'

export default function Hello() {
  return (
    <StyledLink>
      <h1>BINGO!</h1>
    </StyledLink>
  )
}

const StyledLink = styled.header`
  background-color: transparent;
  font-size: clamp(3rem, 3vw, 3.5rem);
  z-index: 1;
  @media (min-width: 810px) {
    padding: 0 16rem 0 16rem;
  }
`
