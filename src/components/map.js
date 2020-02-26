import React, { useEffect } from "react"
import GoogleMap from "google-map-react"

const Map = () => {
  useEffect(() => {
    
    if (!window.$ && !window.jQuery) {
      console.log('init jquery and bootstrap')
      window.$ = require("jquery")
      window.jQuery = $
      require("bootstrap")
    }

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
  }, [])

  return (
    <>
      <GoogleMap
        apiKey={'AIzaSyBzp52ru4d0NOE7LuqtCFKGuku_qEhKV2Y'}
      ></GoogleMap>
    </>
  )
}

export default Map
