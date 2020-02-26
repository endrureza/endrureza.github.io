import React, { useEffect } from "react"
import Layout from "../components/layout"
import About from "../components/about"
import Contact from "../components/contact"
import SEO from "../components/seo"

const IndexPage = () => {
  useEffect(() => {
    /**
     * This part is for pagepiling
     */
    $("#pagepiling").pagepiling({
      sectionsColor: ["#fff", "#fff", "#fff"],
      anchors: ["home", "about", "contact"],
      menu: null,
      direction: "vertical",
      verticalCentered: true,
      navigation: {
        position: "right",
        tooltips: [
          "HOME",
          "ABOUT ME",
          "GET IN TOUCH",
        ],
      },
      loopBottom: false,
      loopTop: false,
      scrollingSpeed: 700,
      easing: "swing",
      css3: true,
      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: ".section",
      animateAnchor: true,

      //events
      afterRender: function() {},
      afterLoad: function(anchorLink, index) {},
    })
  }, [])

  return (
    <>
      <Layout>
        <SEO title="Hi, I'm Endru Reza"></SEO>
        <section
          id="home"
          className="section pp-scrollable hero hero-02 full-screen p-0"
        >
          <div className="container-fluid">
            <div className="title-small">
              <p className="text-dark">Home</p>
            </div>
            <div id="hero-slider" className="row justify-content-center">
              <div className="owl-carousel owl-theme">
                <div className="hero-slide hero-item1 full-screen"></div>
              </div>
            </div>
            <div className="text-center hero-content">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <img
                    src="https://telinga-digital.s3-ap-southeast-1.amazonaws.com/wallpaper/me-black-white-250.jpg"
                    alt="me-black-white"
                    className="rounded-circle img-thumbnail"
                  />
                  <h3 className="text-dark mb-0 mt-3">I'm Endru Reza</h3>
                  <h1 className="text-dark text-capitalize mb-3">
                    <span className="base-color">A&nbsp;</span>
                    <span
                      className="element"
                      data-elements="Web Alchemist.,Noob Delegator.,Startup Dreamer.,Mime.,Culinary Lover.,Angry Codingman.,Observer."
                    ></span>
                  </h1>
                  <div>
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
            </div>
            <div className="hero-icon">
              <a href="#about">
                <i className="lni-arrow-down text-dark size-sm"></i>
              </a>
            </div>
          </div>
        </section>

        <About></About>
        <Contact></Contact>
      </Layout>
    </>
  )
}

export default IndexPage
