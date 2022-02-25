import styled from 'styled-components'
import { statements } from '../lib/statements'
import { useState } from 'react'

export default function Bingo() {
  const [isClicked, setIsClicked] = useState([])
  console.log(isClicked)

  //check for doubles in array - if not ad statement to array
  const handleClick = (id) => {
    if (!isClicked.includes(id)) {
      setIsClicked([...isClicked, id])
    }
  }

  //change color is statement is clicked
  const styleIfClicked = (id) => {
    if (isClicked.includes(id)) {
      return 'green'
    } else {
      return 'yellow'
    }
  }

  return (
    <Container>
      {statements.map((item, index) => {
        return (
          <Item bg={styleIfClicked(item.id)} id={item.id} key={index} onClick={() => handleClick(item.id)}>
            {item.statement}
            {console.log(styleIfClicked(item.id))}
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
  background-color: ${(props) => (props.bg === 'green' ? 'green' : 'rgb(248,248,248)')};
  border: 1px solid var(--border-seperator);
  justify-content: center;
`
