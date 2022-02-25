import styled from 'styled-components'
import { statements } from '../lib/statements'
import { useState } from 'react'

export default function Bingo() {
  const [isClicked, setIsClicked] = useState([])
  console.log(isClicked)

  //check for doubles in array - if not ad statement to array
  const handleClick = (id) => {
    if (isClicked.includes(id)) {
    } else {
      setIsClicked([...isClicked, id])
    }
  }

  return (
    <Container>
      {statements.map((item, index) => {
        return (
          <Item id={item.id} key={index} onClick={() => handleClick(item.id)}>
            {item.statement}
          </Item>
        )
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
  height: 80vh;
`

const Item = styled.button`
  display: flex;
  align-items: center;
  background-color: ;
  background-color: var(--disabled-txt-color);
  border: 1px solid var(--border-seperator);
  justify-content: center;
`
