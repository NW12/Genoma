import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";

const styles = theme => ({
  btn: {
    color: "#ffffff",
    fontWeight: "300",
    fontSize: 13,
    lineHeight: 1
  },
  btnExistGenome: {
    backgroundColor: "#ff9800",
    "&:hover": {
      backgroundColor: "#ff9800"
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 5
    }
  },
  btnCreateGenome: {
    backgroundColor: "#2ebed4",
    "&:hover": {
      backgroundColor: "#2ebed4"
    }
  },
  sizeLarge: {
    padding: "8px 10px",
    [theme.breakpoints.down("xs")]: {
      padding: "8px 5px"
    }
  },
  btnAlign: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "right"
    }
  }
});

class TopButtons extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={6}>
          <Button
            variant="contained"
            size="large"
            className={`${classes.btn} ${classes.btnExistGenome}`}
            classes={{ sizeLarge: classes.sizeLarge }}
          >
            USE ON EXISTING GENOME
          </Button>
        </Grid>

        <Grid item xs={6} className={classes.btnAlign}>
          <Button
            variant="contained"
            size="large"
            className={`${classes.btn} ${classes.btnCreateGenome}`}
            classes={{ sizeLarge: classes.sizeLarge }}
          >
            CREATE A NEW GENOME
          </Button>
        </Grid>
      </Grid>
    );
  }
}

TopButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopButtons);
