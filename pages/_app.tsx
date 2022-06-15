import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import {LightTheme} from '../styles/themes/Light';
import Head from 'next/head';
import {ToastyProvider} from "../src/contexts/Toasty";

function MyApp({ Component, pageProps }: AppProps) {

  return(
    <>
      <Head>
        <title>Next Olx</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={LightTheme}> 
        <ToastyProvider>
          <Component {...pageProps} />
        </ToastyProvider>
      </ThemeProvider> 
    </>
  ) 
}

export default MyApp
