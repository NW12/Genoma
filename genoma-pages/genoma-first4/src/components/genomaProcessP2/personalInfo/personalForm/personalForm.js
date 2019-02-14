import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  withStyles,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

const styles = {
  "@media (max-width: 600px)": {
    textField: {
      width: 300
    }
  },
  "@media (min-width: 600px)": {
    textField: {
      width: 250
    }
  },
  "@media (min-width: 960px)": {
    textField: {
      width: 370
    }
  },
  "@media (min-width: 1280px)": {
    textField: {
      width: 490
    }
  },
  "@media (min-width: 1920px)": {
    textField: {
      width: 490
    }
  }
};

class PersonalForm extends Component {
  state = {
    checkedA: false,
    checkedB: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="space-between">
        <Grid item xs={12} sm={6}>
          <TextField
            id="input-with-icon-grid"
            placeholder="First Name"
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="input-with-icon-grid"
            placeholder="Second Name"
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="input-with-icon-grid"
            placeholder="Email"
            className={classes.textField}
            style={{ paddingTop: "17px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="input-with-icon-grid"
            label="Phone Number"
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="input-with-icon-grid"
            label="Mobile Number"
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="input-with-icon-grid"
            label="Address"
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="input-with-icon-grid"
            label="City"
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="input-with-icon-grid"
            label="Country"
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checkedB}
                  onChange={this.handleChange("checkedB")}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Male"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checkedA}
                  onChange={this.handleChange("checkedA")}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Female"
            />
          </FormGroup>
        </Grid>
      </Grid>
    );
  }
}

PersonalForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalForm);
