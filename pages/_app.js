import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'


function MyApp({ Component, pageProps }) {
  return <div className={styles.page}>
    <Head>
      <title>Schema Partners</title>
      <meta name="description" content="A Certified Value Analyst offering Mergers and Aquisitions Advising" />
      <link rel="icon" href="/SchemaPartners-Icon.svg" />
    </Head>
    <Header />
    <main >
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>
}

export default MyApp
