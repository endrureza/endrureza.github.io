import React, { useEffect } from "react"
import PropTypes from "prop-types"
import "../assets/scss/app.scss"
import Header from "./header"
import Loader from "./loader"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  useEffect(() => {
    
    if (!window.$ && !window.jQuery) {
      console.log('init jquery and boostrap')
      window.$ = require("jquery")
      window.jQuery = $
      require("bootstrap")
    }

    if (typeof pagepiling != 'function') {
      console.log('pagepiling js')
      require("pagepiling.js")
    }

    if (!window.Typed) {
      console.log('init typed.js')
      window.Typed = require("typed.js")
    }

    if (typeof countTo == 'undefined') {
      console.log('init counto js')
      require("jquery-countto")
    }

    if (typeof owlCarousel == 'undefined') {
      console.log('init owl carousel js')
      require("owl.carousel")
    }

    /**
     * Activate this if you wanna have loader
     */
    $("#overlayer")
      .delay(500)
      .fadeOut("slow")
    $(".loader")
      .delay(1000)
      .fadeOut("slow")

    /**
     * This part is for color scheming
     */
    // var $darkLogo = $('.dark-logo');
    // $('.color-scheme').click(function() {
    //     $("body").toggleClass('nill-dark');
    //     $('.section').toggleClass('bg-dark');
    //     $('.color-scheme').removeClass('d-none').addClass('d-inline-block');
    //     $(this).removeClass('d-inline-block').addClass('d-none');
    // });

    /**
     * This part is for menu toggler
     */
    $(".overlay-menu-toggler").click(function() {
      $(".overlay-menu").addClass("show")
    })
    $(".overlay-menu").click(function() {
      $(this).removeClass("show")
    })

    /**
     * This part is for slider owl carousle
     */
    $(".hero .owl-carousel").owlCarousel({
      loop: true,
      items: 1,
      nav: false,
      dots: false,
      autoplay: true,
      touchDrag: true,
      smartSpeed: 5000,
      animateOut: "fadeOut",
      autoplayHoverPause: true,
    })
    $("#hero-slider").on("translate.owl.carousel", function() {
      setTimeout(function() {
        $(".hero-slide").removeClass("zoom")
      }, 1000)
    })
    $("#hero-slider").on("translated.owl.carousel", function() {
      $(".owl-item.active .hero-slide").addClass("zoom")
    })

    /**
     * This part is for typed js
     */
    var $element = $(".element")
    if ($element.length) {
      var options = {
        strings: $element.attr("data-elements").split(","),
        typeSpeed: 100,
        backDelay: 3000,
        backSpeed: 50,
        loop: true,
      }
      var typed = new Typed(".element", options)
    }

    /**
     * This part is for applying skillbar
     */
    // $(".skillbar").each(function() {
    //   $(this)
    //     .find(".skillbar-bar")
    //     .animate(
    //       {
    //         width: $(this).attr("data-percent"),
    //       },
    //       6000
    //     )
    // })

    /**
     * This part is for activating jquery count
     */
    // $('.timer').countTo();
    // $('.count-number').removeClass('timer');
  }, [])

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
