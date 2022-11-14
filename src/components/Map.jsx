import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

function Map(props) {
  return (
    <MapContainer center={props.details.coordinates} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[41.39, 2.17]}/>
      <Marker position={[41.40, 2.17]}/> */}
      <Marker position={props.details.coordinates}>
        <Popup>
          <b>{props.details.title}</b>
        </Popup>
      </Marker>
      
    </MapContainer>
  );
}

export default Map;
