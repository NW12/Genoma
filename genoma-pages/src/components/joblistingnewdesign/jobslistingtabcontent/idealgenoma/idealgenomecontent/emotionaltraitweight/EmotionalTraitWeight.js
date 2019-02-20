import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";
import PersonalitySlider from "./personalityslider/PersonalitySlider";
import PersonalityPercent from "./personalitypercent/PersonalityPercent";

const styles = theme => ({
	emotionalTraitPaper: {
		marginTop: 30,
		padding: "16px 14px 25px 16px",
		[theme.breakpoints.down("sm")]: {
			marginBottom: 15,
			marginTop: 15
		}
	},
	emotionalHeadContainer: {
		marginBottom: 13
	},
	heading: {
		fontWeight: "300",
		lineHeight: 1.0
	},
	contentItem: {
		paddingTop: 10
	}
});

class EmotionalTraitWeight extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.emotionalTraitPaper}>
				<Grid container className={classes.emotionalHeadContainer}>
					<Grid item xs={8} sm={9}>
						<Typography variant="h6" className={classes.heading}>
							Emotional traits weight
						</Typography>
					</Grid>
					<Grid item xs={4} sm={3} style={{ textAlign: "center" }}>
						<Typography variant="h6" className={classes.heading}>
							25%
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
					<Grid item xs={12} className={classes.contentItem}>
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
					<Grid item xs={12} className={classes.contentItem}>
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

EmotionalTraitWeight.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EmotionalTraitWeight);
