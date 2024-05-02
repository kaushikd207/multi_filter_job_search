import React from "react";
import "./JobCard.css";
const JobCard = ({ job }) => {
  return (
    <div className="card">
      <h4>{`${job?.jobRole} Engineer`}</h4>
      <p>{job?.location}</p>
      <h5>{`Estimated Salary:$ ${job?.minJdSalary}-${job?.maxJdSalary} LPA ✅`}</h5>
      <h3>About Company: {job.company}</h3>
      <h4>About Us</h4>
      <p>{job?.jobDetailsFromCompany}</p>
      <p>Minimun Experience: {job.experience}</p>
      <p>{job?.minExp}</p>
      <button>Apply</button>
      <button>Unlock referral asks</button>
    </div>
  );
};

export default JobCard;
