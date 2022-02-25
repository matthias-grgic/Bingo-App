import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Hello() {
  return (
    <>
      <Link to='/bingo'>
        <h1>BINGO!</h1>
      </Link>
    </>
  )
}
