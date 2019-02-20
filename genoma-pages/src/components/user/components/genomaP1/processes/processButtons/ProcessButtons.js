import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, Button } from "@material-ui/core";

const styles = {
  root: {
    backgroundColor: "#ffffff"
  },
  btn: {
    padding: "21px 50px 18px",
    marginRight: 10,
    borderRadius: 4,
    color: "#ffffff",
    fontWeight: 300,
    fontSize: 14
  },

  container: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 32,
    paddingBottom: 59,
    textAlign: "center"
  },

  "@media (max-width: 600px)": {
    btn: {
      padding: "21px 30px 18px"
    },
    container: {
      paddingTop: 15,
      paddingBottom: 30
    }
  },
  "@media (min-width: 600px)": {
    container: {
      maxWidth: 594
    }
  },
  "@media (min-width: 960px)": {
    container: {
      maxWidth: 938
    }
  },
  "@media (min-width: 1280px)": {
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

const ProcessButtons = props => {
  const { classes } = props;
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid
        container
        className={classes.container}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12}>
          <Button className={classes.btn} variant="contained" color="secondary">
            REGISTER
          </Button>
          <Button className={classes.btn} variant="contained" color="primary">
            LOGIN NOW!
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

ProcessButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProcessButtons);
