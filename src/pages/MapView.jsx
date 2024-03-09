import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { clearPath } from "../redux/slices/flightSlice";

const MapView = ({ setDetailId }) => {
  const flightState = useSelector((store) => store.flightReducer);

  const dispatch = useDispatch();

  // create marker icon

  const planeIcon = icon({
    iconUrl: "/public/plane-icon.png",
    iconSize: [30, 30],
  });

  return (
    <MapContainer
      center={[38.948771, 35.425597]}
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* show the markers for each flight */}

      {flightState.flights.map((flight) => (
        <Marker
          icon={planeIcon}
          key={flight.id}
          position={[flight.lat, flight.lng]}
        >
          <Popup>
            <div className="d-flex flex-column gap-2">
              <span>Code: {flight.code}</span>
              <button
                onClick={() => setDetailId(flight.id)}
                className="w-100 bg-primary text-white rounded"
              >
                Detail
              </button>
              {/*if there is route add delete button */}

              {flightState.path.length > 0 && (
                <button
                  onClick={() => dispatch(clearPath())}
                  className="w-100 bg-danger text-white rounded"
                >
                  Clear the Route
                </button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}

      {/*show flight route with line */}
      <Polyline positions={flightState?.path} />
    </MapContainer>
  );
};

export default MapView;
