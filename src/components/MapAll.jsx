import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

function MapAll(props) {
  return (
    <div className="map-container">
      <MapContainer center={props.list[0].coordinates} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {props.list.map((eachTodo) => {
          return (
            <Marker key={eachTodo._id} position={eachTodo.coordinates}/>
          )
        })}
        
        
      </MapContainer>

    </div>
  );
}

export default MapAll;
