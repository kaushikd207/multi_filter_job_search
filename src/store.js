import { configureStore } from "@reduxjs/toolkit";
import setJobListReducer from "./actions/jobList.slice";
export const store = configureStore({
  reducer: {
    jobList: setJobListReducer,
  },
});
