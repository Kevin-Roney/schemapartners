import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.page} id='booger'>
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
