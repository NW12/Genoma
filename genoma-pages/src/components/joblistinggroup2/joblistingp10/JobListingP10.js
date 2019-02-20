import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import JobsState from "./jobsstate/JobsState";
import { Grid } from "@material-ui/core";
import CandidateFlow from "./candidateflow/CandidateFlow";
const styles = theme => ({
  paddingLeftRight: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: 5,
      paddingLeft: 5
    }
  }
});

const JobListingP10 = props => {
  const { classes } = props;
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        lg={9}
        xl={9}
        classes={{ item: classes.paddingLeftRight }}
      >
        <CandidateFlow />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        lg={3}
        xl={3}
        classes={{ item: classes.paddingLeftRight }}
      >
        <JobsState />
      </Grid>
    </Grid>
  );
};

JobListingP10.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobListingP10);
