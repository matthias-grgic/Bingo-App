import styled from 'styled-components'

export default function ButtonReset({ handleClick, buttonName }) {
  return <ButtonResetStyled onClick={() => handleClick()}>{buttonName}</ButtonResetStyled>
}

const ButtonResetStyled = styled.button`
  background-color: rgb(255, 255, 255, 0);
  border: 1px solid #222222;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  font-size: clamp(2rem, 3vw, 3rem);
  font-weight: 600;
  line-height: 20px;
  outline: none;
  padding: clamp(1rem, 2vw, 1.5rem);
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s, transform 0.1s;
  user-select: none;
  z-index: 1;

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
