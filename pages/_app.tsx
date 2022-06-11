import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import {DarkTheme} from '../styles/themes/Dark';
function MyApp({ Component, pageProps }: AppProps) {

  return(
    <ThemeProvider theme={DarkTheme}> 
      <Component {...pageProps} />
    </ThemeProvider> 
  ) 
}

export default MyApp
