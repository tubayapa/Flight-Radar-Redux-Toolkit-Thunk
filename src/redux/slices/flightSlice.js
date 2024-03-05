import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  isError: false,
  flights: [],
};
const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
});

export default flightSlice.reducer;
