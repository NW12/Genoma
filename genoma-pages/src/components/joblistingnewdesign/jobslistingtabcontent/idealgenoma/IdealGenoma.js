import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import JobState from "./jobstate/JobState";
import { Grid } from "@material-ui/core";
import IdealGenomeContent from "./idealgenomecontent/IdealGenomeContent";

const styles = theme => ({
	paddingLeftRight: {
		[theme.breakpoints.up("sm")]: {
			paddingRight: 5,
			paddingLeft: 5
		}
	}
});

const IdealGenoma = props => {
	const { classes } = props;
	return (
		<Grid container>
			<Grid
				item
				xs={12}
				sm={12}
				lg={9}
				xl={9}
				classes={{ item: classes.paddingLeftRight }}
			>
				<IdealGenomeContent />
			</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				lg={3}
				xl={3}
				classes={{ item: classes.paddingLeftRight }}
			>
				<JobState />
			</Grid>
		</Grid>
	);
};

IdealGenoma.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IdealGenoma);
