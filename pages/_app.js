import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function App({Component, pageProps}) {
  return (
    <Layout>
      <Head>
        <title>Travel Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="NextJS Blog website"></meta>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Nav/>
      <Component {...pageProps} /> 
      <Footer/>     
    </Layout> 
  )
}