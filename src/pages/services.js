import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => {

  const [services, setServices] = useState([
    {
      icon: "lni-users size-md base-color",
      name: "IT Consultation",
      isFree: false,
      description: "I'm providing a consultation about IT. I can help you or your company acquiring any insight about what should you do in order to achieve success on IT realm."
    },
    {
      icon: "lni-users size-md base-color",
      name: "IT Talking",
      isFree: true,
      description: "If it's possible and i do have time, you may get in touch with me. Just email me, and make an appointment. We may discuss any problem related IT for 1 hour free."
    },
    {
      icon: "lni-graduation size-md base-color",
      name: "Private Course",
      isFree: false,
      description: "I'm providing a private course about web development. I can teach you php, golang, nodejs and how to deploy your apps to production-ready environment."
    }
  ])

  useEffect(() => {
    /**
     * This part is for pagepiling
     */
    $("#pagepiling").pagepiling({
      sectionsColor: ["#fff", "#fff"],
      anchors: ["service", "myservice"],
      menu: null,
      direction: "vertical",
      verticalCentered: true,
      navigation: {
        position: "right",
        tooltips: ["SERVICE", "MY SERVICE"],
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
        <SEO title="These are services that i provide"></SEO>
        <section id="service" className="section pp-scrollable hero hero-02 full-screen p-0">
          <div className="container-fluid">
            <div className="title-small">
              <p className="text-dark">Service</p>
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
                    <span className="element" data-elements="Free Service., Paid Service."></span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="hero-icon">
              <a href="#myservice">
                <i className="lni-arrow-down text-dark size-sm"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="myservice" className="section pp-scrollable services">
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                {/* Heading */}
                <div className="row">
                  <div className="title-small">
                    <p className="text-dark">My Services</p>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-left">
                      <h2 className="text-dark mb-3">
                        My <span className="base-color">Services</span>
                      </h2>
                      <p className="text-muted">
                        This part of page contains all services that i offer either it's free or a paid one
                      </p>
                    </div>
                  </div>
                </div>
              
                {/* Content Service */}
                <div className="row mt-4">
                  {
                    services.map((service, index) => {
                      return <div className="col-lg-4 text-left" key={index}>
                        <div className="services-item">
                          <div
                            className="float-left mt-lg-1 d-inline-block services-icon"
                          >
                            <i className={service.icon}></i>
                          </div>
                          <div className="services-content">
                            <h5 className="mb-3">{service.name}</h5>
                            <p className="text-muted mb-0">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default ServicesPage