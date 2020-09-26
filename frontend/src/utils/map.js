import React from 'react'
import ReactDom from 'react-dom'
import mapboxgl from 'mapbox-gl'
import { green, blue } from '@material-ui/core/colors'
import { LocalHospital, Home } from '@material-ui/icons';
import HospitalPopup from '../components/HospitalPopup'

export const addMarkers = ({
  map,
  hospitalData = [],
  location = []
}) => {
  if (!map) {
    return
  }
  hospitalData.forEach((hospital) => {
    const coordinates = [hospital.geometry.location.lng, hospital.geometry.location.lat]
    const { formatted_address: address, formatted_phone_number: phoneNumber, name, opening_hours: openingHours,  vaccineLevel , website } = hospital
    const hospitalMarker = createMarker(<LocalHospital style={{ fontSize: 40, color: green[300], cursor: 'pointer' }}/>, { anchor: 'bottom' })
    hospitalMarker.setLngLat(coordinates)
    const popup = createPopup(<HospitalPopup vaccineLevel={vaccineLevel} address={address} phoneNumber={phoneNumber} name={name} website={website} openingHours={openingHours}/>)
    hospitalMarker.setPopup(popup)
    hospitalMarker.addTo(map)
  })
  if (location.length === 2) {
    const userMarker = createMarker(<Home style={{ fontSize: 40, color: blue[300], cursor: 'pointer' }}/>, { anchor: 'bottom' })
    userMarker.setLngLat(location)
    userMarker.addTo(map)
    map.flyTo({center: location, zoom: 13})
  }
}

const createPopup = (component) => {
  const popup = document.createElement('div')
  ReactDom.render(component, popup)
  return new mapboxgl.Popup().setDOMContent(popup)
}

const createMarker = (component, options) => {
  const marker = document.createElement('div')
  ReactDom.render(component, marker)
  return new mapboxgl.Marker({
    element: marker,
    ...options
  })
}