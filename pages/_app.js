import React,{useEffect} from 'react'
import '../sass/main.scss'
import smoothscroll from 'smoothscroll-polyfill';
 
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // kick off the polyfill!
    smoothscroll.polyfill();
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
