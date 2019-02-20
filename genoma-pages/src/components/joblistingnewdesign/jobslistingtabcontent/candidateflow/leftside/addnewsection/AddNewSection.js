import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, Paper, Grid } from "@material-ui/core";
import SingleSection from "./singlesection/SingleSection";
import {
	ContactSupportOutlined,
	Delete,
	Mood,
	DescriptionOutlined
} from "@material-ui/icons";
import AddSectionButton from "./addsectionbutton/AddSectionButton";

const styles = theme => ({
	cardSetting: {
		backgroundColor: "#f5f5f5",
		padding: "35px 21px 32px 21px",
		marginTop: 42,
		[theme.breakpoints.down("xs")]: {
			marginTop: 25
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
		marginLeft: "auto",
		[theme.breakpoints.down("xs")]: {
			width: "100%"
		}
	},
	backgroundDelete: {
		backgroundColor: "#898989"
	},
	iconFontSize: {
		fontSize: 38
	},
	itemTitle: {
		marginTop: 3
	},
	itemAddBtn: {
		textAlign: "right"
	}
});

const VideoInterview = props => {
	const { classes } = props;

	return (
		<div>
			<Grid container>
				<Grid item xs={9} sm={8} className={classes.itemTitle}>
					<div className={classes.title}>
						<Typography variant="body1">Add New Section</Typography>
					</div>
				</Grid>
				<Grid item xs={3} sm={4} className={classes.itemAddBtn}>
					<AddSectionButton />
				</Grid>
			</Grid>

			<Paper className={classes.cardSetting}>
				<Typography variant="body1" className={classes.typoDetail}>
					Here you can add another section to the candidate process.
				</Typography>
				<Grid container>
					<Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
						<SingleSection
							singleSectionTitle="Additional Questions"
							iconUsed={
								<ContactSupportOutlined
									className={classes.iconFontSize}
								/>
							}
							deleteIcon={
								<Delete
									style={{
										fontSize: "14px",
										color: "#ffffff"
									}}
								/>
							}
							backgroundDelete={classes.backgroundDelete}
							progressValue={0}
							backgroundColorUsed="#999999"
						/>
					</Grid>
					<Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
						<SingleSection
							singleSectionTitle="Required Documents"
							iconUsed={
								<DescriptionOutlined
									className={classes.iconFontSize}
								/>
							}
							deleteIcon={
								<Delete
									style={{
										fontSize: "14px",
										color: "#ffffff"
									}}
								/>
							}
							backgroundDelete={classes.backgroundDelete}
							progressValue={0}
							backgroundColorUsed="#999999"
						/>
					</Grid>
					<Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
						<SingleSection
							singleSectionTitle="Information of the Company"
							iconUsed={<Mood className={classes.iconFontSize} />}
							styleDeleteIcon={{ display: "none" }}
							progressValue={100}
							backgroundColorUsed="#ffffff"
						/>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

VideoInterview.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoInterview);
