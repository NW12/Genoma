import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { Button, Typography, Grid } from "@material-ui/core";
import { Add, Autorenew } from "@material-ui/icons";

const styles = theme => ({
  JobListingTitle: {
    marginBottom: 30
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  btn: {
    fontWeight: 700,
    fontSize: "14px"
  },
  openJobBtn: {
    marginRight: 10
  },
  whiteColor: {
    color: "#ffffff"
  },
  btnYellow: {
    backgroundColor: "#ff9800",
    "&:hover": {
      backgroundColor: "#ff9800"
    }
  },
  refreshButton: {
    backgroundColor: "#2ebed4",
    marginLeft: "10px",
    "&:hover": {
      backgroundColor: "#2ebed4"
    }
  },
  flatButtonColor: {
    color: "#6d6d6d"
  },
  leftButton: {
    textAlign: "right"
  },
  "@media (max-width: 960px)": {
    btn: {
      fontSize: "12px"
    }
  },
  "@media (max-width: 600px)": {
    leftButton: {
      textAlign: "left",
      paddingTop: 20
    },
    openJobBtn: {
      marginRight: 20,
      paddingLeft: 33,
      paddingRight: 33
    },
    refreshButton: {
      marginLeft: "40px"
    }
  }
});

function IconLabelButtons(props) {
  const { classes } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.JobListingTitle}>
          Jobs Listing
        </Typography>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Button
            className={`${classes.whiteColor} ${classes.btn} ${
              classes.openJobBtn
            }`}
            size="large"
            variant="contained"
            color="primary"
          >
            OPEN JOBS
          </Button>
          <Button
            size="large"
            className={`${classes.flatButtonColor} ${classes.btn}`}
            variant="text"
          >
            ARCHIVED JOBS
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.leftButton}>
          <Button
            variant="contained"
            size="large"
            className={`${classes.btnYellow} ${classes.whiteColor} ${
              classes.btn
            }`}
          >
            <Add className={classes.leftIcon} />
            ADD NEW
          </Button>
          <Button
            variant="contained"
            size="large"
            className={`${classes.refreshButton} ${classes.whiteColor}`}
          >
            <Autorenew />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IconLabelButtons);
