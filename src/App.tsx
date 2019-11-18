import Button from '@material-ui/core/Button'
import GlobalTheme, { GlobalStyle } from 'constants/GlobalTheme'
import React, { Suspense } from 'react'
import { hot } from 'react-hot-loader'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Suspense fallback={() => <div>loading...</div>}>
        <GlobalStyle />
        <Button>Ahoj</Button>
      </Suspense>
    </ThemeProvider>
  )
}

export default hot(module)(App)
