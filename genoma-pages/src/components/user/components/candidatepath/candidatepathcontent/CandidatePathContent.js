import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import CandidateStage from "./candidatestage/CandidateStage";
import CandidatePathPerform from "./candidatepathperform/CandidatePathPerform";

const styles = theme => ({
	contentRoot: {
		marginBottom: 90
	},
	paddingRightBot: {
		[theme.breakpoints.down("sm")]: {
			paddingBottom: 20
		},
		[theme.breakpoints.up("md")]: {
			paddingRight: 15
		}
	},
	paddingLeftTop: {
		[theme.breakpoints.up("md")]: {
			paddingLeft: 15
		}
	},
	container: {
		paddingLeft: 15,
		paddingRight: 15
	},
	"@media (min-width: 600px)": {
		container: {
			maxWidth: 594
		}
	},
	"@media (min-width: 960px)": {
		container: {
			maxWidth: 938
		}
	},
	"@media (min-width: 1280px)": {
		container: {
			maxWidth: 1170
		}
	},
	"@media (min-width: 1920px)": {
		container: {
			maxWidth: 1872
		}
	}
});

const CanidatePathContent = props => {
	const { classes } = props;
	return (
		<Grid container justify="center" className={classes.contentRoot}>
			<Grid container justify="center" className={classes.container}>
				<Grid
					item
					xs={12}
					sm={12}
					md={8}
					lg={8}
					xl={9}
					classes={{ item: classes.paddingRightBot }}
				>
					<CandidateStage />
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					lg={4}
					xl={3}
					classes={{ item: classes.paddingLeftTop }}
				>
					<CandidatePathPerform />
				</Grid>
			</Grid>
		</Grid>
	);
};

CanidatePathContent.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CanidatePathContent);
