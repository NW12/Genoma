import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import ProfileWidget from "./profilewidget/ProfileWidget";
import ProfileRating from "./profilerating/ProfileRating";
import QuickNote from "./quicknote/QuickNote";
import StepsProcess from "./stepsinprocess/StepsProcess";
import CognitiveAbility from "./cognitiveability/CognitiveAbility";
import ProfileVideo from "./profilevideo/ProfileVideo";
import ProfilePersonality from "./profilepersonality/ProfilePersonality";
import GameScore from "./gamescore/GameScore";
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

  profileHeading: {
    marginBottom: 70
  }
});

const ProfileP5 = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <NavbarDashboard />
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.profileHeading}>
              Candidate Profile
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <ProfileWidget />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CognitiveAbility />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg>
                <ProfileRating />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg>
                <QuickNote />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg>
                <StepsProcess />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Grid container>
                  <Grid item xs={12} sm={12}>
                    <ProfilePersonality />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <ProfileVideo />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <GameScore />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <FooterDashboard />
    </React.Fragment>
  );
};

ProfileP5.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileP5);
