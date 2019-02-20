import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import {
	Typography,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Tooltip,
	Button
} from "@material-ui/core";
import { Close, Add, PersonAdd } from "@material-ui/icons";
import DeleteAlert from "./deleteAlert/DeleteAlert";
import AnchorLink from "../../../../common/RouterLink/AnchorLink";

const styles = theme => ({
	jobLinkHeading: {
		fontWeight: "500"
	},
	teamTitleContainer: {
		marginBottom: 18
	},
	listRoot: {
		padding: 0,
		marginBottom: 20,
		[theme.breakpoints.down("xs")]: {
			marginBottom: 10
		}
	},
	listItemRoot: {
		backgroundColor: "#fff",
		padding: "14px 9px 14px 14px",
		borderBottom: "1px solid #b5b5b5",
		[theme.breakpoints.down("xs")]: {
			padding: "4px 2px 8px 4px"
		}
	},
	greenAvatar: {
		color: "#fff",
		backgroundColor: "#4caf50",
		fontSize: 16,
		fontWeight: "700"
	},
	ListItemTextRoot: {
		padding: "0px 8px"
	},
	primaryText: {
		fontSize: "20px",
		fontWeight: 700
	},
	secondaryActionButton: {
		[theme.breakpoints.down("xs")]: {
			padding: 0
		}
	},
	btnContainer: {
		marginTop: 20,
		marginBottom: 38,
		[theme.breakpoints.down("xs")]: {
			marginTop: 10,
			marginBottom: 19
		}
	},
	btn: {
		color: "#ffffff",
		fontWeight: "300",
		fontSize: 13,
		lineHeight: 1
	},

	leftIcon: {
		marginRight: 5
	},
	btnExistingMember: {
		backgroundColor: "#ff9800",
		"&:hover": {
			backgroundColor: "#ff9800"
		},
		[theme.breakpoints.between("sm", "md")]: {
			marginRight: 5
		},
		[theme.breakpoints.down("xs")]: {
			marginRight: 0
		}
	},
	btnNewMember: {
		backgroundColor: "#2ebed4",
		"&:hover": {
			backgroundColor: "#2ebed4"
		},
		[theme.breakpoints.between("sm", "md")]: {
			marginLeft: 5
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0,
			marginTop: 10
		}
	},
	btnItem: {
		[theme.breakpoints.down("sm")]: {
			textAlign: "center"
		}
	},
	linkStyle: {
		color: "#ff2693",
		textDecoration: "none"
	}
});

class TeamMembers extends React.Component {
	state = {
		opendeletedialog: false
	};

	handleClickOpenDelete = () => {
		this.setState({ opendeletedialog: true });
	};

	handleCloseDelete = () => {
		this.setState({ opendeletedialog: false });
	};
	render() {
		const { classes } = this.props;

		return (
			<div>
				<Grid container className={classes.teamTitleContainer}>
					<Grid item xs={12}>
						<Typography
							variant="body1"
							classes={{ body1: classes.jobLinkHeading }}
						>
							Team Members
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1">
							Assign Team members to work on this job.
						</Typography>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={12}>
						<List className={classes.listRoot}>
							<ListItem classes={{ root: classes.listItemRoot }}>
								<ListItemAvatar>
									<Avatar className={classes.greenAvatar}>
										FM
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary="Fabian Martinez"
									classes={{
										root: classes.ListItemTextRoot,
										primary: classes.primaryText
									}}
								/>
								<ListItemSecondaryAction>
									<Tooltip
										title="Remove this member from this job."
										placement="top"
									>
										<IconButton
											onClick={this.handleClickOpenDelete}
											classes={{
												root:
													classes.secondaryActionButton
											}}
										>
											<Close />
										</IconButton>
									</Tooltip>
								</ListItemSecondaryAction>
							</ListItem>
						</List>
					</Grid>
				</Grid>
				<Grid container className={classes.btnContainer}>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						lg={4}
						className={classes.btnItem}
					>
						<Button
							variant="contained"
							size="large"
							className={`${classes.btn} ${
								classes.btnExistingMember
							}`}
							classes={{ sizeLarge: classes.sizeLarge }}
						>
							<Add className={classes.leftIcon} />
							ADD EXISTING TEAM MEMBER
						</Button>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						lg={4}
						className={classes.btnItem}
					>
						<Button
							variant="contained"
							size="large"
							className={`${classes.btn} ${classes.btnNewMember}`}
							classes={{ sizeLarge: classes.sizeLarge }}
						>
							<PersonAdd className={classes.leftIcon} />
							INVITE NEW TEAM MEMBER
						</Button>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={12}>
						<Typography
							component="p"
							variant="body1"
							color="inherit"
							className={classes.footersize}
						>
							<AnchorLink
								to="/administrator"
								className={classes.linkStyle}
							>
								Administrator
							</AnchorLink>
							<span> and </span>
							<AnchorLink
								to="/corporate"
								className={classes.linkStyle}
							>
								Corporate{" "}
							</AnchorLink>
							Recruiter can access this job without being added
							here.
						</Typography>
					</Grid>
				</Grid>
				<DeleteAlert
					title="Are you sure?"
					contenttext="This member will be removed from this job."
					open={this.state.opendeletedialog}
					onClose={this.handleCloseDelete}
				/>
			</div>
		);
	}
}

TeamMembers.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TeamMembers);
