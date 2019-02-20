import React from "react";
import PropTypes from "prop-types";

import PersonalForm from "./personalForm/personalForm";

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
    paddingBottom: 15,
    fontWeight: "light"
  },
  btn: {
    padding: "14px 40px",
    color: "#ffffff",
    fontWeight: 300,
    fontSize: 14
  },
  buttonSetting: {
    paddingBottom: 25
  },
  container: {
    paddingRight: 15,
    paddingLeft: 15
  },
  "@media (max-width: 600px)": {
    buttonSetting: {
      paddingRight: 30
    }
  },
  "@media (min-width: 600px)": {
    buttonSetting: {
      paddingRight: 35
    },
    container: {
      maxWidth: 594
    }
  },
  "@media (min-width: 960px)": {
    buttonSetting: {
      paddingRight: 85
    },
    container: {
      maxWidth: 938
    }
  },
  "@media (min-width: 1280px)": {
    buttonSetting: {
      paddingRight: 85
    },
    container: {
      maxWidth: 1170
    }
  },
  "@media (min-width: 1920px)": {
    buttonSetting: {
      paddingRight: 70
    },
    container: {
      maxWidth: 1872
    }
  }
};

function PersonalInfo(props) {
  const { classes } = props;

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.container}
    >
      <Card>
        <CardContent>
          <Typography
            variant="h5"
            classes={{
              h3: classes.title
            }}
          >
            Personal Information
          </Typography>
          <PersonalForm />
        </CardContent>
        <CardActions className={classes.buttonSetting}>
          <Button
            className={classes.btn}
            variant="contained"
            style={{ marginLeft: "auto" }}
            color="secondary"
          >
            BACK
          </Button>
          <Button className={classes.btn} variant="contained" color="primary">
            NEXT
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalInfo);
