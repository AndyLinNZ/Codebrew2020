import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import styled from 'styled-components'
import 'mapbox-gl/dist/mapbox-gl.css'

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const Map = () => {

  mapboxgl.accessToken = 'pk.eyJ1IjoiamR1YmFyIiwiYSI6ImNrY3Bwa3NodjBkeTMzMm1mY2lnb2gwaTUifQ.wwHdEi8iV7Co3ORMUHTmdA'
  
  const mapContainerRef = useRef(null)
  const [map, setMap] = useState(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [144.963058, -37.813629],
      zoom: 11,
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
    })
    setMap(map)
    return () => map.remove()
  }, [])
  return (
    <MapContainer ref={mapContainerRef}>
      <div>Hello</div>
    </MapContainer>
  )
}

export default Map
