import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import ReportCompliment from "./reportcompliment/ReportCompliment";
import CognitiveAbility from "./cognitiveability/CognitiveAbility";
import ProfilePersonality from "./profilepersonality/ProfilePersonality";
import GamesLineScore from "./gameslinescore/GamesLineScore";
import GamesBarScore from "./gamesbarscore/GamesBarScore";
import NavbarDashboard from "../layout/navbarDashboard/NavbarDashboard";
import FooterDashboard from "../layout/footerDashboard/FooterDashboard";
const styles = theme => ({
  root: {
    padding: "130px 20px 70px 220px",
    backgroundColor: "#eeeeee",
    [theme.breakpoints.down("xs")]: {
      padding: "90px 15px 20px 15px"
    }
  },

  heading: {
    marginBottom: 30
  }
});

const Reports = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <NavbarDashboard />
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.heading}>
              Report
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <ReportCompliment />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Grid container>
              <Grid item xs={12}>
                <CognitiveAbility />
              </Grid>
              <Grid item xs={12}>
                <ProfilePersonality />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <GamesBarScore />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <GamesLineScore />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <FooterDashboard />
    </React.Fragment>
  );
};

Reports.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Reports);
