import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Delete, ContactSupportOutlined } from "@material-ui/icons";
import DeleteAlert from "./deletealert/DeleteAlert";

const styles = theme => ({
	jobStage3: {
		paddingTop: 18,
		paddingBottom: 18,
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

const JobStage3 = props => {
	const { classes } = props;
	return (
		<div className={classes.jobStage3}>
			<div className={classes.title}>
				<Typography variant="body1">
					Stage3: Additional Questions
				</Typography>
			</div>
			<div className={classes.root}>
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
						<ContactSupportOutlined
							className={classes.iconFontSize}
						/>
					</Typography>
				</div>
			</div>
			<div>
				<Typography variant="body1" className={classes.labelIcon}>
					Additional Questions
				</Typography>
			</div>
		</div>
	);
};

JobStage3.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobStage3);
