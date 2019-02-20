import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
	Tooltip
} from "@material-ui/core";
import TableOptionButtons from "./tableoptions/TableOptionButtons";
import JobStatus from "./jobstatus/JobStatus";

let counter = 0;
function createData(
	status,
	name,
	description,
	date_creation,
	no_of_samples,
	options
) {
	counter += 1;
	return {
		id: counter,
		status,
		name,
		description,
		date_creation,
		no_of_samples,
		options
	};
}

function desc(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function stableSort(array, cmp) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = cmp(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
	return order === "desc"
		? (a, b) => desc(a, b, orderBy)
		: (a, b) => -desc(a, b, orderBy);
}

const rows = [
	{
		id: "status",
		numeric: false,
		disablePadding: false,
		label: "Status"
	},
	{
		id: "name",
		numeric: false,
		disablePadding: false,
		label: "Genoma Name"
	},
	{
		id: "description",
		numeric: false,
		disablePadding: false,
		label: "Description"
	},
	{
		id: "date_creation",
		numeric: false,
		disablePadding: false,
		label: "Date Creation"
	},
	{
		id: "no_of_samples",
		numeric: false,
		disablePadding: false,
		label: "No of Samples"
	},
	{
		id: "options",
		numeric: false,
		disablePadding: false,
		label: "Options"
	}
];

class EnhancedTableHead extends React.Component {
	createSortHandler = property => event => {
		this.props.onRequestSort(event, property);
	};

	render() {
		const { order, orderBy } = this.props;

		return (
			<TableHead>
				<TableRow>
					{rows.map(
						row => (
							<TableCell
								key={row.id}
								align={row.action ? "right" : "left"}
								padding={
									row.disablePadding ? "none" : "default"
								}
								sortDirection={
									orderBy === row.id ? order : false
								}
							>
								<Tooltip
									title="Sort"
									placement={
										row.numeric
											? "bottom-end"
											: "bottom-start"
									}
									enterDelay={300}
								>
									<TableSortLabel
										active={orderBy === row.id}
										direction={order}
										onClick={this.createSortHandler(row.id)}
									>
										<span
											style={{
												paddingRight: 8
											}}
										>
											{row.label}
										</span>{" "}
									</TableSortLabel>
								</Tooltip>
							</TableCell>
						),
						this
					)}
				</TableRow>
			</TableHead>
		);
	}
}

EnhancedTableHead.propTypes = {
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.string.isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired
};

const styles = theme => ({
	root: {
		width: "100%",
		overflowX: "auto"
	},
	table: {
		minWidth: 1065
	}
});

class IdealGenomeTable extends React.Component {
	state = {
		order: "asc",
		orderBy: "name",
		selected: [],
		data: [
			createData(
				<JobStatus selectedValue="created" />,
				"Manager",
				"Use for testing",
				"Jan-30-2019",
				"7 Samples",
				<TableOptionButtons />
			),
			createData(
				<JobStatus selectedValue="creating" />,
				"Product Owner",
				"Use for testing",
				"Jan-30-2019",
				"5 Samples",
				<TableOptionButtons />
			),
			createData(
				<JobStatus selectedValue="created" />,
				"Manager",
				"Use for testing",
				"Jan-30-2019",
				"7 Samples",
				<TableOptionButtons />
			),
			createData(
				<JobStatus selectedValue="creating" />,
				"Product Owner",
				"Use for testing",
				"Jan-30-2019",
				"5 Samples",
				<TableOptionButtons />
			)
		]
	};

	handleRequestSort = (event, property) => {
		const orderBy = property;
		let order = "desc";

		if (this.state.orderBy === property && this.state.order === "desc") {
			order = "asc";
		}

		this.setState({ order, orderBy });
	};

	handleSelectAllClick = event => {
		if (event.target.checked) {
			this.setState(state => ({ selected: state.data.map(n => n.id) }));
			return;
		}
		this.setState({ selected: [] });
	};

	handleClick = (event, id) => {
		const { selected } = this.state;
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}

		this.setState({ selected: newSelected });
	};

	isSelected = id => this.state.selected.indexOf(id) !== -1;

	render() {
		const { classes } = this.props;
		const { data, order, orderBy, selected } = this.state;

		return (
			<div className={classes.root}>
				<Table className={classes.table} aria-labelledby="tableTitle">
					<EnhancedTableHead
						numSelected={selected.length}
						order={order}
						orderBy={orderBy}
						onSelectAllClick={this.handleSelectAllClick}
						onRequestSort={this.handleRequestSort}
						rowCount={data.length}
					/>
					<TableBody>
						{stableSort(data, getSorting(order, orderBy)).map(n => {
							const isSelected = this.isSelected(n.id);
							return (
								<TableRow
									hover
									onClick={event =>
										this.handleClick(event, n.id)
									}
									aria-checked={isSelected}
									tabIndex={-1}
									key={n.id}
									selected={isSelected}
								>
									<TableCell align="left">
										{n.status}
									</TableCell>
									<TableCell align="left">{n.name}</TableCell>
									<TableCell align="left">
										{n.description}
									</TableCell>
									<TableCell align="left">
										{n.date_creation}
									</TableCell>
									<TableCell align="left">
										{n.no_of_samples}
									</TableCell>
									<TableCell align="left">
										{n.options}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		);
	}
}

IdealGenomeTable.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IdealGenomeTable);
