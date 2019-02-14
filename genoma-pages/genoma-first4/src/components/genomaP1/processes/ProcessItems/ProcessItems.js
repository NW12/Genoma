import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "@material-ui/core";
import {
  GroupOutlined,
  CardTravelOutlined,
  DonutSmallOutlined,
  ContactSupportOutlined,
  GraphicEqOutlined,
  SentimentVerySatisfied
} from "@material-ui/icons";
import SingleProcessItem from "../SingleProcessItem/SingleProcessItem";

const styles = {
  iconFontSize: {
    fontSize: 65
  },

  container: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 81,
    paddingBottom: 76,
    textAlign: "center"
  },

  "@media (max-width: 600px)": {
    smPadBot: {
      paddingBottom: 30
    },
    container: {
      paddingTop: 40,
      paddingBottom: 36
    }
  },

  "@media (min-width: 600px)": {
    smPadBot: {
      paddingBottom: 30
    },
    container: {
      maxWidth: 594
    }
  },
  "@media (min-width: 960px)": {
    padBot: {
      paddingBottom: 60
    },
    container: {
      maxWidth: 938
    }
  },
  "@media (min-width: 1280px)": {
    padBot: {
      paddingBottom: 60
    },
    container: {
      paddingTop: 81,
      maxWidth: 1170
    }
  },
  "@media (min-width: 1920px)": {
    container: {
      maxWidth: 1872
    }
  }
};

class SingleProcess extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center">
        <Grid
          container
          className={classes.container}
          alignItems="center"
          justify="center"
        >
          <Grid
            item
            xs={6}
            md={4}
            className={`${classes.padBot} ${classes.smPadBot}`}
          >
            <SingleProcessItem
              processIcon={<GroupOutlined className={classes.iconFontSize} />}
              processTitle="Personal Information"
              processProgress="5 minutes"
              percentBar="p30"
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            className={`${classes.padBot} ${classes.smPadBot}`}
          >
            <SingleProcessItem
              processIcon={
                <CardTravelOutlined className={classes.iconFontSize} />
              }
              processTitle="Excperience the job!"
              processProgress="2 minutes"
              percentBar="p40"
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            className={`${classes.padBot} ${classes.smPadBot}`}
          >
            <SingleProcessItem
              processIcon={
                <DonutSmallOutlined className={classes.iconFontSize} />
              }
              processTitle="Culture-fit assessment"
              processProgress="2 minutes"
              percentBar="p55"
            />
          </Grid>
          <Grid item xs={6} md={4} className={classes.smPadBot}>
            <SingleProcessItem
              processIcon={
                <ContactSupportOutlined className={classes.iconFontSize} />
              }
              processTitle="Additional Questions"
              processProgress="6 minutes"
              percentBar="p55"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <SingleProcessItem
              processIcon={
                <GraphicEqOutlined className={classes.iconFontSize} />
              }
              processTitle="Language Test"
              processProgress="6 minutes"
              percentBar="p60"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <SingleProcessItem
              processIcon={
                <SentimentVerySatisfied className={classes.iconFontSize} />
              }
              processTitle="Complete tests"
              processProgress="3 minutes"
              percentBar="p100"
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

SingleProcess.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleProcess);
