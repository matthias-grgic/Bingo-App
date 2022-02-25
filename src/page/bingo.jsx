import styled from 'styled-components'
import { statements } from '../lib/statements'
import { useState } from 'react'

export default function Bingo() {
  const [isClicked, setIsClicked] = useState(['13'])
  console.log(isClicked)

  //check for doubles in array - if not ad statement to array
  const handleClick = (id) => {
    if (!isClicked.includes(id)) {
      setIsClicked([...isClicked, id])
    }
  }

  //change color if statement is clicked
  const styleIfClicked = (id) => {
    if (isClicked.includes(id)) {
      return 'green'
    }
  }

  return (
    <>
      <Container>
        {statements.map((item, index) => {
          return (
            <Item bg={styleIfClicked(item.id)} id={item.id} key={index} onClick={() => handleClick(item.id)}>
              {item.statement}
            </Item>
          )
        })}
      </Container>
      <ButtonReset onClick={() => setIsClicked([])}>RESET</ButtonReset>
    </>
  )
}

const ButtonReset = styled.button`
  background-color: rgb(255, 255, 255, 0.5);
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s, transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  :focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  :active {
    background-color: #f7f7f7;
    border-color: #000000;
    transform: scale(0.96);
  }

  :disabled {
    border-color: #dddddd;
    color: #dddddd;
    cursor: not-allowed;
    opacity: 1;
  }
`

const Container = styled.div`
  display: grid;
  background-color: transparent;
  align-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  height: 70vh;
  margin: 20px 20px;
  width: 100vw;
`

const Item = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.bg === 'green' ? 'rgb(111, 247, 170)' : 'rgb(248,248,248,0.9)')};
  border: 1px solid var(--border-seperator);
  justify-content: center;
`
