import { useState } from 'react'
import styled from 'styled-components'
import Bingo from './page/Bingo'
import Hello from './page/Hello'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <MainStyled>
      <Routes>
        <Route path='/' element={<Hello />} />
        <Route
          path='/bingo'
          element={
            <>
              <Hello />
              <Bingo />
            </>
          }
        />
      </Routes>
    </MainStyled>
  )
}

export default App

const MainStyled = styled.div`
  display: flex;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`
