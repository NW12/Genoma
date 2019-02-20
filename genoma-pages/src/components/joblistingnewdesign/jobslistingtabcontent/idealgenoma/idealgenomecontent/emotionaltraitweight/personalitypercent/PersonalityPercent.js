import React from "react";
import PropTypes from "prop-types";
import {
	withStyles,
	FormControl,
	Input,
	InputAdornment
} from "@material-ui/core";

const styles = theme => ({
	selectDIv: {
		border: "1px solid #c2c2c2",
		borderRadius: 3,
		textAlign: "center",
		marginLeft: 10
	},
	formControl: {
		margin: 0,
		// width: "100%",
		[theme.breakpoints.up("sm")]: {
			paddingLeft: 10,
			paddingRight: 5
		}
	}
});

class PersonalityPercent extends React.Component {
	state = {
		percent: 10
	};
	handleChange = prop => event => {
		this.setState({ [prop]: event.target.value });
	};
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.selectDIv}>
				<FormControl
					margin="normal"
					fullWidth
					className={classes.formControl}
				>
					<Input
						id="trait-percent"
						name="trait-percent"
						autoComplete="trait-percent"
						value={this.state.percent}
						type="number"
						onChange={this.handleChange("percent")}
						placeholder="0"
						disableUnderline
						endAdornment={
							<InputAdornment position="end">%</InputAdornment>
						}
						inputProps={{
							"aria-label": "Percent"
						}}
					/>
				</FormControl>
			</div>
		);
	}
}

PersonalityPercent.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalityPercent);
