import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Hello() {
  return (
    <>
      <StyledLink to='/bingo'>
        <h1>BINGO!</h1>
      </StyledLink>
    </>
  )
}

const StyledLink = styled(Link)`
  background-color: transparent;
`
