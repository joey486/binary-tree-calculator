import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className} style={{ width: '100%', height: '100%', overflow: 'scroll' }}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp