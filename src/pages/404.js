import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <>
      <Layout>
        <section className="hero hero-02 full-screen p-0 page-404" id="hero">
          <div className="container-fluid">
            <div className="title-small">
              <p className="text-dark">404</p>
            </div>
            <div className="row justify-content-center" id="hero-slider">
              <div className="owl-carousel owl-theme">
                <div className="hero-slide hero-item1 full-screen"></div>
              </div>
            </div>
            <div className="hero-content error-404 px-3">
              <div className="text-center">
                <h1 className="text-dark">
                  4 <i className="lni-emoji-sad"></i> 4
                </h1>
                <div className="error-content">
                  <h2>Oooops !</h2>
                  <p className="mt-3">
                    Sorry, the page you requested could not be found.
                  </p>
                  <Link to="/" className="pill-button mt-4 mt-md-5">
                    Back To Home
                  </Link>
                </div>
              </div>
              <div className="right-social mt-3">
                <ul className="list-inline social-icon mt-2">
                  <li className="list-inline-item">
                    <a href="https://facebook.com/endrureza">
                      <i className="lni-facebook-filled text-dark"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/endrureza">
                      <i className="lni-twitter-filled text-dark"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/endrureza">
                      <i className="lni-github-original text-dark"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://linkedin.com/in/endrureza">
                      <i className="lni-linkedin-original text-dark"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default NotFoundPage
