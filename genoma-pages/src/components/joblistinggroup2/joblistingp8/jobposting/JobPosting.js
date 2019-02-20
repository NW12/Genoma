import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
	Paper,
	Grid,
	Button,
	FormControl,
	Input,
	Select,
	InputLabel,
	ListItem,
	ListItemText,
	ListItemIcon,
	IconButton,
	FormControlLabel,
	Switch
} from "@material-ui/core";
import { AddBoxOutlined } from "@material-ui/icons";
import JobDetail from "./jobdetail/JobDetail";
import JobDescription from "./jobdescription/JobDescription";

const styles = theme => ({
	jobPosting: {
		padding: "25px 19px 23px 19px",
		marginBottom: 10
	},
	jobPostingHeading: {
		paddingBottom: 35
	},
	tabsHeading: {
		fontSize: 14,
		fontWeight: "400"
	},
	btn: {
		color: "#ffffff",
		fontWeight: "300",
		fontSize: 14
	},
	nextBtnContainer: {
		marginTop: 50
	},
	paddingLeftRight: {
		[theme.breakpoints.up("sm")]: {
			paddingRight: 5,
			paddingLeft: 5
		}
	},
	cssLabel: {
		"&$cssFocused": {
			color: "#c0c0c0"
		}
	},
	cssFocused: {},
	formControl: {
		paddingTop: 32,
		width: "100%"
	},
	noPadding: {
		padding: 0
	},
	listItemTextRoot: {
		flex: "0 1 auto",
		marginRight: 13
	},
	listMarginTop: {
		marginTop: 20
	},
	colorSwitchBase: {
		color: "#2ebfd4",
		"&$colorChecked": {
			color: "#2ebfd4",
			"& + $colorBar": {
				backgroundColor: "#2ebfd4"
			}
		}
	},
	colorBar: {},
	colorChecked: {},
	switchLabel: {
		fontSize: 16
	},
	lightFontWeight: {
		fontWeight: 300
	},
	tagListTopPad: {
		paddingTop: 12
	},
	noMargin: {
		margin: 0
	}
});

class JobPosting extends React.Component {
	state = {
		country: "Afghanistan",
		state: "",
		checkedA: true
	};
	handleCountrySelectChange = country => event => {
		this.setState({ [country]: event.target.value });
	};
	handleStateSelectChange = state => event => {
		this.setState({ [state]: event.target.value });
	};

	handleRemoteSwitchChange = name => event => {
		this.setState({ [name]: event.target.checked });
	};
	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.jobPosting}>
				<Grid container>
					<Grid item xs={12}>
						<Grid container>
							<Grid
								item
								xs={12}
								sm={6}
								lg={7}
								classes={{ item: classes.paddingLeftRight }}
							>
								<FormControl
									margin="normal"
									fullWidth
									className={classes.noMargin}
								>
									<Input
										id="business-dev"
										name="business-dev"
										autoComplete="business-dev"
										placeholder="Business Development"
									/>
								</FormControl>
							</Grid>

							<Grid
								item
								xs={12}
								sm={6}
								lg={5}
								classes={{ item: classes.paddingLeftRight }}
							>
								<FormControl
									margin="normal"
									fullWidth
									className={classes.noMargin}
								>
									<Input
										id="marketing"
										name="marketing"
										autoComplete="marketing"
										placeholder="Marketing"
									/>
								</FormControl>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container>
							<Grid
								item
								xs={12}
								sm={6}
								lg={3}
								classes={{ item: classes.paddingLeftRight }}
							>
								<FormControl className={classes.formControl}>
									<Select
										native
										value={this.state.country}
										onChange={this.handleCountrySelectChange(
											"country"
										)}
										inputProps={{
											name: "country",
											id: "country-nationality"
										}}
									>
										<option
											value=""
											style={{ color: "#c0c0c0" }}
											disabled
										>
											Country
										</option>
										<option value="Afghanistan">
											Afghanistan
										</option>
										<option value="Canada">Canada</option>
										<option value="Mexico">Mexico</option>
										<option value="United States of America">
											United States of America
										</option>
									</Select>
								</FormControl>
							</Grid>

							<Grid
								item
								xs={12}
								sm={6}
								lg={3}
								classes={{ item: classes.paddingLeftRight }}
							>
								<FormControl className={classes.formControl}>
									<Select
										native
										value={this.state.state}
										onChange={this.handleStateSelectChange(
											"state"
										)}
										inputProps={{
											name: "state",
											id: "state-region"
										}}
									>
										<option
											value=""
											style={{ color: "#c0c0c0" }}
											disabled
										>
											State/Region
										</option>
										<option value="Balkh">Balkh</option>
										<option value="Ghazni">Ghazni</option>
										<option value="Mexico">Mexico</option>
									</Select>
								</FormControl>
							</Grid>
							<Grid
								item
								xs={12}
								sm={6}
								lg={3}
								classes={{ item: classes.paddingLeftRight }}
							>
								<FormControl margin="normal" fullWidth>
									<InputLabel
										htmlFor="city"
										classes={{
											root: classes.cssLabel,
											focused: classes.cssFocused
										}}
									>
										City
									</InputLabel>
									<Input
										id="city"
										name="city"
										autoComplete="city"
										autoFocus
										classes={{
											underline: classes.cssUnderline
										}}
									/>
								</FormControl>
							</Grid>

							<Grid
								item
								xs={12}
								sm={6}
								lg={3}
								classes={{ item: classes.paddingLeftRight }}
							>
								<FormControl margin="normal" fullWidth>
									<InputLabel
										htmlFor="zipcode"
										classes={{
											root: classes.cssLabel,
											focused: classes.cssFocused
										}}
									>
										Zip Code
									</InputLabel>
									<Input
										id="zipcode"
										name="zipcode"
										autoComplete="zipcode"
										classes={{
											underline: classes.cssUnderline
										}}
									/>
								</FormControl>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} className={classes.listMarginTop}>
						<Grid container>
							<Grid item xs={6} className={classes.tagListTopPad}>
								<ListItem className={classes.noPadding}>
									<ListItemText
										primary="Tag"
										className={classes.noPadding}
										classes={{
											root: classes.listItemTextRoot,
											primary: classes.listText
										}}
									/>
									<ListItemIcon>
										<IconButton
											className={classes.noPadding}
										>
											<AddBoxOutlined
												color="primary"
												className={classes.listTextIcon}
											/>
										</IconButton>
									</ListItemIcon>
								</ListItem>
							</Grid>

							<Grid item xs={6} style={{ textAlign: "right" }}>
								<FormControlLabel
									labelPlacement="start"
									control={
										<Switch
											checked={this.state.checkedA}
											onChange={this.handleRemoteSwitchChange(
												"checkedA"
											)}
											value="checkedA"
											classes={{
												switchBase:
													classes.colorSwitchBase,
												checked: classes.colorChecked,
												bar: classes.colorBar
											}}
										/>
									}
									label="Remote"
									classes={{ label: classes.switchLabel }}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<JobDescription />
				<JobDetail />
				<Grid container className={classes.nextBtnContainer}>
					<Grid item xs={12} style={{ textAlign: "right" }}>
						<Button
							variant="contained"
							color="primary"
							size="large"
							className={classes.btn}
						>
							NEXT
						</Button>
					</Grid>
				</Grid>
			</Paper>
		);
	}
}

JobPosting.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobPosting);
