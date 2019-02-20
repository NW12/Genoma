import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, Paper, Grid } from "@material-ui/core";
import SinglePersonalInfo from "./singlepersonalinfo/SinglePersonalInfo";
import { Notes, GpsFixed, Done, Remove, AttachFile } from "@material-ui/icons";
import AddNewBtn from "./addnew/AddNewBtn";
import AddNewSection from "./addnew/addnewsection/AddNewSection";

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
	iconFontSize: {
		fontSize: 35
	},
	itemTriUp: {
		marginLeft: 7,
		marginBottom: 3
	},
	triangleUp: {
		width: 0,
		height: 0,
		borderStyle: "solid",
		borderWidth: "0 13px 18px 13px",
		borderColor: "transparent transparent #ababab transparent"
	},
	itemTriDown: {
		marginLeft: 7,
		marginTop: 3
	},
	triangleDown: {
		width: 0,
		height: 0,
		borderStyle: "solid",
		borderWidth: "18px 13px 0 13px",
		borderColor: "#ff008a transparent transparent transparent"
	},
	lightFontWeight: {
		fontWeight: "300",
		lineHeight: 1.0
	},
	itemTitle: {
		marginTop: 4
	},
	disabledLink: {
		cursor: "not-allowed"
	}
});

const PersonalInformation = props => {
	const { classes } = props;

	return (
		<div>
			<Grid container>
				<Grid item xs={3} sm={4}>
					<Grid container>
						<Grid item xs={12} className={classes.itemTriUp}>
							<div
								className={`${classes.triangleUp} ${
									classes.disabledLink
								}`}
							/>
						</Grid>
						<Grid item xs={12}>
							<Typography
								variant="body1"
								className={classes.lightFontWeight}
							>
								Stage1
							</Typography>
						</Grid>
						<Grid item xs={12} className={classes.itemTriDown}>
							<a
								href="/joblistingnewdesign#assessbag"
								title="go to assessment bag"
							>
								<div className={classes.triangleDown} />
							</a>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={9} sm={8} className={classes.itemTitle}>
					<div className={classes.title}>
						<Typography variant="body1">
							Personal Information
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

				<SinglePersonalInfo
					icon={<Notes className={classes.listTextIcon} />}
					primaryText="Tell us something about yourself"
				/>

				<SinglePersonalInfo
					icon={<Done className={classes.listTextIcon} />}
					primaryText="Year of experiences"
				/>

				<SinglePersonalInfo
					icon={<GpsFixed className={classes.listTextIcon} />}
					primaryText="Do you live in Pakistan?"
				/>
				<SinglePersonalInfo
					icon={<Remove className={classes.listTextIcon} />}
					primaryText="How old are you?"
				/>
				<SinglePersonalInfo
					icon={<AttachFile className={classes.listTextIcon} />}
					primaryText="Upload you CV"
				/>
				<AddNewBtn />
				<AddNewSection />
			</Paper>
		</div>
	);
};

PersonalInformation.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalInformation);
