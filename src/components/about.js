import React from "react"

const About = () => {
  return (
    <>
      <section id="about" className="section pp-scrollable about text-dark">
        <div className="display-table">
          <div className="display-content">
            <div className="container">
              <div className="row">
                <div className="title-small">
                  <p className="text-dark">About Me</p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-6">
                  <img
                    src="https://telinga-digital.s3-ap-southeast-1.amazonaws.com/wallpaper/me-on-singapore.jpg"
                    alt="me-on-singapore"
                    className="rounded img-thumbnail w-100"
                  />
                </div>
                <div className="col-lg-6 personal-item mt-5">
                  <h2 className="text-dark mb-2">
                    About
                    <span className="base-color">Me</span>
                  </h2>
                  <h5 className="text-dark mb-3">Hi, I'm Endru Reza</h5>
                  <div className="row">
                    <div className="col-lg-5 col-sm-6 personal-info">
                      <p className="text-dark">
                        <i className="lni-website base-color"></i>&nbsp;
                        <span className="text-gray">telingadigital.id</span>
                      </p>
                      <p className="text-dark">
                        <i className="lni-phone-handset base-color"></i>&nbsp;
                        <span className="text-gray">+62 812 8186 9602</span>
                      </p>
                      <p className="text-dark">
                        <i className="lni-map-marker base-color"></i>&nbsp;
                        <span className="text-gray">Depok, Indonesia</span>
                      </p>
                    </div>
                    <div className="col-lg-5 col-sm-6 personal-info">
                      <p className="text-dark">
                        <i className="lni-envelope base-color"></i>&nbsp;
                        <span className="text-gray">endrureza@gmail.com</span>
                      </p>
                      <p className="text-dark">
                        Freelance : <span className="text-gray">Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <a href="/story" className="pill-button mt-3 mb-lg-0 mr-4">View My CV</a>
                      <a
                        href="#contact"
                        className="pill-button mt-3 mb-lg-0"
                      >Drop Me A Message</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div id="count-up" className="text-center">
              <div className="container">
                <div className="row mt-4">
                  <div className="col-6 col-md-3 mt-5 mb-md-0 count-item">
                    <div className="count-icon">
                      <i className="lni-download size-md"></i>
                    </div>
                    <div className="count-content">
                      <span
                        className="timer count-number"
                        data-from="0"
                        data-to="286"
                        data-speed="5000"
                      >
                        286
                      </span>
                    </div>
                    <p className="mb-0 ">Files Download</p>
                  </div>
                  <div className="col-6 col-md-3 mt-5 mb-md-0 count-item">
                    <div className="count-icon">
                      <i className="lni-pencil-alt size-md"></i>
                    </div>
                    <div className="count-content">
                      <span
                        className="timer count-number"
                        data-from="0"
                        data-to="6549"
                        data-speed="5000"
                      >
                        6549
                      </span>
                    </div>
                    <p className="mb-0">Project Done</p>
                  </div>
                  <div className="col-6 col-md-3 mt-5 mb-md-0 count-item">
                    <div className="count-icon">
                      <i className="lni-medall size-md"></i>
                    </div>
                    <div className="count-content">
                      <span
                        className="timer count-number"
                        data-from="0"
                        data-to="793"
                        data-speed="5000"
                      >
                        793
                      </span>
                    </div>
                    <p className="mb-0">Get Award</p>
                  </div>
                  <div className="col-6 col-md-3 mt-5 mb-md-0 count-item">
                    <div className="count-icon">
                      <i className="lni-emoji-smile size-md"></i>
                    </div>
                    <div className="count-content">
                      <span
                        className="timer count-number"
                        data-from="0"
                        data-to="286"
                        data-speed="5000"
                      >
                        286
                      </span>
                    </div>
                    <p className="mb-0">Happy Client</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
