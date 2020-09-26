import React from 'react'
import ReactDom from 'react-dom'
import mapboxgl from 'mapbox-gl'
import UserMarker from '../components/Markers/UserMarker'
import HospitalMarker from '../components/Markers/HospitalMarker'
import { green, blue } from '@material-ui/core/colors'
import { LocalHospital, Home } from '@material-ui/icons';

export const addMarkers = ({
  map,
  hospitalData = [],
  userLocation = []
}) => {
  if (!map) {
    return
  }
  hospitalData.forEach((hospital) => {
    const coordinates = [hospital.geometry.location.lng, hospital.geometry.location.lat]
    const hospitalMarker = createMarker(<LocalHospital style={{ fontSize: 40, color: green[300], cursor: 'pointer' }}/>, { anchor: 'bottom' })
    hospitalMarker.setLngLat(coordinates)
    hospitalMarker.setPopup(new mapboxgl.Popup().setHTML(
      `<h3>Hello</h3>`
    ))
    hospitalMarker.addTo(map)
  })
  if (userLocation.length === 2) {
    const userMarker = createMarker(<Home style={{ fontSize: 40, color: blue[300], cursor: 'pointer' }}/>, { anchor: 'bottom' })
    userMarker.setLngLat(userLocation)
    userMarker.addTo(map)
  }
}

const createMarker = (component, options) => {
  const marker = document.createElement('div')
  ReactDom.render(component, marker)
  return new mapboxgl.Marker({
    element: marker,
    ...options
  })
}