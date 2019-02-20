import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";

const styles = {
  personalTestIconDesc: {
    fontSize: 16,
    fontWeight: 700,
    margin: 0
  },
  personalTestIconContent: {
    paddingTop: 47,
    paddingBottom: 41,
    textAlign: "center"
  },

  "@media (min-width: 1280px)": {
    personalTestIconDesc: {
      width: "55%",
      margin: "0 auto"
    }
  }
};

const PersonalTestSingleIcon = props => {
  const { classes } = props;
  return (
    <div className={classes.personalTestIconContent}>
      <img src={props.personalTestImgUsed} alt="personalTest icon" />
      <Typography
        paragraph
        variant="body1"
        classes={{
          paragraph: classes.personalTestIconDesc
        }}
      >
        {props.personalTestIconDesc}
      </Typography>
    </div>
  );
};

PersonalTestSingleIcon.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalTestSingleIcon);
