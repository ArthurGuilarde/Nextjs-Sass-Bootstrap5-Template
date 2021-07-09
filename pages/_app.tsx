// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'

// own css files here
// import "../css/customcss.css"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  // add bootstrap  js
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
}, [])
  return <Component {...pageProps} />
}
export default MyApp
