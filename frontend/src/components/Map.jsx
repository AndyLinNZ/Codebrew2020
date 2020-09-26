import React, { useEffect, useRef, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { OutboundLink } from 'react-ga'
import mapboxgl from 'mapbox-gl'
import styled from 'styled-components'
import VaccFind from '../assets/VaccFind.png'
import GitHub from '../assets/github.png'
import { fetchHospitals } from '../actions/fetchHospitals'
import { addMarkers } from '../utils/map'

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const VaccLogo = styled.img`
  bottom: 0;
  width: 250px;
  height: auto;
  position: absolute;
  margin-bottom: -16px;
`

const GitHubIcon = styled.img`
  top: 8px;
  opacity: 0.7;
  cursor: pointer;
  right: 110px;
  width: 25px;
  position: absolute;
  height: auto;
`

const Map = () => {

  mapboxgl.accessToken = 'pk.eyJ1IjoiamR1YmFyIiwiYSI6ImNrY3Bwa3NodjBkeTMzMm1mY2lnb2gwaTUifQ.wwHdEi8iV7Co3ORMUHTmdA'
  
  const mapContainerRef = useRef(null)
  const [userLocation, setUserLocation] = useState([])
  const [hospitalData, setHospitalData] = useState([])
  const [map, setMap] = useState(null)

  useEffect(() => {
    const getHospitalData = async () => {
      if (userLocation.length === 2) {
        const res = await fetchHospitals(userLocation)
        if (res.data.hospitals) {
          setHospitalData(res.data.hospitals)
        }
      }
    }
    getHospitalData()
  }, [userLocation])

  useEffect(() => {
    addMarkers({map, hospitalData, userLocation})
  }, [hospitalData, map, userLocation])

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [144.963058, -37.813629],
      zoom: 11,
      minZoom: 9,
      attributionControl: false
    })
    map.addControl(
      new mapboxgl.AttributionControl({
        compact: true
      })
    )
    map.on('load', () => {
      map.addControl(
        new mapboxgl.NavigationControl({
          showZoom: true,
          showCompass: true
        }),
        'bottom-right'
      )
      const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        fitBoundsOptions: {
          zoom: 13
        },
        trackUserLocation: true,
        showUserLocation: false,
        showAccuracyCircle: false
      })
      map.addControl(geolocate, 'bottom-right')
      geolocate.on('geolocate', (e) => {
        const lng = e.coords.longitude
        const lat = e.coords.latitude
        setUserLocation([lng, lat])
      })
    })
    setMap(map)
    return () => map.remove()
  }, [])
  
  return (
    <div>
      <MapContainer ref={mapContainerRef}/>
      <VaccLogo src={VaccFind} alt="vaccfind"/>
      <GitHubIcon src={GitHub} alt="github" onClick={() => window.open("https://github.com/JoshDubar/Codebrew2020", "_blank")}/>
    </div>
  )
}

export default Map
