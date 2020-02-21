import React, { useEffect } from "react"
import PropTypes from "prop-types"
import "../assets/scss/app.scss"
import Header from "./header"
import Loader from "./loader"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  useEffect(() => {
    window.$ = require("jquery")
    window.jQuery = $
    require("pagepiling.js")
    require("bootstrap")
    window.Typed = require("typed.js")
    require("jquery-countto")
    require("../assets/js/isotope.pkgd")
    require("magnific-popup")
    require("owl.carousel")
    require("../assets/js/nill")
  })

  return (
    <>
      <Helmet>
        <body
          className="pilling-page"
          data-spy="scroll"
          data-target="#scrollspy"
          data-offset="1"
        />
      </Helmet>
      <Loader></Loader>
      <div id="pagepiling" className="pagepiling">
        <Header></Header>
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
