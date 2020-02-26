import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => {
  const [portfolios, setPortfolios] = useState([
    {
      image: "https://telinga-digital.s3-ap-southeast-1.amazonaws.com/portfolios/dreamtalent.jpg",
      title: "Dreamtalent",
      link: "https://dreamtalent.id",
    },
    {
      image: "https://telinga-digital.s3-ap-southeast-1.amazonaws.com/portfolios/dreampeople.jpg",
      title: "Dreampeople",
      link: "https://dreampeople.id",
    },
  ])

  useEffect(() => {
    if (typeof isotope == "undefined") {
      console.log("init isotope js")
      require("../assets/js/isotope.pkgd")
    }

    if (typeof magnificPopup == "undefined") {
      console.log("init magnificpopup js")
      require("magnific-popup")
    }

    /**
     * This part is for pagepiling
     */
    $("#pagepiling").pagepiling({
      sectionsColor: ["#fff", "#fff"],
      anchors: ["portfolio", "myportfolio"],
      menu: null,
      direction: "vertical",
      verticalCentered: true,
      navigation: {
        position: "right",
        tooltips: ["PORTFOLIO", "MY PORTFOLIO"],
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

    /**
     * This part is for portfolio popup
     */
    if (".portfolio-items".length > 0) {
      $(".portfolio-items").each(function() {
        $(this).magnificPopup({
          delegate: ".js-zoom-gallery",
          type: "image",
          gallery: {
            enabled: true,
          },
        })
      })
    }

    /**
     * This part is for isotope
     */
    var $container = $(".portfolio-items")
    var $filter = $("#portfolio-filter")
    $container.isotope({
      filter: "*",
      layoutMode: "masonry",
      animationOptions: {
        duration: 750,
        easing: "linear",
      },
    })
    $filter.find("a").on("click", function() {
      var selector = $(this).attr("data-filter")
      $filter.find("a").removeClass("active")
      $(this).addClass("active")
      $container.isotope({
        filter: selector,
        animationOptions: {
          animationDuration: 750,
          easing: "linear",
          queue: false,
        },
      })
      return false
    })
  }, [])

  return (
    <>
      <Layout>
        <SEO title="This is my portfolio"></SEO>
        <section
          id="portfolio"
          className="section pp-scrollable hero hero-02 full-screen p-0"
        >
          <div className="container-fluid">
            <div className="title-small">
              <p className="text-dark">Portfolio</p>
            </div>
            <div id="hero-slider" className="row justify-content-center">
              <div className="owl-carousel owl-theme">
                <div className="hero-slide hero-item1 full-screen"></div>
              </div>
            </div>
            <div className="text-center hero-content">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="text-dark text-capitalize mb-3">
                    <span className="base-color">My&nbsp;</span>
                    <span
                      className="element"
                      data-elements="Portfolio List."
                    ></span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="hero-icon">
              <a href="#myportfolio">
                <i className="lni-arrow-down text-dark size-sm"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="myportfolio" className="section pp-scrollable portfolio">
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                {/* Heading */}
                <div className="row">
                  <div className="title-small">
                    <p className="text-dark">My Portfolio</p>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-left">
                      <h2 className="text-dark mb-3">
                        My <span className="base-color">Portfolio</span>
                      </h2>
                      <p className="text-muted">
                        This part of page contains all portfolio that i achieved
                        through my entire career
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Portfolio */}
                <div className="portfolio-items row mt-4">
                  {portfolios.map((portfolio, index) => {
                    return (
                      <div key={index} className="col-lg-4 portfolio-item my-3">
                        <div className="portfolio-item-content rounded">
                          <img
                            src={
                              portfolio.image || "http://placehold.it/600x450"
                            }
                            alt="portfolio-image"
                          />
                          <div className="img-overlay text-center">
                            <div className="img-overlay-content">
                              <div className="portfolio-icon">
                                <a href={portfolio.link || "#"}>
                                  <i className="lni-link"></i>
                                </a>
                                <a
                                  href={
                                    portfolio.image ||
                                    "http://placehold.it/600x450"
                                  }
                                  className="js-zoom-gallery"
                                >
                                  <i className="lni-search"></i>
                                </a>
                              </div>
                              <h5 className="text-white mt-3 mb-0">
                                {portfolio.title}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default PortfolioPage
