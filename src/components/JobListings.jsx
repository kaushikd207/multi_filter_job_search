import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../actions/jobList.slice";

const JobListings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        limit: 10,
        offset: 0,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      try {
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          requestOptions
        );
        const result = await response.json();
        dispatch(setData(result));
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <>job listing</>
    // <div className="job-listings-container">
    //   <Filters />
    //   <div className="job-listings">
    //     { {jobs.map((job) => (
    //       <JobCard key={job.id} job={job} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default JobListings;
