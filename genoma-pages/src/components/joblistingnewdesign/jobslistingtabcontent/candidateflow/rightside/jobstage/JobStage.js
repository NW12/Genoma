import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Button, Grid } from "@material-ui/core";
import JobStage1 from "./jobstage1/JobStage1";
import JobStage2 from "./jobstage2/JobStage2";
import JobStage3 from "./jobstage3/JobStage3";
import JobStage4 from "./jobstage4/JobStage4";

const styles = theme => ({
	card: {
		marginBottom: 10,
		padding: "10px 20px 25px 20px",
		[theme.breakpoints.only("md")]: {
			width: 300
		}
	},
	jobStageTitle: {
		fontWeight: "300"
	},
	topStagesMinutes: {
		textAlign: "center",
		paddingBottom: 19
	},
	roseNumbers: {
		fontSize: 62,
		fontWeight: "700",
		color: "#ff008a",
		lineHeight: 1.0
	},
	btn: {
		color: "#ffffff",
		fontWeight: "300",
		fontSize: 14
	},
	topBtn: {
		marginTop: 20
	},
	noPadding: {
		padding: 0
	},
	btnBottom: {
		marginTop: 18,
		textAlign: "center"
	},
	sizeLarge: {
		padding: "8px 16px"
	}
});

class JobStage extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.card}>
				<Typography variant="h6" className={classes.jobStageTitle}>
					PATH RESUME
				</Typography>
				<Grid
					container
					justify="center"
					className={classes.topStagesMinutes}
				>
					<Grid item xs={6}>
						<Typography className={classes.roseNumbers}>
							4
						</Typography>
						<Typography variant="body1">Total Stages</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography className={classes.roseNumbers}>
							52
						</Typography>
						<Typography variant="body1">Minutes.</Typography>
						<Typography variant="body1">Path total time</Typography>
					</Grid>
					<Grid item xs={12} className={classes.topBtn}>
						<Button
							variant="contained"
							size="large"
							color="primary"
							className={classes.btn}
							classes={{ sizeLarge: classes.sizeLarge }}
						>
							PREVIEW CANDIDATE FLOW
						</Button>
					</Grid>
				</Grid>
				<JobStage1 />
				<JobStage2 />
				<JobStage3 />
				<JobStage4 />
				<Grid container className={classes.btnBottom}>
					<Grid item xs={12}>
						<Button
							variant="contained"
							size="large"
							color="primary"
							className={classes.btn}
						>
							SUBMIT APPLICATION
						</Button>
					</Grid>
				</Grid>
			</Paper>
		);
	}
}

JobStage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobStage);
