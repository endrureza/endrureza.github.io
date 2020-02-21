import React from "react"

const Education = () => {
  return (
    <>
      <section id="education" className="section pp-scrollable resume">
        <div className="display-table">
          <div className="display-content">
            <div className="container">
              <div className="row">
                <div className="title-small">
                  <p className="text-dark">
                    Education
                  </p>
                </div>
                <div className="col-lg-12">
                  <div className="text-left">
                    <h2 className="text-dark mb-3">
                      <i className="lni-graduation base-color"></i>&nbsp;
                      My <span className="base-color">Education</span>
                    </h2>
                    <p className="text-muted">
                      My kinda of education timeline
                    </p>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-lg-12">
                  <ul className="timeline">
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Education