import React from "react";
import PropTypes from "prop-types";
import { withStyles, FormControl, Select } from "@material-ui/core";

const styles = theme => ({
	selectDIv: {
		border: "1px solid #c2c2c2",
		borderRadius: 3,
		textAlign: "center",
		marginLeft: 10
	},
	formControl: {
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			paddingLeft: 5,
			paddingRight: 5
		}
	}
});

class PersonalityPercent extends React.Component {
	state = {
		personweight: 10
	};
	handlePersonWeightChange = personweight => event => {
		this.setState({ [personweight]: event.target.value });
	};
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.selectDIv}>
				<FormControl className={classes.formControl}>
					<Select
						native
						value={this.state.personweight}
						onChange={this.handlePersonWeightChange("personweight")}
						inputProps={{
							name: "personweight",
							id: "personweight"
						}}
						disableUnderline
					>
						<option value={0}>0%</option>
						<option value={5}>5%</option>
						<option value={10}>10%</option>
					</Select>
				</FormControl>
			</div>
		);
	}
}

PersonalityPercent.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalityPercent);
