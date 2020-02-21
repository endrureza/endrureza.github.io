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
     * This part is for swiper slider
     */
    // if ($(".swiper-container").length) {
    //   var swiper = new Swiper(".swiper-container", {
    //     effect: "slide",
    //     allowTouchMove: "false",
    //     touchRatio: 0,
    //     threshold: 992,
    //     autoplay: {
    //       delay: 5000,
    //     },
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //   })

    //   var textSwiper = new Swiper(".text-swiper", {
    //     effect: "fade",
    //     allowTouchMove: "false",
    //     touchRatio: 0,
    //     threshold: 992,
    //     autoplay: {
    //       delay: 5000,
    //     },
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //   })

    //   $(".hero-item-image").css("background", function() {
    //     var bg = "url(" + $(this).data("image-src") + ") no-repeat center"
    //     return bg
    //   })
    //   var $fullscreen = $(".hero-04, .hero-swiper, .hero-text, .hero-images")
    //   $fullscreen.css("height", $window.height())
    // }

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
     * This part is for video and map magnific popup
     */
    // $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    //   disableOn: 700,
    //   type: "iframe",
    //   mainClass: "mfp-fade",
    //   removalDelay: 160,
    //   preloader: false,
    //   fixedContentPos: false,
    // })

    /**
     * This part is for applying skillbar
     */
    $(".skillbar").each(function() {
      $(this)
        .find(".skillbar-bar")
        .animate(
          {
            width: $(this).attr("data-percent"),
          },
          6000
        )
    })

    /**
     * This part is for activating jquery count
     */
    // $('.timer').countTo();
    // $('.count-number').removeClass('timer');

    /**
     * This part is for portfolio popup
     */
    // if (".portfolio-items".length > 0) {
    //   $(".portfolio-items").each(function() {
    //     $(this).magnificPopup({
    //       delegate: ".js-zoom-gallery",
    //       type: "image",
    //       gallery: {
    //         enabled: true,
    //       },
    //     })
    //   })
    // }

    /**
     * This part is for init google maps
     */
    // if ($("#my-map").length) {
    //   var options = {
    //     center: new google.maps.LatLng(43.053454, -76.144508),
    //     zoom: 7,
    //     mapTypeControl: true,
    //     gestureHandling: "cooperative",
    //     panControl: false,
    //     zoomControl: true,
    //     zoomControlOptions: {
    //       style: google.maps.ZoomControlStyle.DEFAULT,
    //       position: google.maps.ControlPosition.TOP_LEFT,
    //     },
    //     scaleControl: false,
    //     styles: [
    //       {
    //         featureType: "water",
    //         elementType: "geometry",
    //         stylers: [
    //           {
    //             color: "#576ee9",
    //           },
    //           {
    //             lightness: 17,
    //           },
    //         ],
    //       },
    //       {
    //         featureType: "landscape",
    //         elementType: "geometry",
    //         stylers: [
    //           {
    //             color: "#f5f5f5",
    //           },
    //           {
    //             lightness: 20,
    //           },
    //         ],
    //       },
    //       {
    //         featureType: "road.highway",
    //         elementType: "geometry.fill",
    //         stylers: [
    //           {
    //             color: "#ffffff",
    //           },
    //           {
    //             lightness: 17,
    //           },
    //         ],
    //       },
    //       {
    //         featureType: "road.highway",
    //         elementType: "geometry.stroke",
    //         stylers: [
    //           {
    //             color: "#ffffff",
    //           },
    //           {
    //             lightness: 29,
    //           },
    //           {
    //             weight: 0.2,
    //           },
    //         ],
    //       },
    //       {
    //         featureType: "road.arterial",
    //         elementType: "geometry",
    //         stylers: [
    //           {
    //             color: "#ffffff",
    //           },
    //           {
    //             lightness: 18,
    //           },
    //         ],
    //       },
    //       {
    //         featureType: "road.local",
    //         elementType: "geometry",
    //         stylers: [
    //           {
    //             color: "#ffffff",
    //           },
    //           {
    //             lightness: 18,
    //           },
    //         ],
    //       },
    //       {
    //         featureType: "poi",
    //         elementType: "geometry",
    //         stylers: [
    //           {
    //             color: "#f5f5f5",
    //           },
    //           {
    //             lightness: 21,
    //           },
    //         ],
    //       },
    //       {
    //         featureType: "poi.park",
    //         elementType: "geometry",
    //         stylers: [
    //           {
    //             color: "#d5d5d5",
    //           },
    //           {
    //             lightness: 21,
    //           },
    //         ],
    //       },
    //       {
    //         elementType: "labels.text.stroke",
    //         stylers: [
    //           {
    //             visibility: "on",
    //           },
    //           {
    //             color: "#f8f8f8",
    //           },
    //           {
    //             lightness: 25,
    //           },
    //         ],
    //       },
    //       {
    //         elementType: "labels.text.fill",
    //         stylers: [
    //           {
    //             saturation: 36,
    //           },
    //           {
    //             color: "#222222",
    //           },
    //           {
    //             lightness: 30,
    //           },
    //         ],
    //       },
    //       {
    //         elementType: "labels.icon",
    //         stylers: [
    //           {
    //             visibility: "off",
    //           },
    //         ],
    //       },
    //       {
    //         featureType: "transit",
    //         elementType: "geometry",
    //         stylers: [
    //           {
    //             color: "#f5f5f5",
    //           },
    //           {
    //             lightness: 19,
    //           },
    //         ],
    //       },
    //       {
    //         featureType: "administrative",
    //         elementType: "geometry.fill",
    //         stylers: [
    //           {
    //             color: "#fefefe",
    //           },
    //           {
    //             lightness: 10,
    //           },
    //         ],
    //       },
    //       {
    //         featureType: "administrative",
    //         elementType: "geometry.stroke",
    //         stylers: [
    //           {
    //             color: "#fefefe",
    //           },
    //           {
    //             lightness: 17,
    //           },
    //           {
    //             weight: 1.2,
    //           },
    //         ],
    //       },
    //     ],
    //   }
    //   var map = new google.maps.Map(document.getElementById("my-map"), options)
    //   var marker1 = new google.maps.Marker({
    //     position: map.getCenter(),
    //     title: "Retrina",
    //     icon: "http://placehold.it/60x30",
    //     animation: google.maps.Animation.BOUNCE,
    //   })
    //   marker1.setMap(map)
    // }

    /**
     * This part is for pagepiling
     */
    $("#pagepiling").pagepiling({
      sectionsColor: ["#fff", "#fff", "#fff", "#fff", "#fff"],
      anchors: ["hero", "about", "education", "experience", "contact"],
      menu: "#myMenu",
      direction: "vertical",
      verticalCentered: true,
      navigation: {
        position: "right",
        tooltips: [
          "HOME",
          "ABOUT ME",
          "EDUCATION",
          "EXPERIENCE",
          "GET IN TOUCH",
        ],
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

    /**
     * This part is for isotope
     */
    var $container = $(".portfolio-items")
    var $filter = $("#portfolio-filter")
    $container.isotope({
      filter: "*",
      layoutMode: "masonry",
      animationOptions: {
        duration: 750,
        easing: "linear",
      },
    })
    $filter.find("a").on("click", function() {
      var selector = $(this).attr("data-filter")
      $filter.find("a").removeClass("active")
      $(this).addClass("active")
      $container.isotope({
        filter: selector,
        animationOptions: {
          animationDuration: 750,
          easing: "linear",
          queue: false,
        },
      })
      return false
    })
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
