// App.js
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import JobListings from "./components/JobListings";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <JobListings />
      </div>
    </Provider>
  );
}

export default App;
