import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
	Paper,
	Typography,
	Grid,
	InputBase,
	IconButton
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import BottomButtons from "./buttons/bottombuttons/BottomButtons";
import TopButtons from "./buttons/topbuttons/TopButtons";
import IdealGenomaTable from "./idealgenometable/IdealGenomaTable";
import PersonalityTotalWeight from "./personalitytotalweight/PersonalityTotalWeight";
import ReasoningTotalWeight from "./reasoningtotalweight/ReasoningTotalWeight";
import EmotionalTraitWeight from "./emotionaltraitweight/EmotionalTraitWeight";

const styles = theme => ({
	idealGenomeContent: {
		padding: "42px 19px 35px 19px",
		marginBottom: 10
	},
	btnEditJobPosting: {
		[theme.breakpoints.down("xs")]: {
			marginRight: 10
		}
	},
	idealGenomeContentHeading: {
		marginBottom: 35,
		[theme.breakpoints.down("xs")]: {
			marginBottom: 17
		}
	},
	btn: {
		color: "#ffffff",
		fontWeight: "300",
		fontSize: 14
	},
	searchGrid: {
		[theme.breakpoints.down("sm")]: {
			marginTop: 10
		}
	},
	searchRoot: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		height: 42,
		border: "1px solid #999999",
		borderRadius: 3
	},
	input: {
		marginLeft: 8,
		flex: 1
	},
	iconButton: {
		padding: 5
	},
	tableContainer: {
		marginTop: 48,
		[theme.breakpoints.down("xs")]: {
			marginTop: 24
		}
	}
});

class IdealGenomeContent extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.idealGenomeContent}>
				<div className={classes.idealGenomeContentHeading}>
					<Typography variant="body1">
						Ideal Genome is the representation of the traits of a
						person or group of people.
					</Typography>
					<Typography variant="body1">
						Select the ideal genome for this position.
					</Typography>
				</div>

				<Grid container>
					<Grid item xs={12} sm={12} md={6}>
						<TopButtons />
					</Grid>
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						className={classes.searchGrid}
					>
						<div className={classes.searchRoot}>
							<InputBase
								className={classes.input}
								placeholder="Find genome"
							/>
							<IconButton
								className={classes.iconButton}
								aria-label="Search"
							>
								<Search color="primary" />
							</IconButton>
						</div>
					</Grid>
				</Grid>

				<Grid container className={classes.tableContainer}>
					<IdealGenomaTable />
				</Grid>

				<Grid container>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Grid container>
							<Grid item xs={12}>
								<PersonalityTotalWeight />
							</Grid>
							<Grid item xs={12}>
								<ReasoningTotalWeight />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<EmotionalTraitWeight />
					</Grid>
				</Grid>

				<BottomButtons />
			</Paper>
		);
	}
}

IdealGenomeContent.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IdealGenomeContent);
