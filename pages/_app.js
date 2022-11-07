// import '../styles/globals.css'

import Layout from "../components/layout"

function MyApp({ Component, pageProps }) {
  return <>
    <Layout>
      {/* preloader start here */}
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span />
            <span />
          </div>
        </div>
      </div>
      {/* preloader ending here */}

      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
