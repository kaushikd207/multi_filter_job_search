import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../actions/jobList.slice";
import JobCard from "./JobCard";
import Filters from "./Filters";
import "./JobListing.css";

const JobListings = () => {
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state?.jobList?.data?.jdList);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      limit: 300,
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
    } catch (error) {
      dispatch(setData(error));
    }
  };
  return (
    <>
      <Filters jobList={jobList} />
      <div className="job-listings-container">
        <JobCard />
      </div>
    </>
  );
};

export default JobListings;
