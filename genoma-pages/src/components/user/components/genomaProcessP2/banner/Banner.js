import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, Grid } from "@material-ui/core";

import BannerBackground from "../../../../../assets/images/banner-background.png";

const styles = {
	root: {
		backgroundImage: `url(${BannerBackground} )`,
		backgroundSize: "cover",
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat"
	},
	subHeading: {
		fontSize: 60,
		fontWeight: "light"
	},
	heading: {
		fontSize: 80,
		fontWeight: "bold"
	},
	container: {
		padding: " 142px 15px ",
		color: "#ffffff",
		textAlign: "center"
	},

	"@media (max-width: 600px)": {
		subHeading: {
			fontSize: 30
		},
		heading: {
			fontSize: 40
		},
		container: {
			padding: "80px 15px"
		}
	},

	"@media (min-width: 600px)": {
		container: {
			maxWidth: 594
		}
	},
	"@media (min-width: 960px)": {
		container: {
			maxWidth: 938
		}
	},
	"@media (min-width: 1280px)": {
		bannerContentWidth: {
			width: "54%",
			margin: "0 auto"
		},
		container: {
			maxWidth: 1170
		}
	},
	"@media (min-width: 1920px)": {
		container: {
			maxWidth: 1872
		}
	}
};

const Banner = props => {
	const { classes } = props;

	return (
		<Grid container className={classes.root} justify="center">
			<Grid
				container
				alignItems="center"
				justify="center"
				className={classes.container}
			>
				<Grid container className={classes.bannerContentWidth}>
					<Grid item xs={12}>
						<Typography
							variant="h3"
							color="inherit"
							classes={{
								h3: classes.subHeading
							}}
						>
							Welcome to the postulation process of
						</Typography>
					</Grid>

					<Grid item xs={12}>
						<Typography
							variant="h1"
							color="inherit"
							classes={{
								h1: classes.heading
							}}
						>
							MAX <span style={{ color: "#e84a78" }}>O</span>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

Banner.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner);
