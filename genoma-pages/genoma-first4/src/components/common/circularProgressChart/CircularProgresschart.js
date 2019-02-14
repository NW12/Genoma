import React from "react";
import "./CircularProgresschart.css";

const circularProgressChart = props => {
  return (
    <div className="page">
      {/* <!-- default --> */}
      <div className="clearfix">
        <div className={"c100 med center " + props.className}>
          <span>{props.icon}</span>
          <div className="slice">
            <div className="bar" />
            <div className="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default circularProgressChart;
