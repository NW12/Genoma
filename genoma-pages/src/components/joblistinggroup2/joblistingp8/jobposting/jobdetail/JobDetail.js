import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  FormControl,
  Select,
  TextField,
  InputAdornment,
  MenuItem
} from "@material-ui/core";

const styles = theme => ({
  jobDetail: {
    marginTop: 30
  },
  paddingLeftRight: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: 5,
      paddingLeft: 5
    }
  },
  formControl: {
    paddingTop: 32,
    width: "100%"
  },
  noPadding: {
    padding: 0
  },
  lightFontWeight: {
    fontWeight: 300
  },
  textfieldPadTop: {
    [theme.breakpoints.up("sm")]: {
      paddingTop: 16
    }
  }
});

const ranges = [
  {
    value: "0-20",
    label: "0 to 20"
  },
  {
    value: "21-30",
    label: "21 to 30"
  },
  {
    value: "30-40",
    label: "30 to 40"
  },
  {
    value: "51-100",
    label: "51 to 100"
  }
];

class JobDetail extends React.Component {
  state = {
    empType: "",
    category: "",
    reqEdu: "",
    reqExp: "",
    hoursRange: "30-40"
  };

  handleHoursChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleEmpTypeSelectChange = empType => event => {
    this.setState({ [empType]: event.target.value });
  };

  handleCategorySelectChange = catageroy => event => {
    this.setState({ [catageroy]: event.target.value });
  };

  handleReqEduSelectChange = reqEdu => event => {
    this.setState({ [reqEdu]: event.target.value });
  };
  handleReqExpSelectChange = reqEdu => event => {
    this.setState({ [reqEdu]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.jobDetail}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.lightFontWeight}>
            Job Details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.lightFontWeight}>
            Please fill out these fields if you want to use the free job boards.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              classes={{ item: classes.paddingLeftRight }}
            >
              <FormControl className={classes.formControl}>
                <Select
                  native
                  value={this.state.empType}
                  onChange={this.handleEmpTypeSelectChange("empType")}
                  inputProps={{
                    name: "empType",
                    id: "empType"
                  }}
                >
                  <option value="" style={{ color: "#c0c0c0" }} disabled>
                    Employment type
                  </option>
                  <option value="employment-type1">Employment type1</option>
                  <option value="employment-type2">Employment type2</option>
                  <option value="employment-type3">Employment type3</option>
                  <option value="employment-type4">Employment type4</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              classes={{ item: classes.paddingLeftRight }}
            >
              <FormControl className={classes.formControl}>
                <Select
                  native
                  value={this.state.category}
                  onChange={this.handleCategorySelectChange("category")}
                  inputProps={{
                    name: "category",
                    id: "category"
                  }}
                >
                  <option value="" style={{ color: "#c0c0c0" }} disabled>
                    Category
                  </option>
                  <option value="category1"> Category 1</option>
                  <option value="category2"> Category 2</option>
                  <option value="category3"> Category 3</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              lg={4}
              classes={{ item: classes.paddingLeftRight }}
              className={classes.textfieldPadTop}
            >
              <TextField
                fullWidth
                select
                label="hours per week"
                value={this.state.hoursRange}
                onChange={this.handleHoursChange("hoursRange")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">hours</InputAdornment>
                  )
                }}
              >
                {ranges.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              classes={{ item: classes.paddingLeftRight }}
            >
              <FormControl className={classes.formControl}>
                <Select
                  native
                  value={this.state.reqEdu}
                  onChange={this.handleReqEduSelectChange("reqEdu")}
                  inputProps={{
                    name: "reqEdu",
                    id: "reqEdu"
                  }}
                >
                  <option value="" style={{ color: "#c0c0c0" }} disabled>
                    Required Education
                  </option>
                  <option value="required-education1">
                    Required Education1
                  </option>
                  <option value="required-education2">
                    Required Education2
                  </option>
                  <option value="required-education3">
                    Required Education3
                  </option>
                  <option value="required-education4">
                    Required Education4
                  </option>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              classes={{ item: classes.paddingLeftRight }}
            >
              <FormControl className={classes.formControl}>
                <Select
                  native
                  value={this.state.reqExp}
                  onChange={this.handleReqExpSelectChange("reqExp")}
                  inputProps={{
                    name: "reqExp",
                    id: "reqExp"
                  }}
                >
                  <option value="" style={{ color: "#c0c0c0" }} disabled>
                    Required Excperience
                  </option>
                  <option value="required-excperience1">
                    Required Excperience 1
                  </option>
                  <option value="required-excperience2">
                    Required Excperience 2
                  </option>
                  <option value="required-excperience3">
                    Required Excperience 3
                  </option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

JobDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobDetail);
