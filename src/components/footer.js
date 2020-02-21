import React from "react"

const Footer = () => {
  return (
    <>
      <div id="footer" className="section pp-scrollable footer">
        <div className="container-fluid">
          <div className="row py-6">
            <div className="title-small">
              <p className="text-dark">Footer</p>
            </div>
            <div className="text-center m-auto">
              <p className="text-dark size-sm">
                EN
                <span className="base-color">DRU</span>
              </p>
              <ul className="list-inline socails">
                <li className="list-inline-item">
                  <a
                    className="text-white"
                    href="https://facebook.com/endrureza"
                  >
                    <i className="lni-facebook-filled text-dark mr-2"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="text-white"
                    href="https://twitter.com/endrureza"
                  >
                    <i className="lni-twitter-filled text-dark mr-2"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="text-white" href="https://github.com/endrureza">
                    <i className="lni-github-original text-dark mr-2"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="text-white"
                    href="https://linkedin.com/in/endrureza"
                  >
                    <i className="lni-linkedin-original text-dark mr-2"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
