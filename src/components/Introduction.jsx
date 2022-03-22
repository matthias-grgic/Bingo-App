import styled from 'styled-components'

export default function Introduction() {
  return (
    <>
      <TextStyled>
        {`Lets Play Covid Variant Bingo!
        `}
      </TextStyled>
    </>
  )
}

const TextStyled = styled.article`
  display: flex;
  align-items: center;
  color: var(--main-txt-color);
  font-size: clamp(1.5rem, 1.5vw, 3rem);
  justify-content: center;
  padding: 0 1rem 0 1rem;
  text-align: left;
  white-space: pre-line;
  width: 55%;
  z-index: 2;

  @media (min-width: 810px) {
    padding: 0 4rem 0 4rem;
  }

  @media (max-width: 400px) {
    hyphens: auto;
    width: 100%;
  }
`
