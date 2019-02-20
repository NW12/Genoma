import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, CircularProgress } from "@material-ui/core";
import { GroupOutlined, Delete } from "@material-ui/icons";
import DeleteAlert from "./deletealert/DeleteAlert";

const styles = theme => ({
	jobStage1: {
		paddingTop: 19,
		paddingBottom: 14,
		textAlign: "center"
	},
	title: {
		border: "1px solid #999999",
		borderRadius: 4,
		backgroundColor: "#f6f6f6",
		textAlign: "center",
		paddingTop: 11,
		paddingBottom: 11
	},
	root: {
		position: "relative",
		height: 77,
		width: 77,
		border: "1px solid #999999",
		borderRadius: "100%",
		margin: "28px auto 10px"
	},
	wrapper: {
		height: 69,
		width: 69,
		margin: 3,
		backgroundColor: "#ffffff",
		borderRadius: "100%",
		border: "1px solid #999999"
	},

	fabProgress: {
		top: 0,
		left: 0,
		position: "absolute",
		borderRadius: "100%"
	},
	delete: {
		visibility: "inherit",
		position: "absolute",
		content: "",
		width: 22,
		height: 22,
		right: -3,
		borderRadius: "100%",
		backgroundColor: "#898989",
		textAlign: "center",
		paddingTop: 2
	},
	iconFontSize: {
		fontSize: 38
	},
	labelIcon: {
		fontWeight: 300
	}
});

const JobStage1 = props => {
	const { classes } = props;
	return (
		<div className={classes.jobStage1}>
			<div className={classes.title}>
				<Typography variant="body1">
					Stage1: Personal Information
				</Typography>
			</div>
			<div className={classes.root}>
				<CircularProgress
					className={classes.fabProgress}
					variant="static"
					value={35}
					size={76}
					thickness={2.5}
				/>

				<div className={classes.wrapper}>
					<div className={classes.delete}>
						<DeleteAlert
							deleteIcon={
								<Delete
									style={{
										fontSize: "12px",
										color: "#ffffff"
									}}
								/>
							}
						/>
					</div>
					<Typography
						component="i"
						style={{
							position: "absolute",
							top: "23%",
							left: "25%"
						}}
					>
						<GroupOutlined className={classes.iconFontSize} />
					</Typography>
				</div>
			</div>
			<div>
				<Typography variant="body1" className={classes.labelIcon}>
					Personal Information
				</Typography>
			</div>
		</div>
	);
};

JobStage1.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobStage1);
