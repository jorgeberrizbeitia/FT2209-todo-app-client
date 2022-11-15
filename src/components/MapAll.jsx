import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

function MapAll(props) {

  return (
    <div className="map-container">
      <MapContainer center={[41.382894, 2.177432]} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {props.list.map((eachTodo) => {
          if (eachTodo.coordinates.length === 0) {
            return null
          }
          return (
            <Marker key={eachTodo._id} position={eachTodo.coordinates}/>
          )
        })}
        
        
      </MapContainer>

    </div>
  );
}

export default MapAll;
