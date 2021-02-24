import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ChallengesProvider } from 'contexts/ChallengesContext'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'


function App({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ChallengesProvider>
  )
}

export default App