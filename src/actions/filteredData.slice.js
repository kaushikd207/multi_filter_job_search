import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const filteredSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setFilterData } = filteredSlice.actions;
export default filteredSlice.reducer;
