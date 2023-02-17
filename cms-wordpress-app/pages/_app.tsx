import { AppProps } from 'next/app'
import '../scss/app.css'

function Portfolio({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


export default Portfolio
