import { useState } from 'react'
import styled from 'styled-components'
import Bingo from './page/bingo'
import Hello from './page/hello'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <MainStyled>
      <Routes>
        <Route path='/' element={<Hello />} />
        <Route path='/bingo' element={<Bingo />} />
      </Routes>
    </MainStyled>
  )
}

export default App

const MainStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`
