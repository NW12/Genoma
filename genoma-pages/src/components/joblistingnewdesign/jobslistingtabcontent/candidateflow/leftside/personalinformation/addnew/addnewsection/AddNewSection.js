import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, TextField } from "@material-ui/core";
import AddNewActionLeft from "./addnewaction/AddNewActionLeft";
import IconButton from "./buttons/iconbutton/IconButton";
import TextButtons from "./buttons/textbuttons/TextButtons";
import AddNewActionRight from "./addnewaction/AddNewActionRight";

const styles = theme => ({
  paperRoot: {
    border: "0.5px solid #ebebeb"
  },
  cardSetting: {
    marginBottom: 9
  },
  listTextIcon: {
    fontSize: 16
  },
  topSubSection: {
    padding: "7px 15px 7px 15px",
    backgroundColor: "#ffffff"
  },
  lowerSubSection: {
    padding: "7px 15px 7px 15px",
    backgroundColor: "#ffffff"
  },
  leftBtn: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    }
  },
  rightBtns: {
    textAlign: "right",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    }
  },
  textField: {
    padding: 10,
    borderBottom: "none"
  }
});

class AddNewSection extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paperRoot}>
        <Grid container className={classes.topSubSection}>
          <Grid item xs={12} sm={6}>
            <AddNewActionLeft />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AddNewActionRight />
          </Grid>
        </Grid>
        <Grid container>
          <TextField
            id="outlined-bare"
            className={classes.textField}
            placeholder="Type question.."
            margin="normal"
            multiline
            fullWidth
            rows={5}
          />
        </Grid>
        <Grid container className={classes.lowerSubSection}>
          <Grid item xs={12} sm={1} className={classes.leftBtn}>
            <IconButton />
          </Grid>
          <Grid item xs={12} sm={11} className={classes.rightBtns}>
            <TextButtons />
          </Grid>
        </Grid>
      </div>
    );
  }
}

AddNewSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddNewSection);
