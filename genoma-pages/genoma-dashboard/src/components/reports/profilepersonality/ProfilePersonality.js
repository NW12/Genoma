import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import PersonalitySlider from "./personalityslider/PersonalitySlider";

const styles = theme => ({
  ProfilePersonalityPaper: {
    // width: 440,
    // height: 311,
    padding: "14px 21px 18px 20px",
    marginTop: 10,
    [theme.breakpoints.up("md")]: {
      marginRight: 15
    }
  },
  heading: {
    fontWeight: "300"
  }
});

class ProfilePersonality extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.ProfilePersonalityPaper}>
        <Typography variant="h6" className={classes.heading}>
          Personality Fit
        </Typography>
        <PersonalitySlider title="COOL MODE" value={40} />
        <PersonalitySlider title="AGREBLINESS" value={50} />
        <PersonalitySlider title="STABILITY" value={60} />
        <PersonalitySlider title="EXTRAVERSION" value={45} />
        <PersonalitySlider title="OPENNESS" value={70} />
      </Paper>
    );
  }
}

ProfilePersonality.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfilePersonality);
