import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import CanidateStage1 from "./candidatestage1/CandidateStage1";
import CanidateStage2 from "./candidatestage2/CandidateStage2";
import CanidateStage3 from "./candidatestage3/CandidateStage3";
import CanidateStage4 from "./candidatestage4/CandidateStage4";

const styles = theme => ({
	card: {
		paddingTop: 60,
		paddingBottom: 36
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

class CanidateStage extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.card}>
				<CanidateStage1 />
				<CanidateStage2 />
				<CanidateStage3 />
				<CanidateStage4 />
			</Paper>
		);
	}
}

CanidateStage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CanidateStage);
