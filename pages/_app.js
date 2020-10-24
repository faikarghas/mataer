import React,{useEffect} from 'react'
import '../sass/main.scss'
import smoothscroll from 'smoothscroll-polyfill';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    smoothscroll.polyfill();
  }, [])


  return <Component {...pageProps} />
}

export default MyApp
