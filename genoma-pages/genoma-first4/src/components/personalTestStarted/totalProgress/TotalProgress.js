import React from "react";
import TotalProgressBar from "./totalProgressbar/TotalProgressBar";
import PersonalInfoForm from "../personalInfoForm/PersonalInfoForm";

const style = {
  paddingTop: 75,
  paddingBottom: 40
};

const TotalProgress = () => {
  return (
    <div style={style}>
      <TotalProgressBar />
      <PersonalInfoForm />
    </div>
  );
};

export default TotalProgress;
