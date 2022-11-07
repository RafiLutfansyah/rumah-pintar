import Link from "next/link";

export default function () {
  return <>
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
                <Link href="/">
                  <img src="assets/images/logo/02.png" alt="logo" />
                </Link>
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
                    <span>087780287810</span>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt" /> Bakti Jaya, Setu, Tangerang Selatan, Banten
                  </li>
                </ul>
                <ul className="social-icons lab-ul d-flex">
                  <li>
                    <a href="https://www.instagram.com/rumahpintar.tangerangraya" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <Link href="https://wa.me/6287780287810" target="_blank">
                      <i className="fab fa-whatsapp" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/coming-soon">
                      <i className="fab fa-vimeo-v" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/coming-soon">
                      <i className="fab fa-skype" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/coming-soon">
                      <i className="fas fa-wifi" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-bottom">
              <div className="header-wrapper">
                <div className="menu-area justify-content-between w-100">
                  <ul className="menu lab-ul">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    {/* <li>
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
                            <a href="/coming-soon.html">Coming-soon</a>
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
                      </li> */}
                  </ul>
                  {/* <div className="prayer-time d-none d-lg-block">
                      <a href="#" className="prayer-time-btn">
                        <i className="icofont-clock-time" /> Today Prayer Time
                      </a>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Header Section Ends Here*/}
  </>
}