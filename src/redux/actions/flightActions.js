import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constants";

// 1- get flights data from API
export const getFlights = createAsyncThunk("flights/getFlights", async () => {
  const res = await axios.request(options);

  // 2- edit incomig data from api
  // turn array inside arrays to object
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lng: item[3],
  }));

  // 3- determine as a action payload
  return formatted;
});
