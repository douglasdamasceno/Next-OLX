import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import {LightTheme} from '../styles/themes/Light';
function MyApp({ Component, pageProps }: AppProps) {

  return(
    <ThemeProvider theme={LightTheme}> 
      <Component {...pageProps} />
    </ThemeProvider> 
  ) 
}

export default MyApp
