import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightActions";

const initialState = {
  isLoading: true,
  isError: false,
  flights: [],
  path: [],
};
const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setPath: (state, action) => {
      state.path = action.payload;
    },
    clearPath: (state) => {
      state.path = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.flights = action.payload;
      })
      .addCase(getFlights.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { setPath, clearPath } = flightSlice.actions;

export default flightSlice.reducer;
