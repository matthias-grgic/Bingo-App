import styled from 'styled-components'
import { shuffledArray } from '../lib/statements'
import { useState, useEffect } from 'react'
import LottieAnimation from '../components/LottieAnimation'

export default function Bingo() {
  const [isClicked, setIsClicked] = useState([12])
  const [isBingo, setIsBingo] = useState(false)

  const bingoOne = [0, 1, 2, 3, 4]
  const bingoTwo = [5, 6, 7, 8, 9]
  const bingoThree = [10, 11, 12, 13, 14]
  const bingoFour = [15, 16, 17, 18, 19]
  const bingoFive = [20, 21, 22, 23, 24]
  const bingoSix = [0, 5, 10, 15, 20]
  const bingoSeven = [1, 6, 11, 16, 21]
  const bingoEight = [2, 7, 12, 17, 22]
  const bingoNine = [3, 8, 13, 18, 23]
  const bingoTen = [4, 9, 14, 19, 24]
  const bingoEleven = [0, 6, 12, 18, 24]
  const bingoTwelve = [4, 8, 12, 16, 20]

  // const bingos = [
  //   [0, 1, 2, 3, 4],
  //   [5, 6, 7, 8, 9],
  //   [10, 11, 12, 13, 14],
  //   [15, 16, 17, 18, 19],
  //   [20, 21, 22, 23, 24],
  //   [0, 5, 10, 15, 20],
  //   [1, 6, 11, 16, 21],
  //   [2, 7, 12, 17, 22],
  //   [3, 8, 13, 18, 23],
  //   [4, 9, 14, 19, 24],
  //   [0, 6, 12, 18, 24],
  //   [4, 8, 12, 16, 20],
  // ]

  //check doubles in array - if not ad statement to array
  const handleClick = (id) => {
    if (!isClicked.includes(id)) setIsClicked([...isClicked, id])
  }

  //change color if statement is clicked
  const styleIfClicked = (id) => {
    if (isClicked.includes(id)) return 'green'
  }

  //check if its Bingo and update useState // working but too much repeat
  const checker = (arr, target) => target.every((item) => arr.includes(item))
  useEffect(() => {
    if (checker(isClicked, bingoOne) === true) {
      setIsBingo(true)
    } else if (checker(isClicked, bingoTwo) === true) {
      setIsBingo(true)
    } else if (checker(isClicked, bingoThree) === true) {
      setIsBingo(true)
    } else if (checker(isClicked, bingoFour) === true) {
      setIsBingo(true)
    } else if (checker(isClicked, bingoFive) === true) {
      setIsBingo(true)
    } else if (checker(isClicked, bingoSix) === true) {
      setIsBingo(true)
    } else if (checker(isClicked, bingoSeven) === true) {
      setIsBingo(true)
    } else if (checker(isClicked, bingoEight) === true) {
      setIsBingo(true)
    } else if (checker(isClicked, bingoNine) === true) {
      setIsBingo(true)
    } else if (checker(isClicked, bingoTen) === true) {
      setIsBingo(true)
    } else if (checker(isClicked, bingoEleven) === true) {
      setIsBingo(true)
    } else if (checker(isClicked, bingoTwelve) === true) {
      setIsBingo(true)
    }
  })

  // Try to reduce Code with for loop
  //
  // useEffect(() => {
  //   for (let i = 0; i < bingos.length; i++) {
  //     for (let j = 0; j < bingos[i].length; j++) {
  //       return console.log(isClicked.every(() => [j].includes()))
  //     }
  //   }
  // })

  return (
    <>
      <Container>
        {shuffledArray.map((item, index) => {
          return (
            <Item bg={styleIfClicked(index)} id={index} key={index} onClick={() => handleClick(index)}>
              {item.statement}
            </Item>
          )
        })}
      </Container>
      <LottieContainer status={isBingo} onClick={() => setIsClicked([12]) + setIsBingo(false)}>
        <LottieAnimation />
      </LottieContainer>
      <ButtonReset onClick={() => setIsClicked([12]) + setIsBingo(false)}>RESET</ButtonReset>
    </>
  )
}

const ButtonReset = styled.button`
  background-color: rgb(255, 255, 255, 0);
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
  font-size: clamp(2rem, 3vw, 3rem);
  font-weight: 600;
  line-height: 20px;
  outline: none;
  padding: clamp(1rem, 2vw, 1.5rem);
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s, transform 0.1s;
  user-select: none;
  width: auto;

  :focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.2) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  :active {
    background-color: rgb(255, 255, 255, 0.2);
    border-color: #000000;
    transform: scale(0.96);
  }

  :disabled {
    background-color: rgb(255, 255, 255, 0.2);
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
  justify-content: center;
  margin: 15px 0 15px 0;
  padding: 5px;
  width: 100vw;
`

const Item = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.bg === 'green' ? 'rgb(111, 247, 170)' : 'rgb(248,248,248,0.9)')};
  border: 1px solid var(--border-seperator);
  font-size: clamp(0.7rem, 1.2vw, 1.5rem);
  justify-content: center;
`

const LottieContainer = styled.div`
  display: ${(props) => (props.status === true ? 'flex' : 'none')};
  align-items: center;
  background-color: transparent;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
`
