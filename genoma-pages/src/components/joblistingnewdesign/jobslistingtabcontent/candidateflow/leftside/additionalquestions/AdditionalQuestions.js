import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, Paper, Grid } from "@material-ui/core";
import { Notes, GpsFixed, Done, Remove, AttachFile } from "@material-ui/icons";
import AddNewBtn from "./addnew/AddNewBtn";
import AddNewSection from "./addnew/addnewsection/AddNewSection";
import SingleAddQuest from "./singleaddquest/SingleAddQuest";

const styles = theme => ({
	cardSetting: {
		backgroundColor: "#f5f5f5",
		padding: "35px 21px 32px 21px",
		marginTop: 42,
		marginBottom: 35,
		[theme.breakpoints.down("xs")]: {
			marginTop: 25,
			marginBottom: 18
		}
	},
	typoDetail: {
		paddingTop: 25,
		marginBottom: 34
	},
	listTextIcon: {
		fontSize: 16
	},
	title: {
		border: "1px solid #999999",
		borderRadius: 4,
		backgroundColor: "#f6f6f6",
		textAlign: "center",
		paddingTop: 11,
		paddingBottom: 11,
		width: 250,
		[theme.breakpoints.down("xs")]: {
			width: "100%"
		}
	},
	itemTriUp: {
		marginLeft: 7,
		marginBottom: 3
	},
	triangleUp: {
		width: 0,
		height: 0,
		borderStyle: "solid",
		borderWidth: "0 13px 15px 13px",
		borderColor: "transparent transparent #ff008a transparent"
	},
	itemTriDown: {
		marginLeft: 7,
		marginTop: 3
	},
	triangleDown: {
		width: 0,
		height: 0,
		borderStyle: "solid",
		borderWidth: "15px 13px 0 13px",
		borderColor: "#ff008a transparent transparent transparent"
	},
	lightFontWeight: {
		fontWeight: "300",
		lineHeight: 1.0
	},
	itemTitle: {
		marginTop: 4
	}
});

const AdditionalQuestions = props => {
	const { classes } = props;

	return (
		<div>
			<Grid container>
				<Grid item xs={3} sm={4}>
					<Grid container>
						<Grid item xs={12} className={classes.itemTriUp}>
							<a
								href="/joblistingnewdesign#assessbag"
								title="go to assesment bag"
							>
								<div className={classes.triangleUp} />
							</a>
						</Grid>
						<Grid item xs={12}>
							<Typography
								variant="body1"
								className={classes.lightFontWeight}
							>
								Stage3
							</Typography>
						</Grid>
						<Grid item xs={12} className={classes.itemTriDown}>
							<a
								title="go to video interview"
								href="/joblistingnewdesign#vidinter"
							>
								<div className={classes.triangleDown} />
							</a>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={9} sm={8} className={classes.itemTitle}>
					<div className={classes.title}>
						<Typography variant="body1">
							Additional Questions
						</Typography>
					</div>
				</Grid>
			</Grid>

			<Paper className={classes.cardSetting}>
				<Typography variant="body1">Icon Stage Information:</Typography>
				<Typography variant="body1">
					This is the first step of the candidate.
				</Typography>
				<Typography variant="body1" className={classes.typoDetail}>
					Here you can ask personal information to the candidate.
				</Typography>

				<SingleAddQuest
					icon={<Notes className={classes.listTextIcon} />}
					primaryText="Tell us something about yourself"
				/>

				<SingleAddQuest
					icon={<Done className={classes.listTextIcon} />}
					primaryText="Year of experiences"
				/>

				<SingleAddQuest
					icon={<GpsFixed className={classes.listTextIcon} />}
					primaryText="Do you live in Pakistan?"
				/>
				<SingleAddQuest
					icon={<Remove className={classes.listTextIcon} />}
					primaryText="How old are you?"
				/>
				<SingleAddQuest
					icon={<AttachFile className={classes.listTextIcon} />}
					primaryText="Upload you CV"
				/>
				<AddNewBtn />
				<AddNewSection />
			</Paper>
		</div>
	);
};

AdditionalQuestions.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdditionalQuestions);
