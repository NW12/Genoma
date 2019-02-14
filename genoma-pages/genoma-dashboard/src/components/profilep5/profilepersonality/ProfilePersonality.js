import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import PersonalitySlider from "./personalityslider/PersonalitySlider";

const styles = theme => ({
  ProfilePersonalityPaper: {
    // width: 461,
    height: 309,
    padding: "15px 21px 18px 20px",
    marginBottom: 10,
    [theme.breakpoints.up("sm")]: {
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
        <PersonalitySlider title="COOL MODE" value1={40} value2={65} />
        <PersonalitySlider title="AGREBLINESS" value1={45} value2={70} />
        <PersonalitySlider title="STABILITY" value1={50} value2={67} />
        <PersonalitySlider title="EXTRAVERSION" value1={42} value2={72} />
        <PersonalitySlider title="OPENNESS" value1={60} value2={70} />
      </Paper>
    );
  }
}

ProfilePersonality.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfilePersonality);
