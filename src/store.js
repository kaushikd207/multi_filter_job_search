import { configureStore } from "@reduxjs/toolkit";
import setJobListReducer from "./actions/jobList.slice";
import setFilterData from "./actions/filteredData.slice";
export const store = configureStore({
  reducer: {
    jobList: setJobListReducer,
    filterData: setFilterData,
  },
});
