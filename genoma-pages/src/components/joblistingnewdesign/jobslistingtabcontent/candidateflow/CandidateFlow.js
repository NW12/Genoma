import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import LeftSide from "./leftside/LeftSide";
import RightSide from "./rightside/RightSide";
const styles = theme => ({
  paddingLeftRight: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: 5,
      paddingLeft: 5
    }
  }
});

const CandidateFlow = props => {
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
        <LeftSide />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        lg={3}
        xl={3}
        classes={{ item: classes.paddingLeftRight }}
      >
        <RightSide />
      </Grid>
    </Grid>
  );
};

CandidateFlow.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CandidateFlow);
