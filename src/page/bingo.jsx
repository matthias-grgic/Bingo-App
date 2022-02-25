import styled from 'styled-components'
import { statements } from '../lib/statements'

export default function Bingo() {
  return (
    <Container>
      {statements.map((item, index) => {
        return <Item key={index}>{item.statement}</Item>
      })}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  width: 100vw;
  height: 70vh;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--disabled-txt-color);
  border: 1px solid var(--border-seperator);
  /* box-shadow: var(--main-box-shadow); */
  justify-content: center;
`
