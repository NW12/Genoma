import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";

const styles = theme => ({
	botBtnContainer: {
		marginTop: 54,
		[theme.breakpoints.down("sm")]: {
			marginTop: 20
		}
	},
	btnEditJobPosting: {
		[theme.breakpoints.down("xs")]: {
			marginRight: 10
		}
	},
	btn: {
		color: "#ffffff",
		fontWeight: "300",
		fontSize: 14
	}
});

class BottomButtons extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Grid container className={classes.botBtnContainer}>
				<Grid item xs={6}>
					<Button
						variant="contained"
						color="secondary"
						size="large"
						className={`${classes.btn} ${
							classes.btnEditJobPosting
						}`}
					>
						EDIT IDEAL GENOME
					</Button>
				</Grid>

				<Grid item xs={6} style={{ textAlign: "right" }}>
					<Button
						variant="contained"
						color="primary"
						size="large"
						className={classes.btn}
					>
						FINALZE
					</Button>
				</Grid>
			</Grid>
		);
	}
}

BottomButtons.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomButtons);
