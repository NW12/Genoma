import React from "react";

// Import module and default styles
import "react-circular-progressbar/dist/styles.css";
// Import custom examples
import SegmentedProgressbar from "./segementedprogressbar/SegmentedProgressbar";

const percentage = 52;

const MinsRemaining = () => {
	return (
		<div
			style={{
				width: "83px",
				height: "83px",
				margin: "0 auto",
				position: "relative"
			}}
		>
			<SegmentedProgressbar percentage={percentage} />
		</div>
	);
};

export default MinsRemaining;
