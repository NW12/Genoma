import React from "react";
import JobStage from "./jobstage/JobStage";
import JobState from "./jobstate/JobState";

const RightSide = () => {
  return (
    <React.Fragment>
      <JobStage />
      <JobState />
    </React.Fragment>
  );
};

export default RightSide;
