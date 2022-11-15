import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

function Map(props) {

  return (
    <div className="map-container">
      <MapContainer center={[41.382894, 2.177432]} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[41.39, 2.17]}/>
        <Marker position={[41.40, 2.17]}/> */}
        {props.details.coordinates.length !== 0 && (
          <Marker position={props.details.coordinates}>
            <Popup>
              <b>{props.details.title}</b>
            </Popup>
          </Marker>
        )}
        
      </MapContainer>

    </div>
  );
}

export default Map;
