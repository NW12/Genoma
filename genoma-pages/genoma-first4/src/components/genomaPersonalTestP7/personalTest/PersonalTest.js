import React from "react";
import PropTypes from "prop-types";
import PersonalTestIcons from "./personalTestIcons/PersonalTestIcons";

import {
  withStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid
} from "@material-ui/core";

const styles = {
  title: {
    fontSize: 27,
    fontWeight: "light"
  },
  detail: {
    paddingTop: 14,
    fontSize: 16,
    fontWeight: "light"
  },
  btn: {
    padding: "14px 20px 14px 24px",
    color: "#ffffff",
    fontWeight: 300,
    fontSize: 14,
    margin: "0 auto"
  },
  noPadTopBot: {
    paddingTop: 0,
    paddingBottom: 0
  },
  cardSetting: {
    paddingTop: 29,
    paddingBottom: 86
  },
  container: {
    paddingRight: 15,
    paddingLeft: 15
  },
  "@media (max-width: 600px)": {
    cardSetting: {
      paddingTop: 15,
      paddingBottom: 40
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
      paddingBottom: 86
    },

    container: {
      maxWidth: 938
    }
  },
  "@media (min-width: 1280px)": {
    cardSetting: {
      width: "90%",
      paddingTop: 29,
      paddingBottom: 86
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

const PersonalTest = props => {
  const { classes } = props;

  return (
    <Grid
      container
      // direction="column"
      alignItems="center"
      justify="center"
      className={classes.container}
    >
      <Card className={classes.cardSetting}>
        <CardContent className={classes.noPadTopBot}>
          <Typography
            variant="h5"
            classes={{
              h3: classes.title
            }}
          >
            Personal Information
          </Typography>
          <Typography
            variant="body1"
            classes={{
              body1: classes.detail
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Typography>
          <PersonalTestIcons />
        </CardContent>
        <CardActions className={classes.noPadTopBot}>
          <Button className={classes.btn} variant="contained" color="primary">
            Begin the test
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

PersonalTest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalTest);
