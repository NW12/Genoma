import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import NavbarDashboard from "../layout/navbarDashboard/NavbarDashboard";
import FooterDashboard from "../layout/footerDashboard/FooterDashboard";
import JobsListingTabs from "./jobslistingtabs/JobsListingTabs";

const styles = theme => ({
  root: {
    padding: "130px 20px 70px 220px",
    backgroundColor: "#eeeeee"
  },
  paddingLeftRight: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: 5,
      paddingLeft: 5
    }
  },
  heading: {
    marginBottom: 30
  },

  "@media (max-width: 600px)": {
    root: {
      padding: "90px 12px 20px 15px"
    }
  }
});

const JobsListingp10 = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <NavbarDashboard />
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.heading}>
              Job Position
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <JobsListingTabs />
          </Grid>
        </Grid>
      </div>
      <FooterDashboard />
    </React.Fragment>
  );
};

JobsListingp10.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobsListingp10);
