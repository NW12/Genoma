import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import classNames from "classnames";

const styles = theme => ({
	labelIcon: {
		fontWeight: 500
	},
	outerCircle: {
		position: "relative",
		width: 90,
		height: 90,
		borderRadius: "100%",
		margin: "0 auto"
	},
	smallDot: {
		position: "absolute",
		content: "",
		width: 12,
		height: 12,
		top: "14px",
		right: 0,
		borderRadius: "100%"
	},
	smallDotGreen: {
		backgroundColor: "#4caf50"
	},
	smallDotGray: {
		backgroundColor: "#5f5f5f"
	},
	smallHeart: {
		position: "absolute",
		width: 38,
		height: 40,
		// backgroundImage: `url(${HeartShape})`,
		backgroundSize: "cover",
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		textAlign: "center",
		boxSizing: "border-box",
		right: -11,
		bottom: 0,
		paddingTop: 7
	},
	levels: {
		color: "#f5f5f5",
		fontSize: 8
	}
});

const SingleGame = props => {
	const { classes } = props;
	return (
		<div>
			<div className={classes.outerCircle}>
				<img src={props.src} alt={props.alt} />
				<div
					className={classNames(
						classes.smallDot,
						props.addGame
							? classes.smallDotGreen
							: classes.smallDotGray
					)}
				/>
				<div
					className={classes.smallHeart}
					style={{ backgroundImage: `url(${props.HeartShape})` }}
				>
					<span className={classes.levels}>1</span>
				</div>
			</div>

			<div>
				<Typography variant="body1" className={classes.labelIcon}>
					{props.label}
				</Typography>
			</div>
		</div>
	);
};

SingleGame.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleGame);
