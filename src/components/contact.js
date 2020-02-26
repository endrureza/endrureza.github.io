import React from "react"
// import Map from "../components/map"

const Contact = () => {
  return (
    <>
      <section id="contact" className="section pp-scrollable contact">
        <div className="display-table">
          <div className="display-content">
            <div className="container">
              <div className="row">
                <div className="title-small">
                  <p className="text-dark">Get In Touch</p>
                </div>
                <div className="col-lg-12">
                  <div className="text-left">
                    <h2 className="text-dark">
                      Get <span className="base-color">In Touch</span>
                    </h2>
                    <p className="text-muted mx-auto section-subtitle mt-3">
                      Feel Free To Contact Me Any Time
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="row mt-5">
                <div className="col-lg-12">
                  <Map></Map>
                </div>
              </div> */}
              <div className="row mt-5">
                <div className="col-lg-6 text-left">
                  <div className="contact-form">
                    <h6 className="font-weight-semibold">
                      Let us Get to Work With Me
                    </h6>
                    <p className="text-muted mt-3"></p>
                    <div className="mt-4">
                      <p className="mt-2 font-weight-bold">
                        <i className="lni-map-marker base-color"></i>&nbsp;
                        <span className="text-muted">
                          Telinga Digital 70, Depok, Indonesia
                        </span>
                      </p>
                      <p className="mt-2 font-weight-bold">
                        <i className="lni-phone-handset base-color"></i>&nbsp;
                        <span className="text-muted">+62 812 8186 9602</span>
                      </p>
                      <p className="mt-2 font-weight-bold">
                        <i className="lni-envelope base-color"></i>&nbsp;
                        <span className="text-muted">endrureza@gmail.com</span>
                      </p>
                      <p className="mt-2 font-weight-bold">
                        <i className="lni-website base-color"></i>&nbsp;
                        <span className="text-muted">telingadigital.id</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 text-left">
                  <h6 className="font-weight-semibold">How can I help you ?</h6>
                  <form id="contactForm" className="form mt-3">
                    <div className="row">
                      <div className="col-lg-12 form-item">
                        <div className="form-group">
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Type your name here..."
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 form-item">
                        <div className="form-group">
                          <input
                            name="email"
                            id="email"
                            type="text"
                            className="form-control"
                            placeholder="Type your email here..."
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 form-item">
                        <div className="form-group">
                          <textarea
                            name="comments"
                            id="comments"
                            rows="2"
                            className="form-control h-auto"
                            placeholder="State your business here..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-sm-12 mt-1 text-left">
                        <button
                          type="button"
                          className="pill-button"
                          id="submit-btn"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
