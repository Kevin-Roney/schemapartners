import Head from 'next/head'
import Script from 'next/script'

import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/globals.css'

//
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.page} id='booger'>
      <Script strategy="lazyOnload"
        src={'https://www.googletagmanager.com/gtag/js?id=G-P4V5WSCDYP'}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-P4V5WSCDYP'); 
       `}
      </Script>
      <Head>
        <title>Schema Partners</title>
        <meta name="description" content="A Certified Value Analyst offering Mergers and Aquisitions Advising" />
        <link rel="icon" href="/SchemaPartners-Icon.svg" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
