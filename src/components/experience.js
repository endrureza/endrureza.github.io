import React from "react"

const Experience = () => {
  return (
    <>
      <section id="experience" className="section pp-scrollable resume">
        <div className="display-table">
          <div className="display-content">
            <div className="container">
              <div className="row">
                <div className="title-small">
                  <p className="text-dark">
                    Experience
                  </p>
                </div>
                <div className="col-lg-12">
                  <div className="text-left">
                    <h2 className="text-dark mb-3">
                    <i className="lni-pencil base-color"></i>&nbsp;
                    My <span className="base-color">Experience</span>
                    </h2>
                    <p className="text-muted">
                      My kinda of experience timeline
                    </p>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-lg-12">
                  <ul className="timeline">
                    <li>
                      <h6 className="base-color mb-0">
                        Founder at Telinga Digital
                      </h6>
                      <small className="text-muted">Dec 2017 - Present</small>
                      <p className="text-dark py-3"></p>
                    </li>
                    <li>
                      <h6 className="base-color mb-0">
                        Lead Developer at Dreamaxtion
                      </h6>
                      <small className="text-muted">Feb 2018 - Dec 2019</small>
                      <p className="text-dark py-3"></p>
                    </li>
                    <li>
                      <h6 className="base-color mb-0">
                        Senior Backend Developer at CV. Kunci Sukses Muamalah
                      </h6>
                      <small className="text-muted">Jun 2017 - Dec 2017</small>
                      <p className="text-dark py-3"></p>
                    </li>
                    <li>
                      <h6 className="base-color mb-0">
                        Full Stack Developer at AIMSIS
                      </h6>
                      <small className="text-muted">Oct 2016 - Apr 2017</small>
                      <p className="text-dark py-3"></p>
                    </li>
                    <li>
                      <h6 className="base-color mb-0">Web Developer at ISYS</h6>
                      <small className="text-muted">Oct 2015 - Oct 2016</small>
                      <p className="text-dark py-3"></p>
                    </li>
                    <li>
                      <h6 className="base-color mb-0">
                        Web Developer at VhiWeb
                      </h6>
                      <small className="text-muted">Apr 2015 - Aug 2015</small>
                      <p className="text-dark py-3"></p>
                    </li>
                  </ul>
                </div>
              </div>
            
              <div className="row pt-6">
                {/* Backend & Devops Skills */}
                <div className="col-lg-6">
                  <div className="skill-box pt-4 pt-lg-0 mt-4 mt-lg-0">
                    <div className="skillbar clearfix" data-percent="0%">
                      <div className="skillbar-title">PHP</div>
                      <div className="skillbar-bar"></div>
                      <div className="skill-bar-percent">0%</div>
                    </div>
                  </div>
                </div>

                {/* Frontend Skills */}
                <div className="col-lg-6">
                  <div className="skill-box pt-4 pt-lg-0 mt-4 mt-lg-0">
                    <div className="skillbar clearfix" data-percent="0%">
                      <div className="skillbar-title">VueJS</div>
                      <div className="skillbar-bar"></div>
                      <div className="skill-bar-percent">0%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience