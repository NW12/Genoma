import React from "react";
import PropTypes from "prop-types";
import { withStyles, CircularProgress, Typography } from "@material-ui/core";

const styles = {
	root: {
		position: "relative",
		height: 83,
		width: 83,
		border: "1px solid #999999",
		borderRadius: "100%",
		margin: "0 auto"
	},
	wrapper: {
		height: 75,
		width: 75,
		margin: 4,
		backgroundColor: "#ffffff",
		borderRadius: "100%",
		border: "1px solid #999999",
		textAlign: "center",
		boxSizing: "border-box",
		paddingTop: 25,
		paddingBottom: 25
	},

	fabProgress: {
		top: 0,
		left: 0,
		position: "absolute",
		borderRadius: "100%"
	},
	progressPercent: {
		fontSize: 21,
		lineHeight: 1.0,
		fontWeight: "700",
		color: "#ff008a"
	}
};

class LevelRemaining extends React.Component {
	state = {
		completed: 0
	};

	componentDidMount() {
		this.timer = setInterval(this.progress, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	progress = () => {
		const { completed } = this.state;
		this.setState({ completed: completed >= 100 ? 0 : completed + 10 });
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				<div
					className={classes.root}
					style={{ backgroundColor: this.props.backgroundColorUsed }}
				>
					<CircularProgress
						className={classes.fabProgress}
						variant="determinate"
						// value={this.state.completed}
						size={84}
						thickness={2.5}
						value={30}
					/>

					<div className={classes.wrapper}>
						<Typography
							variant="body1"
							classes={{ body1: classes.progressPercent }}
						>
							<span>5 / 10</span>
						</Typography>
					</div>
				</div>
			</div>
		);
	}
}

LevelRemaining.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LevelRemaining);
