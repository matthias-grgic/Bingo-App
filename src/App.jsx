import styled from 'styled-components'
import Bingo from './page/Bingo'
import Header from './components/Header'
import Welcome from './page/Welcome'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <MainStyled>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route
          path='/bingo'
          element={
            <>
              <Header />
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
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`
