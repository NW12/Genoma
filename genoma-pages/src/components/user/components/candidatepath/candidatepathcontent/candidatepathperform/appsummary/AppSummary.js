import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";
import LevelRemaining from "./levelremaining/LevelRemaining";
import MinsRemaining from "./minsremaining/MinsRemaining";

const styles = theme => ({
	card: {
		paddingTop: 18,
		paddingBottom: 28
	},
	appTitle: {
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 30
	},

	heading: {
		fontWeight: "300",
		lineHeight: 1.0
	},
	roseNumbers: {
		fontSize: 62,
		fontWeight: "700",
		color: "#ff008a",
		lineHeight: 1.0,
		width: 83,
		height: 83,
		margin: "0 auto"
	},
	topStagesMinutes: {
		textAlign: "center"
	},
	levelInfo: {
		marginTop: 9
	},
	remLevelInfo: {
		marginTop: 12
	},
	// remMinItem: {
	// 	paddingTop: 8
	// },
	body1: {
		fontWeight: "300",
		lineHeight: 1.0
	}
});

class AppSummary extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.card}>
				<Grid container>
					<Grid item xs={12} className={classes.appTitle}>
						<Typography variant="h6" className={classes.heading}>
							Application Summary
						</Typography>
					</Grid>
				</Grid>
				<Grid
					container
					justify="center"
					className={classes.topStagesMinutes}
				>
					<Grid item xs={6}>
						<LevelRemaining />
						<Typography
							variant="body1"
							classes={{ body1: classes.body1 }}
							className={classes.levelInfo}
						>
							10 levels
						</Typography>
						<Typography
							variant="body1"
							classes={{ body1: classes.body1 }}
						>
							remaining
						</Typography>
					</Grid>
					<Grid item xs={6} className={classes.remMinItem}>
						<MinsRemaining />
						<Typography
							variant="body1"
							className={classes.remLevelInfo}
							classes={{ body1: classes.body1 }}
						>
							Minutes
						</Typography>
						<Typography
							variant="body1"
							classes={{ body1: classes.body1 }}
						>
							Remaining Aprox
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		);
	}
}

AppSummary.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppSummary);
