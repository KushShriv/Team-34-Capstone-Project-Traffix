// @license
// Copyright 2019 Google LLC. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
arekere = { lat: 12.890631905939655, lng: 77.59808109273573, zoom: 18.5 };
jp_nagar = { lat: 12.906434245038183, lng: 77.5804062705511, zoom: 19 };

//ctrl+h and Change arekere to jp_nagar to see the traffic layer in JP Nagar
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: arekere.zoom,
      center: { lat: arekere.lat, lng: arekere.lng },
      disableDefaultUI: true,
      draggable: false,
      fullscreenControl:true,
      styles: [
        {
          featureType: "poi",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "street poi",
          stylers: [{ visibility: "off" }]
        }
       ]
    });
    const trafficLayer = new google.maps.TrafficLayer();
  
    trafficLayer.setMap(map);
  }
  
  window.initMap = initMap;
  