import '@/styles/globals.css'
import { DevProvider } from '@/context/DevProvider'

export default function App({ Component, pageProps }) {
  return ( 
    <DevProvider>
      <Component {...pageProps} />
    </DevProvider>
    )
}
