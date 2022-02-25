import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root{
  --main-txt-color: #313131;
  --header-txt-color: #616161;
  --secondary-txt-color: #919191;
  --disabled-txt-color: #C2C2C2;
  --main-box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  --border-seperator: #e4e4e4;
}
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: rgb(255,255,255)
}
a {
  color: var(--main-txt-color);
        text-decoration: none;
        
    }
h1, h2, h3 ,h4 ,h5, h6 {
  color: var(--main-txt-color);
  font-family: 'Poppins', sans-serif; 
}
`

export default GlobalStyle
