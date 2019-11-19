import WeatherForecast from 'components/WeatherForecast'
import GlobalTheme, { GlobalStyle } from 'constants/GlobalTheme'
import React, { Suspense } from 'react'
import { hot } from 'react-hot-loader'
import { ThemeProvider } from 'styled-components'
import Layout from './templates/Layout'

const App = () => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Suspense fallback={() => <div>loading...</div>}>
        <GlobalStyle />
        <Layout>
          <WeatherForecast />
        </Layout>
      </Suspense>
    </ThemeProvider>
  )
}

export default hot(module)(App)
