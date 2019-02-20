import React from "react";
import PropTypes from "prop-types";
import ListItemLink from "../../common/RouterLink/ListitemLink";
import AnchorLink from "../../common/RouterLink/AnchorLink";
import navbarDashGenomaLogo from "../../../assets/images/dashboardNav-logo.png";
import profileimg from "../../../assets/images/appbarprofile.png";
import {
	CssBaseline,
	withStyles,
	Hidden,
	Drawer,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	List,
	ListItemIcon,
	ListItemText,
	Button
} from "@material-ui/core";
import {
	ViewHeadline,
	Home,
	CardTravelOutlined,
	Settings,
	BarChart,
	PersonOutline,
	HowToReg,
	ArrowDropDown
} from "@material-ui/icons";

const drawerWidth = 190;

const styles = theme => ({
	listMenu: {
		position: "relative",
		"&:hover": {
			backgroundColor: "#5c5c5c",
			"& $iconSizeColor, & $listText": {
				color: "#ffffff"
			}
		},
		"&:focus": {
			backgroundColor: "#5c5c5c",
			"& $iconSizeColor, & $listText": {
				color: "#e1e1e1"
			}
		}
	},
	root: {
		display: "flex"
	},
	noPadding: {
		padding: 0
	},
	iconMargin: {
		marginRight: 8
	},
	iconSizeColor: {
		fontSize: 30,
		color: "#828282"
	},
	listText: {
		color: "#828282",
		fontSize: 16,
		fontWeight: 300
	},
	drawer: {
		backgroundColor: "#202020",
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	appBar: {
		backgroundColor: "#ffffff",
		boxShadow: "none",
		padding: "13px 0px",
		[theme.breakpoints.only("sm")]: {
			padding: "9px 0px"
		}
	},
	menuButton: {
		[theme.breakpoints.up("sm")]: {
			display: "none"
		}
	},
	drawerPaper: {
		height: "calc(100% - 90px)",
		top: 90,
		width: drawerWidth,
		backgroundColor: "#202020",
		[theme.breakpoints.down("sm")]: {
			height: "calc(100% - 85px)",
			top: 85
		}
	}
});

class NavbarDashboard extends React.Component {
	state = {
		mobileOpen: false
	};

	handleDrawerToggle = () => {
		this.setState(state => ({ mobileOpen: !state.mobileOpen }));
	};

	render() {
		const { classes, theme } = this.props;

		const drawer = (
			<div>
				<List>
					<ListItemLink to="/home" className={classes.listMenu}>
						<ListItemIcon className={classes.iconMargin}>
							<Home className={classes.iconSizeColor} />
						</ListItemIcon>
						<ListItemText
							primary="Home"
							className={classes.noPadding}
							classes={{ primary: classes.listText }}
						/>
					</ListItemLink>
					<ListItemLink to="/admin" className={classes.listMenu}>
						<ListItemIcon className={classes.iconMargin}>
							<CardTravelOutlined
								className={classes.iconSizeColor}
							/>
						</ListItemIcon>
						<ListItemText
							primary="Jobs Listing"
							className={classes.noPadding}
							classes={{ primary: classes.listText }}
						/>
					</ListItemLink>
					<ListItemLink to="/candidates" className={classes.listMenu}>
						<ListItemIcon className={classes.iconMargin}>
							<HowToReg className={classes.iconSizeColor} />
						</ListItemIcon>
						<ListItemText
							primary="Candidates"
							className={classes.noPadding}
							classes={{ primary: classes.listText }}
						/>
					</ListItemLink>
					<ListItemLink to="/report" className={classes.listMenu}>
						<ListItemIcon className={classes.iconMargin}>
							<BarChart className={classes.iconSizeColor} />
						</ListItemIcon>
						<ListItemText
							primary="Reports"
							className={classes.noPadding}
							classes={{ primary: classes.listText }}
						/>
					</ListItemLink>
					<ListItemLink to="/profile" className={classes.listMenu}>
						<ListItemIcon className={classes.iconMargin}>
							<PersonOutline className={classes.iconSizeColor} />
						</ListItemIcon>
						<ListItemText
							primary="Profile"
							className={classes.noPadding}
							classes={{ primary: classes.listText }}
						/>
					</ListItemLink>
					<ListItemLink to="/setting" className={classes.listMenu}>
						<ListItemIcon className={classes.iconMargin}>
							<Settings className={classes.iconSizeColor} />
						</ListItemIcon>
						<ListItemText
							primary="Setting"
							className={classes.noPadding}
							classes={{ primary: classes.listText }}
						/>
					</ListItemLink>
					<ListItemLink
						to="/joblistinggroup2"
						className={classes.listMenu}
					>
						<ListItemIcon className={classes.iconMargin}>
							<CardTravelOutlined
								className={classes.iconSizeColor}
							/>
						</ListItemIcon>
						<ListItemText
							primary="Job Listing Group2"
							className={classes.noPadding}
							classes={{ primary: classes.listText }}
						/>
					</ListItemLink>
					<ListItemLink
						to="/joblistingnewdesign"
						className={classes.listMenu}
					>
						<ListItemIcon className={classes.iconMargin}>
							<CardTravelOutlined
								className={classes.iconSizeColor}
							/>
						</ListItemIcon>
						<ListItemText
							primary="Job Listing NewDesign"
							className={classes.noPadding}
							classes={{ primary: classes.listText }}
						/>
					</ListItemLink>
					<ListItemLink
						to="/candipathcandiview"
						className={classes.listMenu}
					>
						<ListItemIcon className={classes.iconMargin}>
							<CardTravelOutlined
								className={classes.iconSizeColor}
							/>
						</ListItemIcon>
						<ListItemText
							primary="Candidate Path"
							className={classes.noPadding}
							classes={{ primary: classes.listText }}
						/>
					</ListItemLink>
				</List>
			</div>
		);

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" color="inherit" noWrap>
							<strong>
								<AnchorLink to="/" className={classes.logo}>
									<img
										src={navbarDashGenomaLogo}
										alt="NavbarDash Genoma Logo"
									/>
								</AnchorLink>
							</strong>
						</Typography>
						<Button
							variant="text"
							className={classes.buttonQualified}
							style={{ marginLeft: "auto" }}
						>
							<img src={profileimg} alt="kid's profile" />
							<ArrowDropDown className={classes.rightIcon} />
						</Button>

						<IconButton
							color="primary"
							aria-label="Open drawer"
							onClick={this.handleDrawerToggle}
							className={classes.menuButton}
						>
							<ViewHeadline />
						</IconButton>
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer}>
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden smUp implementation="css">
						<Drawer
							container={this.props.container}
							variant="temporary"
							anchor={
								theme.direction === "rtl" ? "right" : "left"
							}
							open={this.state.mobileOpen}
							onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Drawer
							classes={{
								paper: classes.drawerPaper
							}}
							variant="permanent"
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
			</div>
		);
	}
}

NavbarDashboard.propTypes = {
	classes: PropTypes.object.isRequired,
	// Injected by the documentation to work in an iframe.
	// You won't need it on your project.
	container: PropTypes.object,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(NavbarDashboard);
