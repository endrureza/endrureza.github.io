import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StoryPage = () => {
  useEffect(() => {
    /**
     * This part is for pagepiling
     */
    $("#pagepiling").pagepiling({
      sectionsColor: ["#fff", "#fff"],
      anchors: ["story", "mystory"],
      menu: null,
      direction: "vertical",
      verticalCentered: true,
      navigation: {
        position: "right",
        tooltips: ["STORY", "MY STORY"],
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
        <SEO title="This is my updated story"></SEO>

        <section
          id="story"
          className="section pp-scrollable hero hero-02 full-screen p-0"
        >
          <div className="container-fluid">
            <div className="title-small">
              <p className="text-dark">Story</p>
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
                      data-elements="Story., Biography., Set of Skill., Education., Work Experience., Open Source."
                    ></span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="hero-icon">
              <a href="#mystory">
                <i className="lni-arrow-down text-dark size-sm"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="mystory" className="section pp-scrollable resume">
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                {/* Heading */}
                <div className="row">
                  {/* Left Title */}
                  <div className="title-small">
                    <p className="text-dark">My Story</p>
                  </div>

                  {/* Content */}
                  <div className="col-lg-12">
                    <div className="text-left">
                      <h2 className="text-dark mb-3">
                        My <span className="base-color">Story</span>
                      </h2>
                      <p className="text-muted">
                        This part of page contains all information regarding my
                        basic information, work experience, education, set of
                        skill and additional information
                      </p>
                    </div>
                  </div>
                </div>

                {/* General Information */}
                <div className="row mt-4">
                  <div className="col-lg-6">
                    <p className="text-dark">
                      <i className="lni-map-marker base-color"></i>&nbsp;
                      <span className="text-gray">Depok, Indonesia</span>
                    </p>
                    <p className="text-dark">
                      <i className="lni-linkedin-original base-color"></i>&nbsp;
                      <span className="text-gray">
                        linkedin.com/in/endrureza
                      </span>
                    </p>
                    <p className="text-dark">
                      <i className="lni-twitter-original base-color"></i>&nbsp;
                      <span className="text-gray">@endrureza</span>
                    </p>
                    <p className="text-dark">
                      <i className="lni-github-original base-color"></i>&nbsp;
                      <span className="text-gray">github.com/endrureza</span>
                    </p>
                    <p className="text-dark">
                      <i className="lni-whatsapp base-color"></i>&nbsp;
                      <span className="text-gray">+62 812 8186 9602</span>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="media">
                      <i className="lni-laptop size-md base-color align-self-center mr-3"></i>
                      <div className="media-body">
                        <h6 className="font-weight-bold">Passively Looking</h6>
                        <small className="text-secondary">
                          I'm passively looking for a job right now
                        </small>
                      </div>
                    </div>
                    <div className="media mt-3">
                      <i className="lni-apartment size-md base-color align-self-center mr-3"></i>
                      <div className="media-body">
                        <h6 className="font-weight-bold">
                          Location Preference
                        </h6>
                        <small className="text-secondary">
                          I'd prefer remote working, or near Depok, or South
                          Jakarta and no relocation
                        </small>
                      </div>
                    </div>
                    <div className="media mt-3">
                      <i className="lni-bullhorn size-md base-color align-self-center mr-3"></i>
                      <div className="media-body">
                        <h6 className="font-weight-bold">
                          Open to Remote Work
                        </h6>
                        <small className="text-secondary">
                          I'm very much open to remote work opportunity
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />

                {/* Technology Information */}
                <div className="row mt-4">
                  <div className="col-lg-12">
                    <h5>Technology / Set of Skill</h5>
                  </div>
                  <div className="col-lg-12">
                    <span className="badge badge-secondary mr-1">php</span>
                    <span className="badge badge-secondary mr-1">laravel</span>
                    <span className="badge badge-secondary mr-1">lumen</span>
                    <span className="badge badge-secondary mr-1">mysql</span>
                    <span className="badge badge-secondary mr-1">nodejs</span>
                    <span className="badge badge-secondary mr-1">golang</span>
                    <span className="badge badge-secondary mr-1">nginx</span>
                    <span className="badge badge-secondary mr-1">vuejs</span>
                    <span className="badge badge-secondary mr-1">reactjs</span>
                    <span className="badge badge-secondary mr-1">aws</span>
                    <span className="badge badge-secondary mr-1">gcp</span>
                    <span className="badge badge-secondary mr-1">
                      digitalocean
                    </span>
                  </div>
                </div>

                <hr />

                {/* Intro Statement */}
                <div className="row mt-4">
                  <div className="col-lg-12">
                    <h5>Intro Statement</h5>
                  </div>
                  <div className="col-lg-12">
                    <p className="text-secondary">
                      I'm somehow falling love with technology. I'm very eager
                      to explore something related to web development, web
                      design and Mobile development.
                    </p>
                    <p className="text-secondary">
                      I'm kinda a type of person who likes different thing. I
                      don't like repeatition, that's why i need to learn new one
                      everyday.
                    </p>
                    <p className="text-secondary">
                      Other than programming such as animating, photography,
                      playing chess, and psychology become my hobbies. I spend
                      my time mostly on surfing internet, blogging and watching
                      somethin'​ new.
                    </p>
                    <p className="text-secondary">
                      The last but not least, i can assure you i'm someone that
                      you'd like to cooperate. It's very nice to help and become
                      partner with someone.
                    </p>
                  </div>
                </div>

                <hr />

                {/* Experience */}
                <div className="row mt-4">
                  <div className="col-lg-12">
                    <h5>Work Experience</h5>
                  </div>
                  <div className="col-lg-12">
                    <ul className="timeline mb-5">
                      <li>
                        <h6 className="base-color mb-0">
                          Founder at Telinga Digital
                          <span className="badge badge-danger ml-1">
                            pinned
                          </span>
                        </h6>
                        <small className="text-muted">
                          <span className="badge badge-secondary mr-1">
                            golang
                          </span>
                          <span className="badge badge-secondary mr-1">
                            nodejs
                          </span>
                          <span className="badge badge-secondary mr-1">
                            vuejs
                          </span>
                          <span className="badge badge-secondary mr-1">
                            reactjs
                          </span>
                        </small>
                        <br />
                        <small className="text-muted">Dec 2017 - Present</small>
                        <p className="text-dark py-3">
                          Telinga Digital is a digital agency providing solution
                          to IT problem. I'm individually improving TD awareness
                          on social world through Facebook, Twitter, Instagram
                          and Youtube. We are located on Beji, Depok, Indonesia.
                        </p>
                      </li>
                      <li>
                        <h6 className="base-color mb-0">
                          Backend Engineer at Fabelio
                        </h6>
                        <small className="text-muted">
                          <span className="badge badge-secondary mr-1">
                            golang
                          </span>
                          <span className="badge badge-secondary mr-1">
                            nodejs
                          </span>
                          <span className="badge badge-secondary mr-1">
                            reactjs
                          </span>
                        </small>
                        <br />
                        <small className="text-muted">Mar 2020 - Present</small>
                        <p className="text-dark py-3">
                          Maintaining fabelio website 3.0
                        </p>
                      </li>
                      <li>
                        <h6 className="base-color mb-0">
                          Lead Developer at Dreamaxtion
                        </h6>
                        <small className="text-muted">
                          <span className="badge badge-secondary mr-1">
                            php
                          </span>
                          <span className="badge badge-secondary mr-1">
                            laravel
                          </span>
                          <span className="badge badge-secondary mr-1">
                            mysql
                          </span>
                          <span className="badge badge-secondary mr-1">
                            nodejs
                          </span>
                          <span className="badge badge-secondary mr-1">
                            nginx
                          </span>
                          <span className="badge badge-secondary mr-1">
                            vuejs
                          </span>
                          <span className="badge badge-secondary mr-1">
                            aws
                          </span>
                          <span className="badge badge-secondary mr-1">
                            gcp
                          </span>
                          <span className="badge badge-secondary mr-1">
                            digitalocean
                          </span>
                        </small>
                        <br />
                        <small className="text-muted">
                          Feb 2018 - Dec 2019
                        </small>
                        <p className="text-dark py-3">
                          Led techincal team to create, maintain and deploy
                          system to production environment.
                          <div className="my-2">
                            We mainly provided two core systems focused on HR
                            solution and Psychometric test. They are :
                          </div>
                          <div className="my-2">
                            <b>Dreamtalent.id</b> a website that provides
                            psychometric analysis for your career.
                          </div>
                          <div className="my-2">
                            <b>Dreampeople.id</b> an all-in-one cloud-based
                            Human Capital website to simplify attendance,
                            payroll and strategy.
                          </div>
                        </p>
                      </li>
                      <li>
                        <h6 className="base-color mb-0">
                          Senior Backend Developer at CV. Kunci Sukses Muamalah
                        </h6>
                        <small className="text-muted">
                          <span className="badge badge-secondary mr-1">
                            php
                          </span>
                          <span className="badge badge-secondary mr-1">
                            wordpress
                          </span>
                          <span className="badge badge-secondary mr-1">
                            laravel
                          </span>
                          <span className="badge badge-secondary mr-1">
                            mysql
                          </span>
                          <span className="badge badge-secondary mr-1">
                            nodejs
                          </span>
                          <span className="badge badge-secondary mr-1">
                            nginx
                          </span>
                          <span className="badge badge-secondary mr-1">
                            digitalocean
                          </span>
                        </small>
                        <br />
                        <small className="text-muted">
                          Jun 2017 - Dec 2017
                        </small>
                        <p className="text-dark py-3">
                          Led technical team to create, maintain and deploy
                          system to production environment.
                          <div className="my-2">
                            We provided four systems with different function,
                            they are :
                          </div>
                          <div className="my-2">
                            <b>Muamalah.in</b> a software-as-a-service website
                            to build your own marketplace.
                          </div>
                          <div className="my-2">
                            <b>Muamalah.career</b> a website to connect job
                            seekers and companies.
                          </div>
                          <div className="my-2">
                            <b>Muamalah.property</b> a website for property
                            transaction.
                          </div>
                          <div className="my-2">
                            <b>Kaffah.pro</b> a website builder using wordpress.
                          </div>
                        </p>
                      </li>
                      <li>
                        <h6 className="base-color mb-0">
                          Full Stack Developer at AIMSIS
                        </h6>
                        <small className="text-muted">
                          <span className="badge badge-secondary mr-1">
                            php
                          </span>
                          <span className="badge badge-secondary mr-1">
                            codeigniter
                          </span>
                          <span className="badge badge-secondary mr-1">
                            slim
                          </span>
                          <span className="badge badge-secondary mr-1">
                            mysql
                          </span>
                          <span className="badge badge-secondary mr-1">
                            nodejs
                          </span>
                          <span className="badge badge-secondary mr-1">
                            android
                          </span>
                        </small>
                        <br />
                        <small className="text-muted">
                          Oct 2016 - Apr 2017
                        </small>
                        <p className="text-dark py-3">
                          Maintained current system of <b>AIMSIS</b> and
                          proposed a system change from codeignier to laravel.
                        </p>
                      </li>
                      <li>
                        <h6 className="base-color mb-0">
                          Web Developer at ISYS
                        </h6>
                        <small className="text-muted">
                          <span className="badge badge-secondary mr-1">
                            php
                          </span>
                          <span className="badge badge-secondary mr-1">
                            laravel
                          </span>
                          <span className="badge badge-secondary mr-1">
                            lumen
                          </span>
                          <span className="badge badge-secondary mr-1">
                            mysql
                          </span>
                          <span className="badge badge-secondary mr-1">
                            aws
                          </span>
                        </small>
                        <br />
                        <small className="text-muted">
                          Oct 2015 - Oct 2016
                        </small>
                        <p className="text-dark py-3">
                          Created and maintained a content management system for
                          one of former Indonesia mobile service provider{" "}
                          <b>Bolt.id</b>.
                        </p>
                        <p className="text-dark">
                          Created and maintained a Restful API for{" "}
                          <b>Apotikantar</b> former of <b>Go-Med</b>.
                        </p>
                      </li>
                      <li>
                        <h6 className="base-color mb-0">
                          Web Developer at VhiWeb
                        </h6>
                        <small className="text-muted">
                          <span className="badge badge-secondary mr-1">
                            php
                          </span>
                          <span className="badge badge-secondary mr-1">
                            laravel
                          </span>
                        </small>
                        <br />
                        <small className="text-muted">
                          Apr 2015 - Aug 2015
                        </small>
                        <p className="text-dark py-3">
                          Maintained the backend of blog and video consultation
                          of <b>Klinik Estetika</b>{" "}
                          (https://klinikestetika.com).
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <hr />

                {/* Education */}
                <div className="row mt-4">
                  <div className="col-lg-12">
                    <h5>Education</h5>
                  </div>
                  <div className="col-lg-12">
                    <ul className="timeline mb-5">
                      <li>
                        <h6 className="base-color mb-0">
                          Master at Gunadarma University
                        </h6>
                        <small className="text-muted">2010 - 2014</small>
                        <p className="text-dark py-3">
                          I'm continuing at the same university majoring in
                          Information System Business.
                        </p>
                      </li>
                      <li>
                        <h6 className="base-color mb-0">
                          Bachelor at Gunadarma University
                        </h6>
                        <small className="text-muted">2014 - 2015</small>
                        <p className="text-dark py-3">
                          I'm majoring in Information System at Gunadarma
                          University.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <hr />

                {/* Portfolio */}
                <div className="row mt-4">
                  <div className="col-lg-12">
                    <h5>Portfolio</h5>
                  </div>
                  <div className="col-lg-12">
                    <a href="/portfolio" className="btn btn-secondary">
                      View Portfolio
                    </a>
                  </div>
                </div>

                <hr />

                {/* Open Source */}
                <div className="row mt-4">
                  <div className="col-lg-12">
                    <h5>Open Source</h5>
                  </div>
                  <div className="col-lg-12">
                    <a href="/repository" className="btn btn-secondary">
                      View Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default StoryPage
