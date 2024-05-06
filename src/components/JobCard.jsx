import React, { useState } from "react";
import "./JobCard.css";
import { useSelector } from "react-redux";
import JobDetails from "./JobDetails";

const JobCard = () => {
  const jobs = useSelector((state) => state?.filterData?.data);
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return jobs?.map((job) => (
    <div className="card">
      <div className="pill">Posted 10days ago</div>
      <div className="logoContainer">
        <div className="content1">
          {" "}
          <img src={job?.logoUrl} alt="company" />
        </div>
        <div className="content">
          {" "}
          <h5>{job?.companyName || "Weekday"}</h5>
          <h4>{`${job?.jobRole} Engineer`}</h4>
          <p>{job?.location}</p>
        </div>
      </div>
      <h5>{`Estimated Salary: Rs:- ${job?.minJdSalary || "0"}-${
        job?.maxJdSalary
      } LPA ✅`}</h5>
      <h3>About Company: {job.company}</h3>
      <h4>About Us</h4>
      <JobDetails job={job} />
      <p>Minimun Experience:</p>
      <p>{job?.minExp || 0}</p>
      <button onClick={() => (window.location = "https://www.weekday.works")}>
        Easy Apply
      </button>
      <button
        onClick={() => (window.location = "https://www.weekday.works")}
        className="referBtn"
      >
        Unlock referral asks
      </button>
    </div>
  ));
};

export default JobCard;
