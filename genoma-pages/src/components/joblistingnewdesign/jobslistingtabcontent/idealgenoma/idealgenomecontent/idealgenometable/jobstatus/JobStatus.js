import React from "react";
import Select from "react-select";
import { RadioButtonUnchecked } from "@material-ui/icons";

const style = {
	control: (base, state) => ({
		...base,
		border: state.isFocused ? 0 : 0,
		boxShadow: state.isFocused ? 0 : 0,
		"&:hover": {
			border: state.isFocused ? 0 : 0
		},
		menuPortal: { ...base, zIndex: 9999 }
	})
};

const options = [
	{
		value: "creating",
		label: (
			<RadioButtonUnchecked
				style={{
					fontSize: "16px",
					borderRadius: "100%",
					color: "transparent",
					backgroundColor: "#39b54a"
				}}
			/>
		)
	},
	{
		value: "created",
		label: (
			<RadioButtonUnchecked
				style={{
					fontSize: "16px",
					borderRadius: "100%",
					color: "transparent",
					backgroundColor: "#919191"
				}}
			/>
		)
	}
];

class JobStatus extends React.Component {
	state = {
		portalPlacement: "auto",
		selectedOption: options.filter(
			option => option.value === this.props.selectedValue
		)
	};
	handleChange = selectedOption => {
		this.setState({ selectedOption });
	};
	render() {
		const { selectedOption, portalPlacement } = this.state;

		return (
			<Select
				value={selectedOption}
				onChange={this.handleChange}
				menuPlacement={portalPlacement}
				options={options}
				menuPortalTarget={document.body}
				styles={style}
			/>
		);
	}
}

export default JobStatus;
