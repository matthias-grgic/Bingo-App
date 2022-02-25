import styled from 'styled-components'
import { statements } from '../lib/statements'

export default function Bingo() {
  return (
    <Container>
      {statements.map((item, index) => {
        return (
          <Item key={index}>
            <Text>{item.statement}</Text>
          </Item>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  height: 30rem;
  width: 20rem;
  justify-content: center;
  align-content: center;
`

const Item = styled.div`
  background-color: var(--disabled-txt-color);
  width: auto;
  height: auto;
`

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
