import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import RatingProfile from "../../../assets/images/ratingprofile.png";
import ProfileRatingProgress from "./profileratingprogress/ProfileRatingProgress";

const styles = theme => ({
  ratingPaper: {
    // width: 292,
    height: 184,
    paddingTop: 14,
    paddingBottom: 18,
    paddingLeft: 18,
    position: "relative",
    marginBottom: 22,
    [theme.breakpoints.up("sm")]: {
      marginRight: 15
    }
  },
  ratingHeading: {
    fontWeight: "300"
  },
  ProfileRatingProgress: {
    marginLeft: 64
  }
});

class ProfileRating extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.ratingPaper}>
        <Typography variant="h6" className={classes.ratingHeading}>
          Rating
        </Typography>
        <div className={classes.ProfileRatingProgress}>
          <ProfileRatingProgress
            ratingIcon={<img src={RatingProfile} alt="ratingicon" />}
          />
        </div>
      </Paper>
    );
  }
}

ProfileRating.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileRating);
