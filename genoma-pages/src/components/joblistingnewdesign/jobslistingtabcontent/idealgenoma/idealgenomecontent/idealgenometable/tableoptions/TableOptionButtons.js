import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ButtonAlert from "./buttonalert/ButtonAlert";

const styles = theme => ({
	btnWrapper: {
		width: 155
	},
	btn: {
		fontWeight: "300",
		fontSize: "0.75rem"
	},
	buttonRoot: {
		padding: 0,
		minWidth: 50
	}
});

class TableOptionButtons extends React.Component {
	state = {
		opendcopydialog: false,
		opendeletedialog: false
	};

	handleClickOpenCopy = () => {
		this.setState({ opendcopydialog: true });
	};

	handleCloseCopy = () => {
		this.setState({ opendcopydialog: false });
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
			<div className={classes.btnWrapper}>
				<Button
					variant="text"
					onClick={this.handleClickOpenCopy}
					className={classes.btn}
					classes={{ root: classes.buttonRoot }}
				>
					Copy
				</Button>
				<Button
					variant="text"
					onClick={this.handleClickOpenDelete}
					className={classes.btn}
					classes={{ root: classes.buttonRoot }}
				>
					Delete
				</Button>

				<ButtonAlert
					title="Copy Genome"
					contenttext="Do you want to Copy Genome?"
					open={this.state.opendcopydialog}
					onClose={this.handleCloseCopy}
				/>
				<ButtonAlert
					title="Delete Genome"
					contenttext="Do you want to Delete Genome?"
					open={this.state.opendeletedialog}
					onClose={this.handleCloseDelete}
				/>
			</div>
		);
	}
}

TableOptionButtons.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableOptionButtons);
