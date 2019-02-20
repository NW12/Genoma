import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CandidateAppliedCard from "./candidateappliedcard/CandidateAppliedCard";
import CandidateProfiledCard from "./candidateprofiledcard/CandidateProfiledCard";
import CandidateVideoInterview from "./candidateVideoInterview/CandidateVideoInterview";
import CandidateHiredCard from "./candidatehiredcard/CandidateHiredCard";
import CandidateInterviewCard from "./candidateinterviewcard/CandidateInterviewCard";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: 19
  },
  paddingLeftRight: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: 5,
      paddingLeft: 5
    }
  }
});

const CandidateCards = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg
        classes={{ item: classes.paddingLeftRight }}
      >
        <CandidateAppliedCard />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg
        classes={{ item: classes.paddingLeftRight }}
      >
        <CandidateProfiledCard />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg
        classes={{ item: classes.paddingLeftRight }}
      >
        <CandidateVideoInterview />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg
        classes={{ item: classes.paddingLeftRight }}
      >
        <CandidateInterviewCard />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg
        classes={{ item: classes.paddingLeftRight }}
      >
        <CandidateHiredCard />
      </Grid>
    </Grid>
  );
};

CandidateCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CandidateCards);
