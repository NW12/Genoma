import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "@material-ui/core";
import CultureFitSingleIcon from "./culturefitsingleicon/CultureFitSingleIcon";
import clockImage from "../../../../../../../assets/images/clockImage.png";
import honestyImage from "../../../../../../../assets/images/honestyImage.png";
import answerImage from "../../../../../../../assets/images/answerImage.png";

const styles = {
  cultureFitIconsSetting: {
    paddingTop: 35,
    paddingBottom: 54
  }
};
const CultureFitIcons = props => {
  const { classes } = props;
  return (
    <Grid container justify="center" className={classes.cultureFitIconsSetting}>
      <Grid item xs={6} sm={4}>
        <CultureFitSingleIcon
          cultureFitImgUsed={clockImage}
          cultureFitIconDesc="Take less than 
              12minutes"
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <CultureFitSingleIcon
          cultureFitImgUsed={honestyImage}
          cultureFitIconDesc="Answer honestly, If
              you don’t like the answer"
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <CultureFitSingleIcon
          cultureFitImgUsed={answerImage}
          cultureFitIconDesc="Try, Not to leave
              any neutral answer."
        />
      </Grid>
    </Grid>
  );
};

CultureFitIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CultureFitIcons);
