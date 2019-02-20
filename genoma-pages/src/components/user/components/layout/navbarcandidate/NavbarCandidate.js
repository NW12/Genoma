import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ListItemLink from "../../common/RouterLink/ListitemLink";
import AnchorLink from "../../common/RouterLink/AnchorLink";
import navbarGenomaLogo from "../../../../../assets/images/logo.png";

import {
	withStyles,
	Drawer,
	AppBar,
	Toolbar,
	List,
	Typography,
	Divider,
	IconButton,
	ListItemIcon,
	ListItemText,
	Grid
} from "@material-ui/core";
import { ViewHeadline, ChevronRight, Home, Info } from "@material-ui/icons";

const drawerWidth = 260;

const styles = theme => ({
	root: {
		backgroundColor: "#ffffff"
	},
	appBar: {
		backgroundColor: "#ffffff",
		padding: "13px 0px",
		boxShadow: "none",
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	// appBarShift: {
	//   // width: `calc(100% - ${drawerWidth}px)`,
	//   // marginLeft: drawerWidth,
	//   transition: theme.transitions.create(["margin", "width"], {
	//     easing: theme.transitions.easing.easeOut,
	//     duration: theme.transitions.duration.enteringScreen
	//   })
	// },
	menuButton: {
		marginLeft: "auto"
	},
	hide: {
		display: "none"
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: "0 8px",
		...theme.mixins.toolbar,
		justifyContent: "flex-end"
	},
	container: {
		paddingLeft: 15,
		paddingRight: 15
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
		container: {
			maxWidth: 1170
		}
	},
	"@media (min-width: 1920px)": {
		container: {
			maxWidth: 1872
		}
	}
});

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			open: false
		};
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;
		const { open } = this.state;
		return (
			<Grid container justify="center" className={classes.root}>
				<Grid
					container
					alignItems="center"
					justify="center"
					className={classes.container}
				>
					{/* <div className={classes.root}> */}
					<Grid item xs={12}>
						<AppBar
							position="static"
							className={classNames(classes.appBar, {
								[classes.appBarShift]: open
							})}
						>
							<Toolbar disableGutters>
								<Typography variant="h6" color="inherit" noWrap>
									<strong>
										<AnchorLink to="/">
											<img
												src={navbarGenomaLogo}
												alt="Genoma Logo"
											/>
										</AnchorLink>
									</strong>
								</Typography>
								<IconButton
									color="primary"
									aria-label="Open drawer"
									onClick={this.handleDrawerOpen}
									className={classNames(
										classes.menuButton,
										open && classes.hide
									)}
								>
									<ViewHeadline />
								</IconButton>
							</Toolbar>
						</AppBar>

						<Drawer
							className={classes.drawer}
							variant="temporary"
							anchor="right"
							open={open}
							classes={{
								paper: classes.drawerPaper
							}}
						>
							<IconButton
								onClick={this.handleDrawerClose}
								style={{ marginRight: "auto" }}
							>
								<ChevronRight />
							</IconButton>
							<Divider />
							<List component="nav">
								<ListItemLink
									to="/admin"
									onClick={this.handleDrawerClose}
								>
									<ListItemIcon>
										<Home />
									</ListItemIcon>
									<ListItemText primary="Dashboard" />
								</ListItemLink>
								<ListItemLink
									to="/genomap1"
									onClick={this.handleDrawerClose}
								>
									<ListItemIcon>
										<Home />
									</ListItemIcon>
									<ListItemText primary="GenomaP1" />
								</ListItemLink>
								<ListItemLink
									to="/genomaprocessp2"
									onClick={this.handleDrawerClose}
								>
									<ListItemIcon>
										<Info />
									</ListItemIcon>
									<ListItemText primary="GenomaProcessP2" />
								</ListItemLink>
								<ListItemLink
									to="/genomaPersonalTestP7"
									onClick={this.handleDrawerClose}
								>
									<ListItemIcon>
										<Info />
									</ListItemIcon>
									<ListItemText primary="GenomaPersonalTestP7" />
								</ListItemLink>
								<ListItemLink
									to="/personalteststarted"
									onClick={this.handleDrawerClose}
								>
									<ListItemIcon>
										<Info />
									</ListItemIcon>
									<ListItemText primary="PersonalTestStarted" />
								</ListItemLink>
							</List>
						</Drawer>
					</Grid>
				</Grid>
			</Grid>
			// </div>
		);
	}
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
