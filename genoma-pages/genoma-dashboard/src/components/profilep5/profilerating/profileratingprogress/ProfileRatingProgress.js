import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, CircularProgress, Typography } from "@material-ui/core";

const styles = {
  root: {
    position: "relative",
    height: 116,
    width: 117,
    border: "1px solid #999999",
    backgroundColor: "#ffffff",
    borderRadius: "100%"
  },
  wrapper: {
    height: 93,
    width: 93,
    margin: 10,
    position: "reltaive",
    backgroundColor: "#ffffff",
    borderRadius: "100%",
    border: "1px solid #999999",
    textAlign: "center",
    paddingTop: 13
  },

  fabProgress: {
    top: 0,
    left: 0,
    position: "absolute",
    borderRadius: "100%"
  },
  progressPercent: {
    fontSize: 15,
    fontWeight: "700",
    color: "#ff008a"
  }
};

class ProfileRatingProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0
    };
  }

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
          size={114}
          value={70}
          thickness={4.3}
        />

        <div className={classes.wrapper}>
          <Typography component="i">{this.props.ratingIcon}</Typography>
          <Typography variant="body1">
            <span className={classes.progressPercent}>70 %</span>
          </Typography>
        </div>
      </div>
    );
  }
}

ProfileRatingProgress.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileRatingProgress);
