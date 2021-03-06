import React from "react";

import _ from "lodash";
import CircularProgressbar from "react-circular-progressbar";

// Component that renders an arbitrary
// number of divs on top of CircularProgressbar,
// whose content is centered.
function LayeredProgressbar(props) {
	const { renderOverlays, ...otherProps } = props;
	const overlayStyles = {
		position: "absolute",
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	};
	const overlays = props.renderOverlays();
	return (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: "100%"
			}}
		>
			<div style={{ position: "absolute" }}>
				<CircularProgressbar {...otherProps} textForPercentage={null} />
			</div>
			{overlays.map((overlay, index) => (
				<div style={overlayStyles} key={index}>
					{overlay}
				</div>
			))}
		</div>
	);
}

function RadialSeparator(props) {
	return (
		<div
			style={{
				background: "#fff",
				width: "3px",
				height: "100%",
				transform: `rotate(${props.degrees}deg)`
			}}
		/>
	);
}

// Expects an even number of separators.
// Can be implemented with non-even numbers
// but requires changing the styling of LayeredProgressbar,
// left as exercise to the reader.
function getRadialSeparators(numSeparators) {
	const degrees = 360 / numSeparators;
	return _.range(numSeparators / 2).map(index => (
		<RadialSeparator degrees={index * degrees} />
	));
}

function SegmentedProgressbar(props) {
	return (
		<LayeredProgressbar
			percentage={props.percentage}
			styles={{
				path: {
					// Tweak path color:
					stroke: "#a135f4",
					// Tweak path to use flat or rounded ends:
					strokeLinecap: "butt",
					// Tweak transition animation:
					transition: "stroke-dashoffset 0.5s ease 0s"
				},
				// Customize the circle behind the path
				trail: {
					// Tweak the trail color:
					stroke: "#fdddee"
				}
			}}
			renderOverlays={() =>
				getRadialSeparators(10).concat(
					<div
						style={{
							fontSize: 21,
							lineHeight: 1.0,
							fontWeight: "700",
							color: "#ff008a"
						}}
					>
						{props.percentage}
					</div>
				)
			}
		/>
	);
}

export default SegmentedProgressbar;
