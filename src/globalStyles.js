import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root{
  --main-txt-color: #313131;
  --secondary-txt-color: #919191;
  --border-seperator: #e4e4e4;
}

* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}

a {
  color: var(--main-txt-color);
        text-decoration: none;
        
    }
h1, h2, h3 ,h4 ,h5, h6 {
  background-color: transparent;
  color: var(--main-txt-color);
  font-family: 'Poppins', sans-serif; 
}

h1 {
  font-size: clamp(100%, 2rem + 4vw, 44px);
}
`

export default GlobalStyle
