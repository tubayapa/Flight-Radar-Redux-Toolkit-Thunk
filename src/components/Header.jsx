import { useSelector } from "react-redux";

const Header = () => {
  const flightState = useSelector((store) => store.flightReducer);

  return (
    <header>
      <div>
        <img src="/public/plane-logo.png" />
        <h4>Flight Radar</h4>
      </div>
      <p>
        {flightState.isLoading
          ? "Flights are loading..."
          : flightState.isError
          ? "Sorry, something went wrong"
          : flightState.flights.length + " " + "Flights are found"}
      </p>
    </header>
  );
};

export default Header;
