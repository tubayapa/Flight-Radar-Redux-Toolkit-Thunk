import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";

const App = () => {
  //  is map state active?
  const [isMapView, setIsMapView] = useState(true);
  const dispatch = useDispatch();

  //  get flights data

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <div>
      <Header />
      <div className="view-buttons">
        <button
          onClick={() => setIsMapView(true)}
          className={isMapView ? "active" : ""}
        >
          Map View
        </button>
        <button
          onClick={() => setIsMapView(false)}
          className={isMapView ? "" : "active"}
        >
          List View
        </button>
      </div>

      {/* which view to show map or list? */}
      {isMapView ? <MapView /> : <ListView />}
    </div>
  );
};

export default App;
