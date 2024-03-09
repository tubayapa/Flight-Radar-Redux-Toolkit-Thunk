import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { useState } from "react";

const ListView = ({ setDetailId }) => {
  const flightState = useSelector((store) => store.flightReducer);

  // first element to display
  const [itemOffset, setItemOffset] = useState(0);

  // element to display per page
  const itemsPerPage = 10;

  // last element to display
  const endOffset = itemOffset + itemsPerPage;

  // take between firt and last elements
  const currentItems = flightState.flights.slice(itemOffset, endOffset);

  // find max number of pages
  const pageCount = Math.ceil(flightState.flights.length / itemsPerPage);

  // It works on every page selection
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % flightState.flights.length;

    setItemOffset(newOffset);
  };

  return (
    <div className="p-5">
      <table className="table table-striped table-hover table-responsive mt-4">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tail Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.slice(0, 10).map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.code}</td>
              <td>{i.lat}</td>
              <td>{i.lng}</td>
              <td>
                <button
                  onClick={() => setDetailId(i.id)}
                  className="btn btn-primary"
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageRangeDisplayed={5}
        previousLabel="< Previous"
        nextLabel="Next >"
        className="pagination"
      />
    </div>
  );
};

export default ListView;
