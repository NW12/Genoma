import React from "react";
import PropTypes from "prop-types";
import { withStyles, CircularProgress, Typography } from "@material-ui/core";

function IconTest(props) {
  return (
    <Typography
      component="i"
      style={{
        position: "relative",
        top: 20
      }}
    >
      {props.children}
    </Typography>
  );
}

IconTest.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  root: {
    position: "relative",
    height: 92,
    width: 92,
    border: "1px solid #999999",
    borderRadius: "100%"
  },
  wrapper: {
    height: 78,
    width: 78,
    margin: 6,
    backgroundColor: "#ffffff",
    borderRadius: "100%",
    border: "1px solid #999999"
  },

  fabProgress: {
    top: 0,
    left: 0,
    position: "absolute",
    borderRadius: "100%"
  },
  lock: {
    visibility: "inherit",
    position: "absolute",
    content: "",
    backgroundColor: "#898989",
    width: 22,
    height: 22,
    right: 0,
    borderRadius: "100%"
  }
};

class CircularStatic extends React.Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 10 });
  };

  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.root}
        style={{ backgroundColor: this.props.backgroundColorUsed }}
      >
        <CircularProgress
          className={classes.fabProgress}
          variant="determinate"
          // value={this.state.completed}
          size={91}
          value={this.props.progressValue}
        />

        <div className={classes.wrapper}>
          <div className={classes.lock} style={this.props.styleLockIcon}>
            {this.props.lockIcon}
          </div>
          <IconTest>{this.props.iconUsed}</IconTest>
        </div>
      </div>
    );
  }
}

CircularStatic.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularStatic);
