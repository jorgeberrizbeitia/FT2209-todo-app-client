import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useMapEvents } from 'react-leaflet/hooks'

// COMPONENT NEEDED TO DETECT CLICK EVENT AND RECORD POSITION
// CAN BE CREATED HERE OR IN SEPARATE FILE
function LocationDetector({setClickedPosition}) {
  useMapEvents({
    click: (event) => {
      console.log(event.latlng)
      const obj = event.latlng
      setClickedPosition([
        obj.lat.toFixed(5), 
        obj.lng.toFixed(5)
      ])
    },
  })
  return null
}

function MapWithClickable() {

  const [ clickedPosition, setClickedPosition ] = useState(null)
  const [ center, setCenter ] = useState([51.505, -0.09])

  useEffect(() => {
    setCenter(clickedPosition)
  }, [clickedPosition])

  return (
    <div>

      <h3>Map with option to click to add marker</h3>

      <div className="map-container">

        <MapContainer 
          center={center} 
          zoom={13} 
          scrollWheelZoom={false} 
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LocationDetector setClickedPosition={setClickedPosition}/>

          {clickedPosition !== null && (
            <Marker position={clickedPosition}/>
          )}

        </MapContainer>

      </div>

      <div>
        <p>Position:</p>
        <p>Lat: {clickedPosition ? clickedPosition[0] : "Click on map"}</p>
        <p>Long: {clickedPosition ? clickedPosition[1] : "Click on map"}</p>
      </div>

    </div>
  )
}

export default MapWithClickable