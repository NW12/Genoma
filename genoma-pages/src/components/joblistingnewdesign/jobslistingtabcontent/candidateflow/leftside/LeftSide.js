import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BciLogo from "../../../../../assets/images/bcilogo.png";
import AnchorLink from "../../../../common/RouterLink/AnchorLink";

import {
	Paper,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography
} from "@material-ui/core";
import PersonalInformation from "./personalinformation/PersonalInformation";
import AssessmentBag from "./assessmentbag/AssessmentBag";
import AdditionalQuestions from "./additionalquestions/AdditionalQuestions";
import VideoInterview from "./videointerview/VideoInterview";
import AddNewSection from "./addnewsection/AddNewSection";

const styles = theme => ({
	root: {
		padding: "42px 19px 35px 19px"
	},
	noPadding: {
		padding: 0
	},
	heading: {
		fontWeight: 300
	},
	marginBottom: {
		marginBottom: 35,
		[theme.breakpoints.down("xs")]: {
			marginBottom: 18
		}
	}
});

class LeftSide extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root}>
				<ListItem
					className={`${classes.noPadding} ${classes.marginBottom}`}
				>
					<ListItemIcon className={classes.iconMargin}>
						<AnchorLink to="/">
							<img src={BciLogo} alt="BCI Logo" />
						</AnchorLink>
					</ListItemIcon>
					<ListItemText className={classes.noPadding}>
						<Typography variant="h5" className={classes.heading}>
							Candidate Path
						</Typography>
					</ListItemText>
				</ListItem>

				<div id="perinfo">
					<PersonalInformation />
				</div>
				<div id="assessbag">
					<AssessmentBag />
				</div>
				<div id="addquest">
					<AdditionalQuestions />
				</div>
				<div id="vidinter">
					<VideoInterview />
				</div>
				<div id="addsection">
					<AddNewSection />
				</div>
			</Paper>
		);
	}
}

LeftSide.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(LeftSide);
