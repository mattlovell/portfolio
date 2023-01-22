import { AppProps } from 'next/app'
import '../scss/app.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
