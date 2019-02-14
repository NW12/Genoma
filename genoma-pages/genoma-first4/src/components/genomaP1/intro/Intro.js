import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, Grid } from "@material-ui/core";
import introImage from "../../../assets/images/intro-icon.png";

const styles = {
  root: {
    backgroundColor: "#ffffff"
  },
  title: {
    fontSize: 33,
    fontWeight: "300",
    paddingTop: 22,
    paddingBottom: 19
  },
  para: {
    fontSize: 18,
    fontWeight: "300"
  },
  introContent: {
    paddingTop: 59,
    paddingBottom: 64,
    textAlign: "center"
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15
  },
  "@media (max-width: 600px)": {
    title: {
      fontSize: 25
    },
    para: {
      fontSize: 16
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
    introContent: {
      width: "71%"
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

const Intro = props => {
  const { classes } = props;
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid container className={classes.introContent}>
          <Grid item xs={12}>
            <img src={introImage} alt="intro icon" />
            <Typography variant="h3" className={classes.title}>
              We Believe in the Power of Great Ideas.
            </Typography>
            <Typography variant="body1" className={classes.para}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Intro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Intro);
