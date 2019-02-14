import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, Grid, Button } from "@material-ui/core";

import BannerBackground from "../../../assets/images/banner-background.png";

const styles = {
  root: {
    backgroundImage: `url(${BannerBackground} )`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
  },
  para: {
    fontSize: 24,
    lineheight: 28,
    fontWeight: "100",
    margin: 0,
    paddingTop: 50
  },
  heading: {
    fontSize: 100,
    fontWeight: "bold"
  },
  container: {
    padding: "239px 15px 218px 15px",
    color: "#ffffff",
    textAlign: "center"
  },
  btn: {
    padding: "21px 50px 18px",
    marginRight: 10,
    borderRadius: 4,
    color: "#ffffff",
    fontWeight: 300,
    fontSize: 14
  },
  btnSec: {
    paddingTop: 64
  },
  "@media (max-width: 600px)": {
    btn: {
      padding: "21px 30px 18px",
      marginBottom: 10
    },
    para: {
      fontSize: 18,
      lineheight: 22,
      paddingTop: 25
    },
    heading: {
      fontSize: 40
    },
    container: {
      padding: "100px 15px 80px 15px"
    }
  },

  "@media (min-width: 600px)": {
    para: {
      fontSize: 22,
      paddingTop: 40
    },
    heading: {
      fontSize: 70
    },
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
    bannerContentWidth: {
      width: "60%",
      margin: "0 auto"
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

const Banner = props => {
  const { classes } = props;

  return (
    <Grid container className={classes.root} justify="center">
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={12}>
          <Typography
            variant="h1"
            color="inherit"
            classes={{
              h1: classes.heading
            }}
          >
            CREATIVE AGENCY
          </Typography>
        </Grid>
        <Grid container className={classes.bannerContentWidth}>
          <Grid item xs={12}>
            <Typography
              component="p"
              paragraph
              color="inherit"
              classes={{
                paragraph: classes.para
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.btnSec}>
          <Button
            className={classes.btn}
            variant="outlined"
            style={{ border: "1px solid #ffffff" }}
          >
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

Banner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner);
