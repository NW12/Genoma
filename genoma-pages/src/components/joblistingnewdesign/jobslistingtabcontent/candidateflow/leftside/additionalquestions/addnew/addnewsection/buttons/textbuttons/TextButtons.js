import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const styles = theme => ({
  btn: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 1.0,
    fontWeight: 300,
    marginRight: 10,
    "&:last-child": {
      marginRight: 0
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
      marginRight: 4
    }
  },
  buttonRoot: {
    minHeight: 31,
    paddingTop: 9,
    paddingBottom: 8
  },
  cancelButton: {
    backgroundColor: "#5f5f5f",
    "&:hover": {
      backgroundColor: "#5f5f5f"
    }
  },
  saveAddButton: {
    backgroundColor: "#ff9800",
    "&:hover": {
      backgroundColor: "#ff9800"
    }
  }
});

const TextButtons = props => {
  const { classes } = props;
  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        className={`${classes.cancelButton} ${classes.btn} `}
        classes={{ root: classes.buttonRoot }}
      >
        CANCEL
      </Button>
      <Button
        variant="contained"
        size="medium"
        className={`${classes.saveAddButton} ${classes.btn} `}
        classes={{ root: classes.buttonRoot }}
      >
        SAVE AND ADD ANOTHER
      </Button>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        className={classes.btn}
        classes={{ root: classes.buttonRoot }}
      >
        SAVE
      </Button>
    </div>
  );
};

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextButtons);
