import styled from 'styled-components'
import { shuffledArray } from '../lib/statements'
import { useState, useEffect } from 'react'
import LottieAnimation from '../components/LottieAnimation'
import ButtonReseter from '../components/ButtonReset'

export default function Bingo() {
  const [howManyBingos, setHowManyBingos] = useState(0)
  const [isClicked, setIsClicked] = useState([12])
  const [allBingos, setAllBingos] = useState([
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ])

  let [var1, setVar1] = useState(true)
  let [var2, setVar2] = useState(true)
  let [var3, setVar3] = useState(true)
  let [var4, setVar4] = useState(true)
  let [var5, setVar5] = useState(true)
  let [var6, setVar6] = useState(true)
  let [var7, setVar7] = useState(true)
  let [var8, setVar8] = useState(true)
  let [var9, setVar9] = useState(true)
  let [var10, setVar10] = useState(true)
  let [var11, setVar11] = useState(true)

  //check for doubles in array
  const handleClick = (id) => {
    if (!isClicked.includes(id)) setIsClicked([...isClicked, id])
  }

  //Reset Button
  const handleReset = () => setIsClicked([12]) + setIsBingo(false)

  //change color if clicked
  const styleIfClicked = (id) => {
    if (isClicked.includes(id)) return 'green'
  }

  // if Bingo success, remove variant from Bingo Array
  const remover = () => {
    allBingos.filter((word) => word.bingo.includes(isClicked))
  }

  // check if Bingo and setUseState
  const checker = (arr, target) => target.every((item) => arr.includes(item))
  useEffect(() => {
    if (checker(isClicked, [0, 1, 2, 3, 4]) === true && var1) {
      setHowManyBingos(howManyBingos + 1) + setVar1(false)
    } else if (checker(isClicked, [5, 6, 7, 8, 9]) === true) {
      setHowManyBingos(howManyBingos + 1) + setVar2(false)
    } else if (checker(isClicked, [10, 11, 12, 13, 14]) === true) {
      setHowManyBingos(howManyBingos + 1) + setVar3(false)
    } else if (checker(isClicked, [15, 16, 17, 18, 19]) === true) {
      setHowManyBingos(howManyBingos + 1) + setVar4(false)
    } else if (checker(isClicked, [20, 21, 22, 23, 24]) === true) {
      setHowManyBingos(howManyBingos + 1) + setVar5(false)
    } else if (checker(isClicked, [0, 5, 10, 15, 20]) === true) {
      setHowManyBingos(howManyBingos + 1) + setVar6(false)
    } else if (checker(isClicked, [1, 6, 11, 16, 21]) === true) {
      setHowManyBingos(howManyBingos + 1) + setVar7(false)
    } else if (checker(isClicked, [2, 7, 12, 17, 22]) === true) {
      setHowManyBingos(howManyBingos + 1) + setVar8(false)
    } else if (checker(isClicked, [3, 8, 13, 18, 23]) === true) {
      setHowManyBingos(howManyBingos + 1) + setVar9(false)
    } else if (checker(isClicked, [4, 9, 14, 19, 24]) === true) {
      setHowManyBingos(howManyBingos + 1) + setVar10(false)
    } else if (checker(isClicked, [0, 6, 12, 18, 24]) === true) {
      setHowManyBingos(howManyBingos + 1) + setVar11(false)
    } else if (checker(isClicked, [4, 8, 12, 16, 20]) === true) {
      setHowManyBingos(howManyBingos + 1) + setVar12(false)
    }
  }, [isClicked])

  console.log(howManyBingos)
  console.log(isClicked)
  console.log(var1)

  return (
    <>
      <Container>
        {shuffledArray.map((item, index, arr) => {
          if (arr.length - 1 === index) {
            return (
              <Item style={{ borderBottomRightRadius: '15px' }} bg={styleIfClicked(index)} id={index} key={index} onClick={() => handleClick(index)}>
                {item.statement}
              </Item>
            )
          } else if (arr.length - 5 === index) {
            return (
              <Item style={{ borderBottomLeftRadius: '15px' }} bg={styleIfClicked(index)} id={index} key={index} onClick={() => handleClick(index)}>
                {item.statement}
              </Item>
            )
          } else if (arr.length - 25 === index) {
            return (
              <Item style={{ borderTopLeftRadius: '15px' }} bg={styleIfClicked(index)} id={index} key={index} onClick={() => handleClick(index)}>
                {item.statement}
              </Item>
            )
          } else if (arr.length - 21 === index) {
            return (
              <Item style={{ borderTopRightRadius: '15px' }} bg={styleIfClicked(index)} id={index} key={index} onClick={() => handleClick(index)}>
                {item.statement}
              </Item>
            )
          } else {
            return (
              <Item bg={styleIfClicked(index)} id={index} key={index} onClick={() => handleClick(index)}>
                {item.statement}
              </Item>
            )
          }
        })}
      </Container>
      <LottieContainer status={howManyBingos} onClick={() => setHowManyBingos(howManyBingos - 1)}>
        <LottieAnimation />
      </LottieContainer>
      <ButtonReseter handleReset={handleReset} />
    </>
  )
}

const Container = styled.div`
  display: grid;
  background-color: transparent;
  align-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  height: 70vh;
  justify-content: center;
  margin: 15px 0 15px 0;
  padding: 10px;
  width: 100vw;
  @media (min-width: 1400px) {
    padding: 0 15rem 0 15rem;
  }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => (props.bg === 'green' ? 'transparent' : 'white')};
  color: var(--main-txt-color);
  cursor: pointer;
  border: 1px solid rgb(167, 167, 167, 0.2);
  font-size: clamp(0.7rem, 1.5vw, 1.2rem);
  justify-content: center;
  text-align: center;
  :hover {
    background: transparent;
  }
`

const LottieContainer = styled.div`
  display: ${(props) => (props.status % 2 != 0 ? 'flex' : 'none')};
  align-items: center;
  background-color: transparent;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
`
// Try to reduce Code with for loop
//
// useEffect(() => {
//   for (let i = 0; i < bingos.length; i++) {
//     for (let j = 0; j < bingos[i].length; j++) {
//       return console.log(isClicked.every(() => [j].includes()))
//     }
//   }
// })
//
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
