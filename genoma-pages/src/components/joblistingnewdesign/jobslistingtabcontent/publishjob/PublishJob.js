import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";
import BottomButtons from "./buttons/BottomButtons";
import JobBoards from "./jobboards/JobBoards";
import TeamMembers from "./teammembers/TeamMembers";
import AnchorLink from "../../../common/RouterLink/AnchorLink";

const styles = theme => ({
	publishJobContent: {
		padding: "42px 19px 35px 19px",
		marginBottom: 10
	},
	btnEditJobPosting: {
		[theme.breakpoints.down("xs")]: {
			marginRight: 10
		}
	},
	publishJobContentHeading: {
		marginBottom: 30,
		[theme.breakpoints.down("xs")]: {
			marginBottom: 17
		}
	},
	jobLinkHeading: {
		fontWeight: "500"
	},
	linkStyle: {
		color: "#ff008a",
		textDecoration: "none",
		fontsize: 16,
		fontWeight: "400"
	}
});

class PublishJob extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.publishJobContent}>
				<div className={classes.publishJobContentHeading}>
					<Typography variant="body1">
						Here you can copy the link to share with candidates and
						also share this job position with team members
					</Typography>
				</div>

				<Grid container>
					<Grid item xs={12}>
						<Typography
							variant="body1"
							classes={{ body1: classes.jobLinkHeading }}
						>
							Job's Link
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<AnchorLink
							to="/recruitee.com"
							className={classes.linkStyle}
						>
							https://ogr1.recruitee.com/o/dvefgo
						</AnchorLink>{" "}
					</Grid>
				</Grid>
				<JobBoards />
				<TeamMembers />
				<BottomButtons />
			</Paper>
		);
	}
}

PublishJob.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PublishJob);
