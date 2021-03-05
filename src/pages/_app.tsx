import { UserProvider } from 'contexts/UserContext'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'


function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App