import React from "react";
import PropTypes from "prop-types";
import RadioButtonRow from "./RadioButtonRow/RadioButtonRow";

import { withStyles, Paper, Grid, Divider, Button } from "@material-ui/core";

const styles = {
  btn: {
    padding: "15px 40px",
    color: "#ffffff",
    fontWeight: 300,
    fontSize: 14
  },
  RadioButtonRowPad: {
    paddingBottom: 30
  },
  RadioButtonMidRowPad: {
    paddingTop: 31,
    paddingBottom: 25
  },
  paperSetting: {
    paddingTop: 71,
    paddingBottom: 13,
    paddingRight: 10,
    width: 933
  },
  container: {
    paddingRight: 15,
    paddingLeft: 15
  },
  "@media (max-width: 600px)": {
    RadioButtonRowPad: {
      paddingBottom: 15
    },
    RadioButtonMidRowPad: {
      paddingTop: 15,
      paddingBottom: 13
    },
    paperSetting: {
      paddingTop: 31,
      width: "95%",
      paddingLeft: 10
    }
  },
  "@media (min-width: 600px)": {
    paperSetting: {
      width: 548
    },
    container: {
      maxWidth: 594
    }
  },
  "@media (min-width: 960px)": {
    paperSetting: {
      width: 892
    },
    container: {
      maxWidth: 938
    }
  },
  "@media (min-width: 1280px)": {
    paperSetting: {
      paddingTop: 71,
      paddingBottom: 13,
      width: 933
    },
    container: {
      maxWidth: 1170
    }
  },
  "@media (min-width: 1920px)": {
    container: {
      maxWidth: 1872
    }
  }
};

const PersonalInfoForm = props => {
  const { classes } = props;

  return (
    <Grid container justify="center">
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Grid item xs={12}>
          <Paper className={classes.paperSetting}>
            <Grid item xs={12} className={classes.RadioButtonRowPad}>
              <RadioButtonRow RadioGroupLabel="You feel superior to other people.." />
            </Grid>
            <Divider
              variant="middle"
              width="70%"
              style={{ margin: "0 auto" }}
            />
            <Grid item xs={12} className={classes.RadioButtonMidRowPad}>
              <RadioButtonRow RadioGroupLabel="Lorem Ipsum is simply dummy text of" />
            </Grid>
            <Divider
              variant="middle"
              width="70%"
              style={{ margin: "0 auto" }}
            />
            <Grid item xs={12} className={classes.RadioButtonMidRowPad}>
              <RadioButtonRow RadioGroupLabel="Lorem Ipsum is simply dummy text of" />
            </Grid>
            <Divider
              variant="middle"
              width="70%"
              style={{ margin: "0 auto" }}
            />
            <Grid item xs={12} className={classes.RadioButtonMidRowPad}>
              <RadioButtonRow RadioGroupLabel="Lorem Ipsum is simply dummy text of" />
            </Grid>
            <Divider
              variant="middle"
              width="70%"
              style={{ margin: "0 auto" }}
            />
            <Grid item xs={12} className={classes.RadioButtonMidRowPad}>
              <RadioButtonRow RadioGroupLabel="Lorem Ipsum is simply dummy text of" />
            </Grid>
            <Grid container justify="flex-end">
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
              >
                NEXT
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

PersonalInfoForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalInfoForm);
