import styled from 'styled-components'
import { shuffledArray } from '../lib/statements'
import { useState, useEffect } from 'react'
import LottieAnimation from '../components/LottieAnimation'
import LottieAnimationTwo from '../components/LottieAnimationTwo'
import ButtonReseter from '../components/ButtonReset'

export default function BingoComponent() {
  const [howManyBingos, setHowManyBingos] = useState(0)
  const [isClicked, setIsClicked] = useState([12])

  //all Bingo Wins
  const allBingos = [
    //Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Across
    [0, 4, 8],
    [2, 4, 6],
  ]

  //let the loop run only once if bingo is achieved
  const [allVar, setAllVar] = useState({ var0: true, var1: true, var2: true, var3: true, var4: true, var5: true, var6: true, var7: true })

  //check for doubles in array and add ID
  const handleClick = (id) => {
    if (!isClicked.includes(id)) setIsClicked([...isClicked, id])
  }

  //Reset Button
  const resetVariables = () => setAllVar({ ...Object.keys(allVar).reduce((reduced, key) => ({ ...reduced, [key]: true }), {}) })
  const handleReset = () => setIsClicked([12]) + resetVariables()

  //change color if clicked
  const styleIfClicked = (id) => {
    if (isClicked.includes(id)) return 'green'
  }

  //check if Bingo is achieved
  const checker = (arr, target) => target.every((item) => arr.includes(item))

  useEffect(() => {
    if (checker(isClicked, allBingos[0]) === true && allVar.var0) {
      setHowManyBingos(howManyBingos + 1) + setAllVar({ ...allVar, var0: false })
    } else if (checker(isClicked, allBingos[1]) === true && allVar.var1) {
      setHowManyBingos(howManyBingos + 1) + setAllVar({ ...allVar, var1: false })
    } else if (checker(isClicked, allBingos[2]) === true && allVar.var2) {
      setHowManyBingos(howManyBingos + 1) + setAllVar({ ...allVar, var2: false })
    } else if (checker(isClicked, allBingos[3]) === true && allVar.var3) {
      setHowManyBingos(howManyBingos + 1) + setAllVar({ ...allVar, var3: false })
    } else if (checker(isClicked, allBingos[4]) === true && allVar.var4) {
      setHowManyBingos(howManyBingos + 1) + setAllVar({ ...allVar, var4: false })
    } else if (checker(isClicked, allBingos[5]) === true && allVar.var5) {
      setHowManyBingos(howManyBingos + 1) + setAllVar({ ...allVar, var5: false })
    } else if (checker(isClicked, allBingos[6]) === true && allVar.var6) {
      setHowManyBingos(howManyBingos + 1) + setAllVar({ ...allVar, var6: false })
    } else if (checker(isClicked, allBingos[7]) === true && allVar.var7) {
      setHowManyBingos(howManyBingos + 1) + setAllVar({ ...allVar, var7: false })
    }
  }, [isClicked])

  // Bingo Check - Iterate over all Bingo Wins and compare to currently clicked numbers
  // useEffect(() => {
  //   for (let i = 0; i < allBingos.length; i++) {
  //     const createVar = Boolean(`allVar.var${i}`)
  //     if (checker(isClicked, allBingos[i]) === true && createVar) {
  //       setHowManyBingos(howManyBingos + 1) + setAllVar({ ...allVar, [`var${i}`]: false })
  //     }
  //   }
  // }, [isClicked])
  // console.log(allVar)
  // console.log(allVar)
  //assets2.lottiefiles.com/packages/lf20_ppL5oX.json
  https: return (
    <>
      <LottieAnimationTwo />
      <Container>
        {shuffledArray.map((item, index, arr) => {
          return (
            <Item bg={styleIfClicked(index)} id={index} key={index} onClick={() => handleClick(index)}>
              {item.statement}
            </Item>
          )
        })}
      </Container>
      <LottieContainer status={howManyBingos} onClick={() => setHowManyBingos(howManyBingos - 1)}>
        <LottieAnimation />
      </LottieContainer>
      <ButtonReseter handleClick={handleReset} buttonName={'RESET'} />
    </>
  )
}

const Container = styled.section`
  display: grid;
  background-color: transparent;
  align-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 70vh;
  justify-content: center;
  margin: 15px 0 15px 0;
  padding: 10px;
  width: 100vw;
  z-index: 1;
  @media (min-width: 1400px) {
    padding: 0 15rem 0 15rem;
  }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => (props.bg === 'green' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.8)')};
  color: var(--main-txt-color);
  cursor: pointer;
  border: 1px solid rgb(167, 167, 167, 0.2);
  font-size: clamp(1rem, 1.5vw, 2rem);
  font-weight: 500;
  justify-content: center;
  text-align: center;
  :hover {
    background: rgb(230, 230, 250, 0.5);
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
  z-index: 1;
`
