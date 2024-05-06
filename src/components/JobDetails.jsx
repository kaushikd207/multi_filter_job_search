import React, { useState } from "react";

const JobDetails = ({ job }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayText = showAll
    ? job?.jobDetailsFromCompany
    : job?.jobDetailsFromCompany.substring(0, 300) + "...";

  return (
    <div>
      <p>{displayText}</p>
      {!showAll && <a onClick={toggleShowAll}>Show More</a>}
      {showAll && <a onClick={toggleShowAll}>Show Less</a>}
    </div>
  );
};

export default JobDetails;
