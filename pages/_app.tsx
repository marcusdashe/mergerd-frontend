import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
            <header>Jos Times</header>
            <hr />
            <Component {...pageProps} />
          </>
      )
}

export default MyApp
