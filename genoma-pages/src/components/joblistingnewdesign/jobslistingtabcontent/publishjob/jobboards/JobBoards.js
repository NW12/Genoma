import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, Paper, Grid } from "@material-ui/core";
import ZipRecruiterLogo from "../../../../../assets/images/ziprecruiter-logo-publishjob.png";
import LinkedinLogo from "../../../../../assets/images/linkedin-logo-publishjob.png";
import IndeedLogo from "../../../../../assets/images/indeed-logo-publishjob.png";

const styles = theme => ({
	cardSetting: {
		backgroundColor: "#f5f5f5",
		padding: "27px 26px 60px 26px",
		marginTop: 24,
		marginBottom: 32,
		[theme.breakpoints.down("xs")]: {
			marginTop: 14,
			marginBottom: 15
		},
		[theme.breakpoints.down("sm")]: {
			padding: "13px 13px 30px 13px"
		}
	},
	typoDetail: {
		marginBottom: 34,
		[theme.breakpoints.down("xs")]: {
			marginBottom: 17
		}
	},
	linkMargin: {
		[theme.breakpoints.down("xs")]: {
			marginBottom: 15
		}
	},
	alignCenter: {
		[theme.breakpoints.down("xs")]: {
			textAlign: "center"
		}
	}
});

const JobBoards = props => {
	const { classes } = props;

	return (
		<Paper className={classes.cardSetting}>
			<Typography variant="body1" className={classes.typoDetail}>
				Share this job position in different job boards.
			</Typography>
			<Grid container>
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					lg={3}
					xl={3}
					classes={{ item: classes.alignCenter }}
					className={classes.linkMargin}
				>
					<Typography color="inherit">
						<strong>
							<a
								href="https://app.recruitee.com/"
								target="_blank"
								rel="noopener noreferrer"
								title="Share this job position on ZipRecruite"
							>
								<img
									src={ZipRecruiterLogo}
									alt="ZipRecruiterBoost Logo"
								/>
							</a>
						</strong>
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					lg={3}
					xl={3}
					classes={{ item: classes.alignCenter }}
					className={classes.linkMargin}
				>
					<Typography color="inherit">
						<strong>
							<a
								href="https://www.linkedin.com/"
								target="_blank"
								rel="noopener noreferrer"
								title="Share this job position on Linkedin"
							>
								<img src={LinkedinLogo} alt="Linkedin Logo" />
							</a>
						</strong>
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					lg={3}
					xl={3}
					classes={{ item: classes.alignCenter }}
				>
					<Typography color="inherit">
						<strong>
							<a
								href="https://www.indeed.com/"
								target="_blank"
								rel="noopener noreferrer"
								title="Share this job position on Indeed"
							>
								<img src={IndeedLogo} alt="Indeed Logo" />
							</a>
						</strong>
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
};

JobBoards.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobBoards);
