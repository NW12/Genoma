import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";
import PersonalitySlider from "./personalityslider/PersonalitySlider";
import PersonalityPercent from "./personalitypercent/PersonalityPercent";

const styles = theme => ({
	totalWeightContainer: {
		marginBottom: 13
	},
	ProfilePersonalityPaper: {
		marginBottom: 16,
		padding: "16px 14px 25px 16px",
		[theme.breakpoints.up("md")]: {
			marginTop: 30,
			marginRight: 15
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: 15
		}
	},
	heading: {
		fontWeight: "300",
		lineHeight: 1.0
	},
	contentItem: {
		paddingTop: 10
	}
});

class PersonalityTotalWeight extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.ProfilePersonalityPaper}>
				<Grid container className={classes.totalWeightContainer}>
					<Grid item xs={8} sm={9}>
						<Typography variant="h6" className={classes.heading}>
							Personality total weight
						</Typography>
					</Grid>
					<Grid item xs={4} sm={3} style={{ textAlign: "center" }}>
						<Typography variant="h6" className={classes.heading}>
							25%(overall)
						</Typography>
					</Grid>
				</Grid>

				<Grid container>
					<Grid item xs={12}>
						<Grid container>
							<Grid item xs={8} sm={9}>
								<PersonalitySlider
									title="COOL MODE"
									value={40}
								/>
							</Grid>
							<Grid item xs={4} sm={3}>
								<PersonalityPercent />
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12} className={classes.contentItem}>
						<Grid container>
							<Grid item xs={8} sm={9}>
								<PersonalitySlider
									title="AGREBLINESS"
									value={50}
								/>
							</Grid>
							<Grid item xs={4} sm={3}>
								<PersonalityPercent />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} className={classes.contentItem}>
						<Grid container>
							<Grid item xs={8} sm={9}>
								<PersonalitySlider
									title="STABILITY"
									value={60}
								/>
							</Grid>
							<Grid item xs={4} sm={3}>
								<PersonalityPercent />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} className={classes.contentItem}>
						<Grid container>
							<Grid item xs={8} sm={9}>
								<PersonalitySlider
									title="EXTRAVERSION"
									value={45}
								/>
							</Grid>
							<Grid item xs={4} sm={3}>
								<PersonalityPercent />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} className={classes.contentItem}>
						<Grid container>
							<Grid item xs={8} sm={9}>
								<PersonalitySlider
									title="OPENNESS"
									value={70}
								/>
							</Grid>
							<Grid item xs={4} sm={3}>
								<PersonalityPercent />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		);
	}
}

PersonalityTotalWeight.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalityTotalWeight);
