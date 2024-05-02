import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const jobListSlice = createSlice({
  name: "jobList",
  initialState,
  reducers: {
    setData: (state, actions) => {
      state.data = actions.payload;
    },
  },
});

export const { setData } = jobListSlice.actions;
export default jobListSlice.reducer;
