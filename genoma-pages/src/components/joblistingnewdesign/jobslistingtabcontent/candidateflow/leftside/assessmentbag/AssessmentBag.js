import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, Paper, Grid } from "@material-ui/core";
import CognitiveGames from "./cognitivegames/CognitiveGames";
import EmotionalGames from "./emotionalgames/EmotionalGames";
import ReasoningGames1 from "./reasoninggames1/ReasoningGames1";
import ReasoningGames2 from "./reasoninggames2/ReasoningGames2";

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
		marginBottom: 14
	},
	paddingTopBot: {
		paddingTop: 20,
		paddingBottom: 20,
		"&:last-child": {
			paddingBottom: 0
		}
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

const AssessmentBag = props => {
	const { classes } = props;

	return (
		<div>
			<Grid container>
				<Grid item xs={3} sm={4}>
					<Grid container>
						<Grid item xs={12} className={classes.itemTriUp}>
							<a
								href="/joblistingnewdesign#perinfo"
								title="go to personal information"
							>
								<div className={classes.triangleUp} />
							</a>
						</Grid>
						<Grid item xs={12}>
							<Typography
								variant="body1"
								className={classes.lightFontWeight}
							>
								Stage2
							</Typography>
						</Grid>
						<Grid item xs={12} className={classes.itemTriDown}>
							<a
								href="/joblistingnewdesign#addquest"
								title="go to additional questions"
							>
								<div className={classes.triangleDown} />
							</a>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={9} sm={8} className={classes.itemTitle}>
					<div className={classes.title}>
						<Typography variant="body1">Assessment Bag</Typography>
					</div>
				</Grid>
			</Grid>
			<Paper className={classes.cardSetting}>
				<Typography variant="body1">Icon Stage Information:</Typography>
				<Typography variant="body1">
					Here is where candidate take the assestments (games and
					test)
				</Typography>
				<Typography variant="body1">
					Select the games and test that the candidate must complite
					for this job application.
				</Typography>
				<Typography variant="body1" className={classes.typoDetail}>
					Total assestment selected for this job application: 7. Total
					time: 32 minutes
				</Typography>
				<div className={classes.paddingTopBot}>
					<CognitiveGames />
				</div>
				<div className={classes.paddingTopBot}>
					<EmotionalGames />
				</div>
				<div className={classes.paddingTopBot}>
					<ReasoningGames1 />
				</div>
				<div className={classes.paddingTopBot}>
					<ReasoningGames2 />
				</div>
			</Paper>
		</div>
	);
};

AssessmentBag.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AssessmentBag);
