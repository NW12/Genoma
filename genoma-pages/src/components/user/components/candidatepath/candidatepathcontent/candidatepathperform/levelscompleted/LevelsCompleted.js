import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";
import HeartShape from "../../../../../../../assets/images/heartshapeorig2.png";

const styles = theme => ({
	card: {
		padding: "18px 20px 28px 20px",
		marginBottom: 20
	},
	levelsTitle: {
		marginBottom: 20
	},
	heading: {
		fontWeight: "300"
	},
	root: {
		backgroundImage: `url(${HeartShape})`,
		backgroundSize: "cover",
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		width: 150,
		height: 148,
		paddingTop: 55,
		textAlign: "center",
		margin: "0 auto",
		boxSizing: "border-box"
	},
	levels: {
		fontSize: 40,
		fontWeight: "900",
		color: "#f5f5f5"
	}
});

class LevelsCompleted extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.card}>
				<Grid container>
					<Grid item xs={12} className={classes.levelsTitle}>
						<Typography variant="h6" className={classes.heading}>
							Levels Completed
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.levelsItem}>
						<div className={classes.root}>
							<span className={classes.levels}>17</span>
						</div>
					</Grid>
				</Grid>
			</Paper>
		);
	}
}

LevelsCompleted.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LevelsCompleted);
