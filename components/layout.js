import Script from 'next/script'
import Footer from './footer'
import Header from './header'

export default function ({ children, showHeader = true, showFooter = true }) {
  return (
    <>
      <title>Hafsa Home</title>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* favicon */}
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="assets/images/x-icon/01.png"
      />

      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/all.min.css" />
      <link rel="stylesheet" href="assets/css/icofont.min.css" />
      <link rel="stylesheet" href="assets/css/lightcase.css" />
      <link rel="stylesheet" href="assets/css/swiper.min.css" />
      <link rel="stylesheet" href="assets/css/style.css" />

      {showHeader && <Header />}

      {children}

      {showFooter && <Footer />}

      {/* scrollToTop start here */}
      <a href="#" className="scrollToTop">
        <i className="icofont-bubble-up" />
        <span className="pluse_1" />
        <span className="pluse_2" />
      </a>
      {/* scrollToTop ending here */}

      <Script src="assets/js/jquery.js" />
      <Script src="assets/js/fontawesome.min.js" />
      <Script src="assets/js/waypoints.min.js" />
      <Script src="assets/js/bootstrap.bundle.min.js" />
      <Script src="assets/js/swiper.min.js" />
      <Script src="assets/js/circularProgressBar.min.js" />
      <Script src="assets/js/isotope.pkgd.min.js" />
      <Script src="assets/js/lightcase.js" />
      <Script src="assets/js/functions.js" />
    </>
  )
}