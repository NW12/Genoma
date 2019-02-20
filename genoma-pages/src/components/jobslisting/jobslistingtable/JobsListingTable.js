import React from "react";
import PropTypes from "prop-types";
import MenuFollowing from "../menufollowing/MenuFollowing";
import ActionsMenuItem from "../actionsMenuItem/ActionsMenuItem";
import AlertDialogSlide from "../DialogAlert/DialogAlert";
import JobStatus from "../jobstatus/JobStatus";

import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
  Paper
} from "@material-ui/core";

let counter = 0;
function createData(
  status,
  name,
  total_cand,
  profiled,
  department,
  location,
  create_date,
  following,
  actions
) {
  counter += 1;
  return {
    id: counter,
    status,
    name,
    total_cand,
    profiled,
    department,
    location,
    create_date,
    following,
    actions
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
    label: "Job Name"
  },
  {
    id: "total_cand",
    numeric: true,
    disablePadding: false,
    label: "Total Cand.",
    icon: (
      <AlertDialogSlide
        title="Total Candidates"
        contenttext="Candidates who have participated in the process."
      />
    )
  },
  {
    id: "profileds",
    numeric: true,
    disablePadding: false,
    label: "Profiled",
    icon: (
      <AlertDialogSlide
        title="Profiled"
        contenttext="Candidates who have completed the process."
      />
    )
  },
  {
    id: "department",
    numeric: false,
    disablePadding: false,
    label: "Department"
  },
  {
    id: "location",
    numeric: false,
    disablePadding: false,
    label: "Location"
  },
  {
    id: "create_date",
    numeric: false,
    disablePadding: false,
    label: "Create Date"
  },
  {
    id: "following",
    numeric: false,
    disablePadding: true,
    label: "Following",
    icon: (
      <AlertDialogSlide
        title="Following"
        contenttext="If you follow a job, you will be receiving notification and updates of the job."
      />
    )
  },
  {
    id: "actions",
    numeric: false,
    disablePadding: true,
    action: true,
    label: "Actions"
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
                padding={row.disablePadding ? "none" : "default"}
                sortDirection={orderBy === row.id ? order : false}
              >
                {/* <Tooltip
                  title="Sort"
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                > */}
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={this.createSortHandler(row.id)}
                >
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 300,
                      paddingRight: 10
                    }}
                  >
                    {row.label}
                  </span>
                  <span>{row.icon}</span>
                </TableSortLabel>
                {/* </Tooltip> */}
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

const styles = {
  root: {
    width: "calc(100% - 0px)",
    marginTop: 16
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: "auto"
  }
};

class EnhancedTable extends React.Component {
  state = {
    order: "asc",
    orderBy: "name",
    selected: [],
    data: [
      createData(
        <JobStatus selectedValue="open" />,
        <Typography variant="body1" color="primary">
          Sales Executive
        </Typography>,
        102,
        12,
        "Sales",
        "United States,America",
        "23 July,2018",
        <MenuFollowing style={{ color: "#ff008a" }} />,
        <ActionsMenuItem />
      ),
      createData(
        <JobStatus selectedValue="open" />,
        <Typography variant="body1" color="primary">
          Manager
        </Typography>,
        102,
        13,
        "Sales",
        "United States,America",
        "23 July,2018",
        <MenuFollowing style={{ color: "#ff008a" }} />,
        <ActionsMenuItem />
      ),
      createData(
        <JobStatus selectedValue="closed" />,
        <Typography variant="body1" color="primary">
          Sales Executive
        </Typography>,
        102,
        16,
        "Sales",
        "United States,America",
        "23 July,2018",
        <MenuFollowing style={{ color: "#ff008a" }} />,
        <ActionsMenuItem />
      ),
      createData(
        <JobStatus selectedValue="open" />,
        <Typography variant="body1" color="primary">
          Assistant
        </Typography>,
        102,
        102,
        "Sales",
        "United States,America",
        "23 July,2018",
        <MenuFollowing style={{ color: "#ff008a" }} />,
        <ActionsMenuItem />
      ),
      createData(
        <JobStatus selectedValue="draft" />,
        <Typography variant="body1" color="primary">
          Manager
        </Typography>,
        102,
        102,
        "Sales",
        "United States,America",
        "23 July,2018",
        <MenuFollowing style={{ color: "#ff008a" }} />,
        <ActionsMenuItem />
      ),
      createData(
        <JobStatus selectedValue="open" />,
        <Typography variant="body1" color="primary">
          Product Manager
        </Typography>,
        102,
        102,
        "Sales",
        "United States,America",
        "23 July,2018",
        <MenuFollowing style={{ color: "#ff008a" }} />,
        <ActionsMenuItem />
      ),
      createData(
        <JobStatus selectedValue="open" />,
        <Typography variant="body1" color="primary">
          Sales Executive
        </Typography>,
        102,
        16,
        "Sales",
        "United States,America",
        "23 July,2018",
        <MenuFollowing style={{ color: "#ff008a" }} />,
        <ActionsMenuItem />
      )
    ],
    page: 0,
    rowsPerPage: 6
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

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <div className={classes.tableWrapper}>
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
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  // const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      // aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}

                      // selected={isSelected}
                    >
                      {/* <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell> */}
                      <TableCell align="left">{n.status}</TableCell>
                      <TableCell align="left">{n.name}</TableCell>
                      <TableCell align="left" style={{ textSize: "15px" }}>
                        {n.total_cand}
                      </TableCell>
                      <TableCell align="left">{n.profiled}</TableCell>
                      <TableCell align="left">{n.department}</TableCell>
                      <TableCell align="left">{n.location}</TableCell>
                      <TableCell align="left">{n.create_date}</TableCell>
                      <TableCell align="left">{n.following}</TableCell>
                      <TableCell align="right">{n.actions}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[6, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnhancedTable);
