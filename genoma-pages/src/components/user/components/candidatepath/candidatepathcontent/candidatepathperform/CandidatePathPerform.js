import React from "react";
import { Grid } from "@material-ui/core";
import AppSummary from "./appsummary/AppSummary";
import LevelsCompleted from "./levelscompleted/LevelsCompleted";

const CandidatePathPerform = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<LevelsCompleted />
			</Grid>
			<Grid item xs={12}>
				<AppSummary />
			</Grid>
		</Grid>
	);
};

export default CandidatePathPerform;
