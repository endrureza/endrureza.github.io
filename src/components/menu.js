import React from "react"

const Menu = () => {
  return (
    <>
      <div className="overlay-menu bg-blue py-3 px-4 text-center center-item">
        <div id="scrollspy" className="overlay-menu-list">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 overlay-nav">
                <ul className="list-group text-left">
                  <li className="list-group-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="list-group-item">
                    <a href="/story">Story</a>
                  </li>
                  <li className="list-group-item">
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li className="list-group-item">
                    <a href="/services">Services</a>
                  </li>
                  <li className="list-group-item">
                    <a href="/repository">Repository</a>
                  </li>
                </ul>
                <ul className="list-group contact-info text-left mb-0">
                  <li className="list-group-item">
                    <span>Contact Info :</span>
                  </li>
                  <li className="list-group-item">
                    <span>
                      <i className="lni-map-marker"></i>&nbsp;
                      Telinga Digital 70, Beji, West Java, Indonesia
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span>
                      <i className="lni-phone-handset"></i>&nbsp;
                      +62 812 8186 9602
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span>
                      <i className="lni-envelope"></i>&nbsp;
                      endrureza@gmail.com
                    </span>
                  </li>
                  <li className="list-group-item">
                    <ul className="list-inline socails">
                      <li className="list-inline-item">
                        <a href="https://facebook.com/endrureza">
                          <i className="lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://twitter.com/endrureza">
                          <i className="lni-twitter-filled"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://github.com/endrureza">
                          <i className="lni-github-original"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://linkedin.com/in/endrureza">
                          <i className="lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
