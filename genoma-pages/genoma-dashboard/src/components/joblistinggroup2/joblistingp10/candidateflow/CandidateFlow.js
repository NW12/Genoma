import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, Button } from "@material-ui/core";
import TabsMenu from "./tabsmenu/TabsMenu";
import TabsMenuMobile from "./tabsmenu/TabsMenuMobile";

const styles = theme => ({
  candidateFlow: {
    padding: "42px 19px 35px 19px",
    marginBottom: 10
  },
  btnEditJobPosting: {
    [theme.breakpoints.down("xs")]: {
      marginRight: 10
    }
  },
  candidateFlowHeading: {
    paddingBottom: 35
  },
  btn: {
    color: "#ffffff",
    fontWeight: "300",
    fontSize: 14
  }
});

class CandidateFlow extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.candidateFlow}>
        <div className={classes.candidateFlowHeading}>
          <Typography variant="body1">
            Select the stages that candidates must complete in the application
            process for this position.
          </Typography>
          <Typography
            variant="body1"
            classes={{
              body1: classes.tabsHeading
            }}
          >
            you can choose the stages and arrange them as youe prefer.
          </Typography>
        </div>
        <TabsMenu />
        <TabsMenuMobile />
        <Grid container style={{ marginTop: 61 }}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={`${classes.btn} ${classes.btnEditJobPosting}`}
            >
              EDIT JOB POSTING
            </Button>
          </Grid>

          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.btn}
            >
              EDIT IDEAL GENOMA
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

CandidateFlow.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CandidateFlow);
