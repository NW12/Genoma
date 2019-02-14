import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core";
import CultureFitIcons from "./culturefiticons/CultureFitIcons";
import CultureFitRadioBtns from "./culturefitradiobtns/CultureFitRadioBtns";

const styles = {
  title: {
    fontSize: 27,
    fontWeight: "light"
  },
  detail: {
    fontSize: 14,
    fontWeight: "400"
  },
  noPadTopBot: {
    paddingTop: 0,
    paddingBottom: 0
  },
  noPadding: {
    padding: 0
  },
  cardSetting: {
    backgroundColor: "#f5f5f5",
    padding: "41px 55px 54px 52px",
    textAlign: "center",
    marginTop: 34
  },
  container: {
    paddingRight: 15,
    paddingLeft: 15
  },
  "@media (max-width: 600px)": {
    cardSetting: {
      padding: "10px 10px 25px 10px"
    }
  },
  "@media (min-width: 600px)": {
    cardSetting: {
      paddingTop: 23,
      paddingBottom: 55
    },

    container: {
      maxWidth: 594
    }
  },
  "@media (min-width: 960px)": {
    cardSetting: {
      paddingTop: 29,
      paddingBottom: 55
    },

    container: {
      maxWidth: 938
    }
  },
  "@media (min-width: 1280px)": {
    cardSetting: {
      paddingTop: 44,
      paddingBottom: 55
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

const CultureFit = props => {
  const { classes } = props;

  return (
    <Grid container alignItems="center" justify="center">
      <Card className={classes.cardSetting}>
        <CardContent
          className={classes.noPadTopBot}
          classes={{ root: classes.noPadding }}
        >
          <Typography
            variant="body1"
            classes={{
              body1: classes.detail
            }}
          >
            HEXACO Personality test is an instrument that assesses the six majar
            dimensions of personality:
          </Typography>
          <Typography
            variant="body1"
            classes={{
              body1: classes.detail
            }}
          >
            Honesty-Humility - Emotionality - eXtraversion - Agreeableness
            (versus Anger) - Conscientiousness - Openness to Experience
          </Typography>

          <Typography
            variant="body1"
            classes={{
              body1: classes.detail
            }}
          >
            Has 60 questions and takes arrownd 10 menutes.
          </Typography>
          <Typography
            variant="body1"
            classes={{
              body1: classes.detail
            }}
          >
            This is how it looks for candidates
          </Typography>

          <CultureFitIcons />
          <CultureFitRadioBtns />
        </CardContent>
      </Card>
    </Grid>
  );
};

CultureFit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CultureFit);
