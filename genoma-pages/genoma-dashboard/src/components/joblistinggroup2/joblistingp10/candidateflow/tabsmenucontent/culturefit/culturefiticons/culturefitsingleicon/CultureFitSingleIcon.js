import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";

const styles = {
  cultureFitIconDesc: {
    fontSize: 16,
    fontWeight: 500,
    margin: 0
  },
  cultureFitIconContent: {
    textAlign: "center"
  },

  "@media (min-width: 1280px)": {
    cultureFitIconDesc: {
      margin: "0 auto"
    }
  }
};

const CultureFitSingleIcons = props => {
  const { classes } = props;
  return (
    <div className={classes.cultureFitIconContent}>
      <img src={props.cultureFitImgUsed} alt="personalTest icon" />
      <Typography
        paragraph
        variant="body1"
        classes={{
          paragraph: classes.cultureFitIconDesc
        }}
      >
        {props.cultureFitIconDesc}
      </Typography>
    </div>
  );
};

CultureFitSingleIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CultureFitSingleIcons);
