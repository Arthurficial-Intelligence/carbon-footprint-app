import Layout from '../components/layout'
import { SurveyProvider } from '../context/SurveyContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SurveyProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SurveyProvider>
  )
}

export default MyApp
