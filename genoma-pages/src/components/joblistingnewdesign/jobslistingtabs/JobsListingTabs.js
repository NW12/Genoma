import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Tab, Tabs } from "@material-ui/core";
import {
	DonutSmallOutlined,
	CalendarTodayOutlined,
	EditOutlined,
	Group
} from "@material-ui/icons";
import CandidateFlow from "../jobslistingtabcontent/candidateflow/CandidateFlow";
import IdealGenoma from "../jobslistingtabcontent/idealgenoma/IdealGenoma";
import PublishJob from "../jobslistingtabcontent/publishjob/PublishJob";

const TabContainer = ({ children, dir }) => {
	return (
		<Typography component="div" dir={dir} style={{ marginTop: "10px" }}>
			{children}
		</Typography>
	);
};

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired
};

const styles = theme => ({
	backgroundDelete: {
		backgroundColor: "#898989"
	},
	backgroundDeleteCulture: {
		backgroundColor: "#e64e7b"
	}
});

class JobsListingTab extends React.Component {
	state = {
		value: 2
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};
	handleChangeIndex = index => {
		this.setState({ value: index });
	};
	render() {
		const { classes, theme } = this.props;
		const { value } = this.state;
		const tabStyling = {
			root: classes.tabRoot,
			selected: classes.tabSelected,
			labelContainer: classes.labelContainer,
			labelIcon: classes.labelIcon
		};
		return (
			<Grid container alignItems="center" justify="center">
				<Grid item xs={12}>
					<Tabs
						value={value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary"
						variant="scrollable"
						scrollButtons="on"
						classes={{
							root: classes.tabsRoot,
							indicator: classes.tabsIndicator
						}}
					>
						<Tab
							label="JOB POSTING"
							icon={
								<EditOutlined
									className={classes.iconFontSize}
								/>
							}
							classes={tabStyling}
						/>
						<Tab
							label="CANDIDATE FLOW"
							icon={
								<CalendarTodayOutlined
									className={classes.iconFontSize}
								/>
							}
							classes={tabStyling}
						/>
						<Tab
							label="IDEAL GENOME"
							icon={
								<DonutSmallOutlined
									className={classes.iconFontSize}
								/>
							}
							classes={tabStyling}
						/>
						<Tab
							label="PUBLISH JOBS "
							icon={<Group className={classes.iconFontSize} />}
							classes={tabStyling}
						/>
					</Tabs>
				</Grid>

				<SwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={value}
					onChangeIndex={this.handleChangeIndex}
				>
					<TabContainer dir={theme.direction}>tab1</TabContainer>
					<TabContainer dir={theme.direction}>
						<CandidateFlow />
					</TabContainer>
					<TabContainer dir={theme.direction}>
						<IdealGenoma />
					</TabContainer>
					<TabContainer dir={theme.direction}>
						<PublishJob />
					</TabContainer>
				</SwipeableViews>
			</Grid>
		);
	}
}

JobsListingTab.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(JobsListingTab);
