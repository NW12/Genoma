import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, Paper, Grid } from "@material-ui/core";
import { Videocam } from "@material-ui/icons";
import NewSection from "./newsection/NewSection";
import SingleVideoInterview from "./singlevideointerview/SingleVideoInterview";

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

const VideoInterview = props => {
	const { classes } = props;

	return (
		<div>
			<Grid container>
				<Grid item xs={3} sm={4}>
					<Grid container>
						<Grid item xs={12} className={classes.itemTriUp}>
							<a
								href="/joblistingnewdesign#addquest"
								title="go to additonal questions"
							>
								<div className={classes.triangleUp} />
							</a>
						</Grid>
						<Grid item xs={12}>
							<Typography
								variant="body1"
								className={classes.lightFontWeight}
							>
								Stage4
							</Typography>
						</Grid>
						<Grid item xs={12} className={classes.itemTriDown}>
							<a
								href="/joblistingnewdesign#addsection"
								title="go to add new section"
							>
								<div className={classes.triangleDown} />
							</a>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={9} sm={8} className={classes.itemTitle}>
					<div className={classes.title}>
						<Typography variant="body1">Video Interview</Typography>
					</div>
				</Grid>
			</Grid>

			<Paper className={classes.cardSetting}>
				<Typography variant="body1">Icon Stage Information:</Typography>
				<Typography variant="body1">
					Here you can ask the candidate that recard a video telling
					whatever you want.
				</Typography>
				<Typography variant="body1" className={classes.typoDetail}>
					For instance, you can ask "tellus whay you would like to
					work with us",or "tell us about yourself in english" to
					check the english level.
				</Typography>

				<SingleVideoInterview
					icon={<Videocam className={classes.listTextIcon} />}
					primaryText="Tell us something about yourself"
					primaryTimeText="60 seconds"
				/>

				<SingleVideoInterview
					icon={<Videocam className={classes.listTextIcon} />}
					primaryText="Year of experiences"
					primaryTimeText="30 seconds"
				/>

				<SingleVideoInterview
					icon={<Videocam className={classes.listTextIcon} />}
					primaryText="Do you live in Pakistan?"
					primaryTimeText="60 seconds"
				/>
				<SingleVideoInterview
					icon={<Videocam className={classes.listTextIcon} />}
					primaryText="How old are you?"
					primaryTimeText="2 minutes"
				/>
				<NewSection />
			</Paper>
		</div>
	);
};

VideoInterview.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoInterview);
