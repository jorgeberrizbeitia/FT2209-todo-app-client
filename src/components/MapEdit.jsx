import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

function MapEdit(props) {

  const handleDragMarker = (event) => {
    console.log(event.target)
    props.setCoordinates([event.target._latlng.lat, event.target._latlng.lng])
  }

  return (
    <div className="map-container">
      <MapContainer center={props.coordinates} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker 
        position={props.coordinates} 
        draggable={true}
        // event handler recibe un objeto
        // propiedades será lo que identifica el tipo de evento
        eventHandlers={{
          dragend: handleDragMarker
        }}
      />
      
    </MapContainer>
    </div>
  );
}

export default MapEdit;