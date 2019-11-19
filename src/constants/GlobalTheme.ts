import { createGlobalStyle, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    primary: '#990f6b',
    background: '#efefef',
    sunColor: '#eb6e4b',
  },
}

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
  }
`

export default theme
