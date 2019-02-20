import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, Button } from "@material-ui/core";

import { Add } from "@material-ui/icons";

function IconTest(props) {
	return (
		<Typography
			component="i"
			style={{
				textAlign: "center",
				paddingTop: 6
			}}
		>
			{props.children}
		</Typography>
	);
}

IconTest.propTypes = {
	children: PropTypes.node.isRequired
};

const styles = {
	root: {
		position: "relative",
		height: 53,
		width: 53,
		border: "1px solid #999999",
		borderRadius: "100%",
		backgroundColor: "#e84a78"
	},
	wrapper: {
		height: 45,
		width: 45,
		margin: 3,
		backgroundColor: "#ffffff",
		borderRadius: "100%",
		border: "1px solid #999999"
	},
	iconFontSize: {
		fontSize: 30
	},
	btnRoot: {
		padding: 0,
		minHeight: 53,
		minWidth: 53
	}
};

class AddNewSectionButton extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Button classes={{ root: classes.btnRoot }}>
				<div className={classes.root}>
					<div className={classes.wrapper}>
						<IconTest>
							<Add
								className={classes.iconFontSize}
								style={{ color: "#e84a78" }}
							/>
						</IconTest>
					</div>
				</div>
			</Button>
		);
	}
}

AddNewSectionButton.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddNewSectionButton);
