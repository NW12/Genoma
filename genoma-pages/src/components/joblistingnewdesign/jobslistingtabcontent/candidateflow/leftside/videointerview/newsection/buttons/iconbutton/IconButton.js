import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Delete } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const styles = {
  iconButtons: {
    backgroundColor: "#2ebed4",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#2ebed4"
    }
  },
  iconButtonRoot: {
    minHeight: 31,
    minWidth: 31,
    padding: "5px 5px"
  },
  iconButtonsSize: {
    fontSize: 21
  }
};

const IconButton = props => {
  const { classes } = props;
  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        className={classes.iconButtons}
        classes={{ root: classes.iconButtonRoot }}
      >
        <Delete className={classes.iconButtonsSize} />
      </Button>
    </div>
  );
};

IconButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IconButton);
