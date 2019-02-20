import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
	mainBtnIcon: {
		fontSize: "15px",
		cursor: "pointer"
	}
};

class DeleteAlert extends React.Component {
	state = {
		open: false
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;

		return (
			<div>
				<Typography
					component="i"
					className={classes.mainBtnIcon}
					onClick={this.handleClickOpen}
				>
					{this.props.deleteIcon}
				</Typography>

				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-describedby="alert-dialog-description"
				>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							You want to delete this?
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Yes
						</Button>
						<Button
							onClick={this.handleClose}
							color="primary"
							autoFocus
							variant="contained"
						>
							Cancel
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

DeleteAlert.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DeleteAlert);
