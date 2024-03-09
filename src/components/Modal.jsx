import axios from "axios";
import { useEffect, useState } from "react";
import { headerOpt } from "../constants";
import formatDate from "../utils/formatDate";
import { setPath } from "../redux/slices/flightSlice";
import { useDispatch } from "react-redux";

const Modal = ({ detailId, close }) => {
  //  we use as a state the modal info because of will use only in modal and no need to use it for another component

  const [d, setDetail] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    // remove previous flight info each time works

    setDetail(null);

    // get new flights info
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        headerOpt
      )

      .then((res) => {
        dispatch(setPath(res.data.trail));
        setDetail(res.data);
      })

      .catch((err) => console.log(err));

    // It works every time the id is updated [detailId]
  }, [detailId]);

  // console.log(d);

  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <p className="close-area">
          <button onClick={close}>X</button>
        </p>
        {!d ? (
          <div className="wrapper">
            <div className="loader">
              <span></span>
            </div>
          </div>
        ) : !d.aircraft?.model || !d.airport.origin ? (
          <div>
            <p>The information of this flight is confidential</p>
          </div>
        ) : (
          <>
            <h4>{d.aircraft.model.text}</h4>
            <h6>{d.aircraft.model.code}</h6>
            <p>
              <span>Tail Code</span>
              <span>{d.aircraft.registration}</span>
            </p>
            <img src={d.aircraft.images.large[0].src} />
            <p>
              <span>Airline </span>
              <span>{d.airline.short}</span>
            </p>

            <p>
              <span>Departure </span>
              <a target="_blank" href={d.airport.origin?.website}>
                {d.airport.origin.name} (
                {d.airport.origin.position.country.name})
              </a>
            </p>

            <p>
              <span>Arrival </span>
              <a target="_blank" href={d.airport.destination?.website}>
                {d.airport.destination.name}(
                {d.airport.destination.position.country.name})
              </a>
            </p>

            <p>
              <span>Deperture Time</span>
              <span>{formatDate(d.time.scheduled.departure)}</span>
            </p>

            <p>
              <span>Arrival Time</span>
              <span>{formatDate(d.time.scheduled.arrival)}</span>
            </p>

            <p className={d.status.icon}>
              <span>{d.status.text}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
