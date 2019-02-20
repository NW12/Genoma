import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";
import CircularProgressChart from "../../../common/circularProgressChart/CircularProgresschart";

const styles = {
  processTitle: {
    paddingTop: 10,
    fontSize: 25,

    fontWeight: "light"
  },
  processTime: {
    fontSize: 15,
    fontWeight: "medium",
    margin: 0
  }
};

const SingleProcessItem = props => {
  const { classes } = props;
  return (
    <div>
      <CircularProgressChart
        icon={props.processIcon}
        className={props.percentBar}
      />
      <Typography
        variant="h3"
        classes={{
          h3: classes.processTitle
        }}
      >
        {props.processTitle}
      </Typography>
      <Typography
        paragraph
        variant="body1"
        classes={{
          paragraph: classes.processTime
        }}
      >
        {props.processProgress}
      </Typography>
    </div>
  );
};

SingleProcessItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleProcessItem);
