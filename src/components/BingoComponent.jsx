/* eslint-disable max-len */
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { shuffledArray } from '../lib/statements'
import LottieAnimation from './LottieAnimation'
import ButtonReseter from './ButtonReset'

export default function BingoComponent() {
  const [howManyBingos, setHowManyBingos] = useState(false)
  const [isClicked, setIsClicked] = useState([12])

  const [allVar, setAllVar] = useState({
    var0: true,
    var1: true,
    var2: true,
    var3: true,
    var4: true,
    var5: true,
    var6: true,
    var7: true,
    var8: true,
    var9: true,
    var10: true,
    var11: true,
  })

  // Add and check for doubles
  const handleClick = (id) => {
    if (!isClicked.includes(id)) setIsClicked([...isClicked, id])
  }

  // Reset Button
  const resetVariables = () => setAllVar({ ...Object.keys(allVar).reduce((reduced, key) => ({ ...reduced, [key]: true }), {}) })
  const handleReset = () => setIsClicked([12]) + resetVariables()

  // Change color if clicked
  const styleIfClicked = (id) => {
    if (isClicked.includes(id)) {
      return 'clicked'
    }
    return 'notclicked'
  }

  // Check if Bingo
  const checker = (arr, target) => target.every((item) => arr.includes(item))

  // Iterate over all Bingo Wins and compare to currently clicked numbers
  useEffect(() => {
    const allBingos = [
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
    ]
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < allBingos.length; i++) {
      const keys = Object.keys(allVar)
      if (checker(isClicked, allBingos[i]) === true && allVar[keys[i]]) {
        setHowManyBingos(true) + setAllVar({ ...allVar, [keys[i]]: false })
      }
    }
  }, [allVar, isClicked])

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
          }
          if (arr.length - 5 === index) {
            return (
              <Item style={{ borderBottomLeftRadius: '15px' }} bg={styleIfClicked(index)} id={index} key={index} onClick={() => handleClick(index)}>
                {item.statement}
              </Item>
            )
          }
          if (arr.length - 25 === index) {
            return (
              <Item style={{ borderTopLeftRadius: '15px' }} bg={styleIfClicked(index)} id={index} key={index} onClick={() => handleClick(index)}>
                {item.statement}
              </Item>
            )
          }
          if (arr.length - 21 === index) {
            return (
              <Item style={{ borderTopRightRadius: '15px' }} bg={styleIfClicked(index)} id={index} key={index} onClick={() => handleClick(index)}>
                {item.statement}
              </Item>
            )
          }
          return (
            <Item bg={styleIfClicked(index)} id={index} key={index} onClick={() => handleClick(index)}>
              {item.statement}
            </Item>
          )
        })}
      </Container>
      <LottieContainer status={howManyBingos} onClick={() => setHowManyBingos(false)}>
        <LottieAnimation />
      </LottieContainer>
      <ButtonReseter handleClick={handleReset} buttonName='RESET' />
    </>
  )
}

const Container = styled.section`
  display: grid;
  align-content: center;
  background-color: transparent;
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
  background: ${(props) => (props.bg === 'clicked' ? 'transparent' : '#ffffff')};
  border: 1px solid rgb(167, 167, 167, 0.2);
  color: var(--main-txt-color);
  cursor: pointer;
  font-size: clamp(0.7rem, 1.5vw, 1.2rem);
  justify-content: center;
  text-align: center;
  :hover {
    background: transparent;
  }
`

const LottieContainer = styled.div`
  display: ${(props) => (props.status % 2 !== 0 ? 'flex' : 'none')};
  align-items: center;
  background-color: transparent;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
`
