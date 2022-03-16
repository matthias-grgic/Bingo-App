import styled from 'styled-components'

export default function Introduction() {
  return (
    <>
      <TextStyled>
        {`
        Passend zu jeder Weltklimakonferenz könnt ihr hier die populärsten Aussagen der TeilnehmerInnen schon vorweg durch spielen - im Phrasenbingo Klima Edition.
        `}
      </TextStyled>
    </>
  )
}

const TextStyled = styled.article`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: var(--main-txt-color);
  font-size: clamp(1.5rem, 2vw, 3rem);
  hyphens: auto;
  justify-content: center;
  padding: 0 1rem 0 1rem;
  text-align: left;
  white-space: pre-line;
  @media (min-width: 810px) {
    padding: 0 13rem 0 13rem;
  }
  z-index: 2;
`
