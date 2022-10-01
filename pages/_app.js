import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/nes.css'
import '../styles/nes.custom.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}