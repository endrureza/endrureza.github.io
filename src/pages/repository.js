import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const RepositoryPage = () => {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    /**
     * This part is for pagepiling
     */
    $("#pagepiling").pagepiling({
      sectionsColor: ["#fff", "#fff"],
      anchors: ["repository", "myrepository"],
      menu: null,
      direction: "vertical",
      verticalCentered: true,
      navigation: {
        position: "right",
        tooltips: ["REPOSITORY", "MY REPOSITORY"],
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

    if (!window.axios) {
      window.axios = require("axios")
    }

    axios({
      method: 'GET',
      url: 'https://api.github.com/users/endrureza/repos',
      params: {
        sort: 'pushed',
        page: 1,
        per_page: 6
      }
    })
    .then((res) => {
      let data = res.data
      
      data.forEach((val) => {
        let query = {
          name: val.name,
          link: val.html_url,
          description: val.description
        }

        // setRepositories(repositories => repositories.concat(query))
        setRepositories(repositories => [...repositories, query])
      })
    })

  }, [])

  return (
    <>
      <Layout>
        <SEO title="This is my public repository"></SEO>

        <section
          id="repository"
          className="section pp-scrollable hero hero-02 full-screen p-0"
        >
          <div className="container-fluid">
            <div className="title-small">
              <p className="text-dark">Repository</p>
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
                      data-elements="Repository."
                    ></span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="hero-icon">
              <a href="#myrepository">
                <i className="lni-arrow-down text-dark size-sm"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="myrepository" className="section pp-scrollable blog">
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                {/* Heading */}
                <div className="row">
                  <div className="title-small">
                    <p className="text-dark">My Repository</p>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-left">
                      <h2 className="text-dark mb-3">
                        My <span className="base-color">Repository</span>
                      </h2>
                      <p className="text-muted">
                        This part of page contains all repositories that i pushed into github overall
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Repository */}
                <div className="row mt-4">
                  {repositories.map((repository, index) => {
                    return (
                      <div key={index} className="col-lg-4">
                        <div className="blog-item">
                          <div className="image-blog">
                            <img
                              src="https://telinga-digital.s3-ap-southeast-1.amazonaws.com/wallpaper/github.png"
                              alt="github-banner"
                              className="img-fluid rounded-top"
                            />
                          </div>
                          <div className="blog-content rounded-bottom text-left p-3">
                            <h5 className="mb-0 mt-3">
                              <a
                                href={repository.link}
                                className="text-dark font-weight-light"
                              >
                                {repository.name}
                              </a>
                            </h5>
                            <p className="text-muted mt-3">
                              {repository.description}
                            </p>
                            <div className="blog-link pb-3">
                              <a
                                href={repository.link}
                                className="base-color"
                              >
                                Read More...
                              </a>
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

export default RepositoryPage
