import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, Divider } from "@material-ui/core";

import CultureFitRadioRow from "./culturefitradiorow/CultureFitRadioRow";

const styles = {
  RadioButtonRowPad: {
    paddingBottom: 25
  },
  RadioButtonMidRowPad: {
    paddingTop: 31
  },

  "@media (max-width: 600px)": {
    RadioButtonRowPad: {
      paddingBottom: 15
    },
    RadioButtonMidRowPad: {
      paddingTop: 15,
      paddingBottom: 13
    }
  }
};

const CultureFitRadioBtns = props => {
  const { classes } = props;

  return (
    <Grid container justify="center">
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={12}>
          <Grid item xs={12} className={classes.RadioButtonRowPad}>
            <CultureFitRadioRow RadioGroupLabel="You feel superior to other people.." />
          </Grid>
          <Divider variant="middle" />
          <Grid item xs={12} className={classes.RadioButtonMidRowPad}>
            <CultureFitRadioRow RadioGroupLabel="Lorem Ipsum is simply dummy text of" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

CultureFitRadioBtns.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CultureFitRadioBtns);
