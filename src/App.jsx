import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";
import Modal from "./components/Modal";

const App = () => {
  //  is map state active?
  const [isMapView, setIsMapView] = useState(true);

  // id that will show detail of the item
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  //  get flights data

  useEffect(() => {
    dispatch(getFlights());
    setInterval(() => {
      dispatch(getFlights());
    }, 10000);
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
      {isMapView ? (
        <MapView setDetailId={setDetailId} />
      ) : (
        <ListView setDetailId={setDetailId} />
      )}

      {/* if there is any detailId show modal */}
      {detailId && (
        <Modal detailId={detailId} close={() => setDetailId(null)} />
      )}
    </div>
  );
};

export default App;
