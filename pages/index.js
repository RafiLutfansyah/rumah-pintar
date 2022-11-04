import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Home() {
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
      {/* Header Section Starts Here */}
      <header className="header-3 pattern-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-3 col-12">
              <div className="mobile-menu-wrapper d-flex flex-wrap align-items-center justify-content-between">
                <div className="header-bar d-lg-none">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="logo">
                  <a href="index.html">
                    <img
                      src="assets/images/logo/01.png
                          "
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="ellepsis-bar d-lg-none">
                  <i className="fas fa-ellipsis-h" />
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-12">
              <div className="header-top">
                <div className="header-top-area">
                  <ul className="left lab-ul">
                    <li>
                      <i className="icofont-ui-call" />{" "}
                      <span>+800-123-4567 6587</span>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" /> Beverley, New York 224
                      US
                    </li>
                  </ul>
                  <ul className="social-icons lab-ul d-flex">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-messenger" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-vimeo-v" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-skype" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-wifi" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-bottom">
                <div className="header-wrapper">
                  <div className="menu-area justify-content-between w-100">
                    <ul className="menu lab-ul">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="#0">Events</a>
                        <ul className="submenu">
                          <li>
                            <a href="events.html">Events</a>
                          </li>
                          <li>
                            <a href="events-single.html">Events Single</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#0">Programs</a>
                        <ul className="submenu">
                          <li>
                            {" "}
                            <a href="programs.html">Programs</a>
                          </li>
                          <li>
                            <a href="program-single.html">Program Single</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#0">Pages</a>
                        <ul className="submenu">
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="#0">Scholars</a>
                            <ul className="submenu">
                              <li>
                                <a href="scholar.html">Our Scholars</a>
                              </li>
                              <li>
                                <a href="scholar-single.html">Scholar Single</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#0">Blog</a>
                            <ul className="submenu">
                              <li>
                                <a href="blog.html">blog</a>
                              </li>
                              <li>
                                <a href="blog-single.html">Blog Single</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="sermons.html">Sermons</a>
                          </li>
                          <li>
                            <a href="services.html">Service</a>
                          </li>
                          <li>
                            <a href="404.html">404 Error</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming-soon</a>
                          </li>
                          <li>
                            <a href="registration.html">Registration</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                    <div className="prayer-time d-none d-lg-block">
                      <a href="#" className="prayer-time-btn">
                        <i className="icofont-clock-time" /> Today Prayer Time
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Section Ends Here*/}
      {/* Banner Section start here */}
      <section className="banner-section">
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6">
              <div className="banner-item">
                <div className="banner-inner">
                  <div className="banner-thumb">
                    <img src="assets/images/banner/01.png" alt="Banner-image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner-item">
                <div className="banner-inner">
                  <div className="banner-content align-middle">
                    <h1>
                      <span className="">
                        And Allah Invites To <br className="d-none d-lg-block" />
                        The{" "}
                      </span>
                      Home Of Peace
                    </h1>
                    <p>
                      The most beloved actions to Allah are those performed
                      consistently, even if they are few
                    </p>
                    <a href="#" className="lab-btn mt-3">
                      Donate Now <i className="icofont-heart-alt" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section end here */}
      {/* About section start here */}
      <section className="about-section padding-tb shape-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="lab-item">
                <div className="lab-inner">
                  <div className="lab-content">
                    <div className="header-title text-start m-0">
                      <h5>About Our History</h5>
                      <h2 className="mb-0">
                        Islamic Center For Muslims To Achieve Spiritual Goals
                      </h2>
                    </div>
                    <h5 className="my-4">
                      Our Promise To Uphold The Trust Placed.
                    </h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                      molestias culpa reprehenderit delectus, ullam harum,
                      voluptatum numquam ati nesciunt odit quis corrupti magni quam
                      consequatur sint ipsum tecto exercitationem, illo quisquam.
                      Reprehenderit ut placeat cum adantium nam magnam blanditiis
                      sequi modi! Nesciunt, repudiandae eos eniam quod maxime
                      corrupti eligendi ea in animi.
                    </p>
                    <a href="#" className="lab-btn mt-4">
                      Ask About Islam <i className="icofont-heart-alt" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="lab-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <div className="img-grp">
                      <div className="about-circle-wrapper">
                        <div className="about-circle-2" />
                        <div className="about-circle" />
                      </div>
                      <div className="about-fg-img">
                        <img src="assets/images/about/02.png" alt="about-image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About section end here */}
      {/* Feature Section Start Here */}
      <section className="feature-section bg-ash padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="lab-item feature-item text-xs-center">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img src="assets/images/feature/01.png" alt="feature-image" />
                  </div>
                  <div className="lab-content">
                    <h5>Quran Studies</h5>
                    <p>
                      Lorem ipsum dolor sit, amet is consectetur adipisicing
                      elit.Its expedita porro natus
                    </p>
                    <a href="#" className="text-btn">
                      Sponsor Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="lab-item feature-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img src="assets/images/feature/02.png" alt="feature-image" />
                  </div>
                  <div className="lab-content">
                    <h5>Islamic Classes</h5>
                    <p>
                      Lorem ipsum dolor sit, amet is consectetur adipisicing
                      elit.Its expedita porro natus
                    </p>
                    <a href="#" className="text-btn">
                      Donate Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="lab-item feature-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img src="assets/images/feature/03.png" alt="feature-image" />
                  </div>
                  <div className="lab-content">
                    <h5>Islamic Awareness</h5>
                    <p>
                      Lorem ipsum dolor sit, amet is consectetur adipisicing
                      elit.Its expedita porro natus
                    </p>
                    <a href="#" className="text-btn">
                      Join Us!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="lab-item feature-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img src="assets/images/feature/04.png" alt="feature-image" />
                  </div>
                  <div className="lab-content">
                    <h5>Islamic Services</h5>
                    <p>
                      Lorem ipsum dolor sit, amet is consectetur adipisicing
                      elit.Its expedita porro natus
                    </p>
                    <a href="#" className="text-btn">
                      Get Involved!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section End Here */}
      {/* Service section start here */}
      <section className="service-section padding-tb padding-b shape-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-title">
                <h5>Islamic Center Services</h5>
                <h2>Ethical And Moral Beliefs That Guides To The Straight Path!</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="row g-0 justify-content-center service-wrapper">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="lab-item service-item">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/service/01.jpg"
                          alt="Service-image"
                        />
                      </div>
                      <div className="lab-content pattern-2">
                        <div className="lab-content-wrapper">
                          <div className="content-top">
                            <div className="service-top-thumb">
                              <img
                                src="assets/images/service/01.png"
                                alt="service-icon"
                              />
                            </div>
                            <div className="service-top-content">
                              <span>Building Upgrades</span>
                              <h5>
                                <a href="#"> Mosque Development</a>
                              </h5>
                            </div>
                          </div>
                          <div className="content-bottom">
                            <p>
                              Lorem ipsum, dolor sit amet sectetur adipisicing elit.
                              Vel dicta beatae del voluptas apelas de.
                            </p>
                            <a href="#" className="text-btn">
                              Read More +
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="lab-item service-item">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/service/02.jpg"
                          alt="Service-image"
                        />
                      </div>
                      <div className="lab-content pattern-2">
                        <div className="lab-content-wrapper">
                          <div className="content-top">
                            <div className="service-top-thumb">
                              <img
                                src="assets/images/service/02.png"
                                alt="service-icon"
                              />
                            </div>
                            <div className="service-top-content">
                              <span>Help Poor</span>
                              <h5>
                                <a href="#">Charity And Donation</a>{" "}
                              </h5>
                            </div>
                          </div>
                          <div className="content-bottom">
                            <p>
                              Lorem ipsum, dolor sit amet sectetur adipisicing elit.
                              Vel dicta beatae del voluptas apelas de.
                            </p>
                            <a href="#" className="text-btn">
                              Read More +
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="lab-item service-item">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/service/03.jpg"
                          alt="Service-image"
                        />
                      </div>
                      <div className="lab-content pattern-2">
                        <div className="lab-content-wrapper">
                          <div className="content-top">
                            <div className="service-top-thumb">
                              <img
                                src="assets/images/service/03.png"
                                alt="service-icon"
                              />
                            </div>
                            <div className="service-top-content">
                              <span>Donate &amp; Help</span>
                              <h5>
                                <a href="#">Poor Woman Marriage</a>{" "}
                              </h5>
                            </div>
                          </div>
                          <div className="content-bottom">
                            <p>
                              Lorem ipsum, dolor sit amet sectetur adipisicing elit.
                              Vel dicta beatae del voluptas apelas de.
                            </p>
                            <a href="#" className="text-btn">
                              Read More +
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service section end here */}
      {/* Program section start Here */}
      <section
        className="program-section padding-tb bg-img"
        style={{
          background: "url(assets/images/program/bg.jpg) rgba(5, 21, 57, 0.7)",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-title">
                <h5>Urgent Campaign</h5>
                <h2 className="mb-4">Free And Complete Guide To All Muslims</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="progress-item-wrapper text-center">
                <div className="progress-item mb-4">
                  <div className="progress-bar-wrapper progress" data-percent="50%">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" />
                  </div>
                  <div className="progress-bar-percent d-flex align-items-center justify-content-center">
                    50
                    <sup>%</sup>{" "}
                  </div>
                  <ul className="progress-item-status lab-ul d-flex justify-content-between">
                    <li>
                      Raised<span> $24,000</span>
                    </li>
                    <li>
                      Gold<span> $34,900</span>
                    </li>
                  </ul>
                </div>
                <a href="#" className="lab-btn">
                  Donate Now <i className="icofont-heart-alt" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* upcoming program */}
      <div className="upcoming-programs">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="donation-part bg-img">
                <div className="donation-content">
                  <h5>Help The Poor</h5>
                  <h2>Donations For The Nobel Causes</h2>
                  <p>
                    Give the best quality of security systems and facility of latest
                    technlogy for the people get awesome.
                  </p>
                  <a href="#" className="lab-btn">
                    See All Causes <i className="icofont-heart-alt" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="programs-item-part">
                <div className="program-desc d-flex justify-content-between">
                  <p>
                    We offer security solutions and cost effective service for our
                    client are safe and secure in any situation.
                  </p>
                  <ul className="lab-ul">
                    <li>
                      <a href="#" className="program-next">
                        <i className="icofont-arrow-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="program-prev">
                        <i className="icofont-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="program-item-container">
                  <div className="program-item-wrapper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="program-item">
                          <div className="lab-inner">
                            <div className="lab-thumb">
                              <a href="#">
                                <img
                                  src="assets/images/program/02.jpg"
                                  alt="program-image"
                                />
                              </a>
                              <div className="lab-thumb-content">
                                <div className="progress-item">
                                  <ul className="progress-item-status lab-ul d-flex justify-content-between mb-2">
                                    <li>
                                      Raised<span> $24,000</span>
                                    </li>
                                    <li>
                                      Gold<span> $34,900</span>
                                    </li>
                                  </ul>
                                  <div
                                    className="progress-bar-wrapper progress"
                                    data-percent="50%"
                                  >
                                    <div className="progress-bar progress-bar-striped progress-bar-animated"></div>
                                  </div>
                                  <div className="progress-bar-percent d-flex align-items-center justify-content-center">
                                    50 <sup>%</sup>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lab-content">
                              <span>food distribution</span>
                              <h5>
                                <a href="#">
                                  American Muslim: Choosing Remain Still This
                                  Ramadan
                                </a>{" "}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="program-item">
                          <div className="lab-inner">
                            <div className="lab-thumb">
                              <a href="#">
                                <img
                                  src="assets/images/program/03.jpg"
                                  alt="program-image"
                                />
                              </a>
                              <div className="lab-thumb-content">
                                <div className="progress-item">
                                  <ul className="progress-item-status lab-ul d-flex justify-content-between mb-2">
                                    <li>
                                      Raised<span> $24,000</span>
                                    </li>
                                    <li>
                                      Gold<span> $34,900</span>
                                    </li>
                                  </ul>
                                  <div
                                    className="progress-bar-wrapper progress"
                                    data-percent="70%"
                                  >
                                    <div className="progress-bar progress-bar-striped progress-bar-animated"></div>
                                  </div>
                                  <div className="progress-bar-percent d-flex align-items-center justify-content-center">
                                    70 <sup>%</sup>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lab-content">
                              <span>food distribution</span>
                              <h5>
                                <a href="#">
                                  How to Teach The Kids Ramadan Isn’t About Food
                                </a>{" "}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Program section end Here */}
      {/* Faith section start here */}
      <section className="faith-section padding-tb shape-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-title">
                <h5>The Pillars of Islam</h5>
                <h2>Ethical And Moral Beliefs That Guides To The Straight Path!</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="faith-content">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="shahadah"
                    role="tabpanel"
                    aria-labelledby="sahadah-tab"
                  >
                    <div className="lab-item faith-item tri-shape-1 pattern-2">
                      <div className="lab-inner d-flex align-items-center">
                        <div className="lab-thumb">
                          <img src="assets/images/faith/01.png" alt="faith-image" />
                        </div>
                        <div className="lab-content">
                          <h4>
                            Shahadah <span>(Faith)</span>{" "}
                          </h4>
                          <p>
                            The Shahadah, is an Islamic creed, one of the Five
                            Pillars of Islam and part of the Adhan. It reads: "I
                            bear witness that there is no deity but God, and I bear
                            witness that Muhammad is the messenger of God."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="prayer"
                    role="tabpanel"
                    aria-labelledby="salah-tab"
                  >
                    <div className="lab-item faith-item tri-shape-1 pattern-2">
                      <div className="lab-inner d-flex align-items-center">
                        <div className="lab-thumb">
                          <img src="assets/images/faith/02.png" alt="faith-image" />
                        </div>
                        <div className="lab-content">
                          <h4>
                            Salaah <span>(Prayer)</span>{" "}
                          </h4>
                          <p>
                            Each Muslim should pray five times a day: in the
                            morning, at noon, in the afternoon, after sunset, and
                            early at night. These prayers can be said anywhere,
                            prayers that are said in company of others are better
                            than those said alone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="ramadan"
                    role="tabpanel"
                    aria-labelledby="sawm-tab"
                  >
                    <div className="lab-item faith-item tri-shape-1 pattern-2">
                      <div className="lab-inner d-flex align-items-center">
                        <div className="lab-thumb">
                          <img src="assets/images/faith/03.png" alt="faith-image" />
                        </div>
                        <div className="lab-content">
                          <h4>
                            Sawm <span>(Fasting)</span>{" "}
                          </h4>
                          <p>
                            Each Muslim should pray five times a day: in the
                            morning, at noon, in the afternoon, after sunset, and
                            early at night. These prayers can be said anywhere,
                            prayers that are said in company of others are better
                            than those said alone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="jakat"
                    role="tabpanel"
                    aria-labelledby="zakat-tab"
                  >
                    <div className="lab-item faith-item tri-shape-1 pattern-2">
                      <div className="lab-inner d-flex align-items-center">
                        <div className="lab-thumb">
                          <img src="assets/images/faith/04.png" alt="faith-image" />
                        </div>
                        <div className="lab-content">
                          <h4>
                            Zakat <span>(Almsgiving)</span>{" "}
                          </h4>
                          <p>
                            Each Muslim should pray five times a day: in the
                            morning, at noon, in the afternoon, after sunset, and
                            early at night. These prayers can be said anywhere,
                            prayers that are said in company of others are better
                            than those said alone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="hajj"
                    role="tabpanel"
                    aria-labelledby="hajj-tab"
                  >
                    <div className="lab-item faith-item tri-shape-1 pattern-2">
                      <div className="lab-inner d-flex align-items-center">
                        <div className="lab-thumb">
                          <img src="assets/images/faith/05.png" alt="faith-image" />
                        </div>
                        <div className="lab-content">
                          <h4>
                            Hajj <span>(Pilgrimage)</span>{" "}
                          </h4>
                          <p>
                            Each Muslim should pray five times a day: in the
                            morning, at noon, in the afternoon, after sunset, and
                            early at night. These prayers can be said anywhere,
                            prayers that are said in company of others are better
                            than those said alone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  className="nav nav-pills mb-3 align-items-center justify-content-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="sahadah-tab"
                      data-bs-toggle="pill"
                      href="#shahadah"
                      role="tab"
                      aria-controls="sahadah-tab"
                      aria-selected="true"
                    >
                      <img
                        src="assets/images/faith/faith-icons/01.png"
                        alt="faith-icon"
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="salah-tab"
                      data-bs-toggle="pill"
                      href="#prayer"
                      role="tab"
                      aria-controls="salah-tab"
                      aria-selected="false"
                    >
                      <img
                        src="assets/images/faith/faith-icons/02.png"
                        alt="faith-icon"
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="sawm-tab"
                      data-bs-toggle="pill"
                      href="#ramadan"
                      role="tab"
                      aria-controls="sawm-tab"
                      aria-selected="false"
                    >
                      <img
                        src="assets/images/faith/faith-icons/03.png"
                        alt="faith-icon"
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="zakat-tab"
                      data-bs-toggle="pill"
                      href="#jakat"
                      role="tab"
                      aria-controls="zakat-tab"
                      aria-selected="false"
                    >
                      <img
                        src="assets/images/faith/faith-icons/04.png"
                        alt="faith-icon"
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="hajj-tab"
                      data-bs-toggle="pill"
                      href="#hajj"
                      role="tab"
                      aria-controls="hajj-tab"
                      aria-selected="false"
                    >
                      <img
                        src="assets/images/faith/faith-icons/05.png"
                        alt="faith-icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Faith section end here */}
      {/* Qoute Section start Here */}
      <div className="qoute-section padding-tb">
        <div className="qoute-section-wrapper">
          <div className="qoute-overlay" />
          <div className="container">
            <div className="qoute-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="lab-item qoute-item">
                    <div className="lab-inner d-flex align-items-center">
                      <div className="lab-thumb">
                        <span>Quote From Prophat</span>
                        <i className="icofont-quote-left" />
                      </div>
                      <div className="lab-content">
                        <blockquote className="blockquote">
                          <p>
                            Hazrat Mohammod (s) Said{" "}
                            <span>
                              "It is Better For Any Of You To Carry A Load Of
                              Firewood On His Own Back Than To Beg From Someone
                              Else"
                            </span>{" "}
                          </p>
                          <footer className="blockquote-footer bg-transparent">
                            Riyadh-Us-Saleheen, Chapter 59, hadith 540
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Qoute Section end Here */}
      {/* Events Section start here */}
      <section className="event-section padding-tb padding-b shape-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-title">
                <h5>Upcoming Events</h5>
                <h2>Ethical And Moral Beliefs That Guides To The Straight Path!</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="event-content">
                <div className="event-top tri-shape-2 pattern-2">
                  <div className="event-top-thumb">
                    <img src="assets/images/event/01.jpg" alt="Upcoming-event" />
                  </div>
                  <div className="event-top-content">
                    <div className="event-top-content-wrapper">
                      <h3>
                        <a href="#">Helping Hands For Poor People Marriage Event</a>{" "}
                      </h3>
                      <div className="date-count-wrapper">
                        <ul className="lab-ul event-date">
                          <li>
                            <i className="icofont-calendar" />{" "}
                            <span>December 24,2021</span>
                          </li>
                          <li>
                            <i className="icofont-location-pin" />{" "}
                            <span>New York AK United States</span>
                          </li>
                        </ul>
                        <ul
                          className="lab-ul event-count"
                          data-date="July 05, 2021 21:14:01"
                        >
                          <li>
                            <span className="days">34</span>
                            <div className="count-text">Days</div>
                          </li>
                          <li>
                            <span className="hours">09</span>
                            <div className="count-text">Hours</div>
                          </li>
                          <li>
                            <span className="minutes">32</span>
                            <div className="count-text">Muni</div>
                          </li>
                          <li>
                            <span className="seconds">32</span>
                            <div className="count-text">Seco</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="event-bottom">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="event-item lab-item">
                        <div className="lab-inner">
                          <div className="lab-thumb">
                            <img
                              src="assets/images/event/02.jpg"
                              alt="event-image"
                            />
                          </div>
                          <div className="lab-content">
                            <h5>
                              <a href="#">
                                If Islam Teaches Peace, Why Are there Radical
                                Muslims?
                              </a>{" "}
                            </h5>
                            <ul className="lab-ul event-date">
                              <li>
                                <i className="icofont-calendar" />{" "}
                                <span>December 24,2021</span>
                              </li>
                              <li>
                                <i className="icofont-location-pin" />{" "}
                                <span>New York AK United States</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md col-12">
                      <div className="event-item lab-item">
                        <div className="lab-inner">
                          <div className="lab-thumb">
                            <img
                              src="assets/images/event/03.jpg"
                              alt="event-image"
                            />
                          </div>
                          <div className="lab-content">
                            <h5>
                              <a href="#">
                                American Muslim: Choosing Remain Still This Ramadan
                              </a>{" "}
                            </h5>
                            <ul className="lab-ul event-date">
                              <li>
                                <i className="icofont-calendar" />{" "}
                                <span>December 24,2021</span>
                              </li>
                              <li>
                                <i className="icofont-location-pin" />{" "}
                                <span>New York AK United States</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="event-item lab-item">
                        <div className="lab-inner">
                          <div className="lab-thumb">
                            <img
                              src="assets/images/event/04.jpg"
                              alt="event-image"
                            />
                          </div>
                          <div className="lab-content">
                            <h5>
                              <a href="#">
                                {" "}
                                How To Teach Kids Ramadan Isn’t About Food
                              </a>
                            </h5>
                            <ul className="lab-ul event-date">
                              <li>
                                <i className="icofont-calendar" />{" "}
                                <span>December 24,2021</span>
                              </li>
                              <li>
                                <i className="icofont-location-pin" />{" "}
                                <span>New York AK United States</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Events Section end here */}
      {/* Footer Section start here */}
      <footer
        className="footer-section"
        style={{ backgroundImage: "url(assets/images/bg-images/footer-bg.png)" }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row g-3 justify-content-center g-lg-0">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img
                        src="assets/images/footer/footer-top/01.png"
                        alt="Phone-icon"
                      />
                    </div>
                    <div className="lab-content">
                      <span>Phone Number : +88019 339 702 520</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img
                        src="assets/images/footer/footer-top/02.png"
                        alt="email-icon"
                      />
                    </div>
                    <div className="lab-content">
                      <span>Email : admin@Hafsa.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img
                        src="assets/images/footer/footer-top/03.png"
                        alt="location-icon"
                      />
                    </div>
                    <div className="lab-content">
                      <span>Address : 30 North West New York 240</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle padding-tb tri-shape-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-middle-item-wrapper">
                  <div className="footer-middle-item mb-5 mb-lg-0">
                    <div className="fm-item-title">
                      <h5>About Hafsa</h5>
                    </div>
                    <div className="fm-item-content">
                      <p className="mb-4">
                        Energistically coordinate highly efficient procesr
                        partnerships befor revolutionar growth strategie improvement
                      </p>
                      <img
                        src="assets/images/footer/footer-middle/01.jpg"
                        alt="about-image"
                        className="footer-abt-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-middle-item-wrapper">
                  <div className="footer-middle-item mb-5 mb-lg-0">
                    <div className="fm-item-title">
                      <h5>our Recent news</h5>
                    </div>
                    <div className="fm-item-content">
                      <div className="fm-item-widget lab-item">
                        <div className="lab-inner">
                          <div className="lab-thumb">
                            <a href="#">
                              {" "}
                              <img
                                src="assets/images/footer/footer-middle/02.jpg"
                                alt="footer-widget-img"
                              />
                            </a>
                          </div>
                          <div className="lab-content">
                            <h6>
                              <a href="#">
                                Enable Seamin Matera Forin And Our Orthonal Create
                                Vortals.
                              </a>
                            </h6>
                            <p>July 23, 2021</p>
                          </div>
                        </div>
                      </div>
                      <div className="fm-item-widget lab-item">
                        <div className="lab-inner">
                          <div className="lab-thumb">
                            <a href="#">
                              <img
                                src="assets/images/footer/footer-middle/03.jpg"
                                alt="footer-widget-img"
                              />
                            </a>
                          </div>
                          <div className="lab-content">
                            <h6>
                              <a href="#">
                                Dynamca Network Otuitive Catays For Plagiarize
                                Mindshare After
                              </a>
                            </h6>
                            <p>July 23, 2021</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-middle-item-wrapper">
                  <div className="footer-middle-item-3 mb-5 mb-lg-0">
                    <div className="fm-item-title">
                      <h5>OUR NEWSLETTER</h5>
                    </div>
                    <div className="fm-item-content">
                      <p>
                        Hafsa is a nonproﬁt organization supported by community
                        leaders
                      </p>
                      <form>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                          />
                        </div>
                        <button type="submit" className="lab-btn">
                          Send Massage <i className="icofont-paper-plane" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-content text-center">
                  <p>
                    ©2021 <a href="index.html">Hafsa</a> -Best For Charity HTML
                    Template.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section end here */}
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
