import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, CircularProgress, Typography } from "@material-ui/core";
import classNames from "classnames";

const styles = {
  root: {
    margin: "0 auto",
    position: "relative",
    height: 105,
    width: 105,
    border: "1px solid #999999",
    backgroundColor: "#ffffff",
    borderRadius: "100%"
  },
  wrapper: {
    height: 93,
    width: 93,
    margin: 5,
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
    color: "#2ebed4"
  }
};

class SingleCognitiveAbility extends Component {
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
          className={classNames(classes.fabProgress, this.props.colorClassName)}
          variant="determinate"
          // value={this.state.completed}
          size={104}
          value={70}
          thickness={2.5}
        />

        <div className={classes.wrapper}>
          <Typography component="i">{this.props.iconUsed}</Typography>
          <Typography variant="body1">
            <span className={classes.progressPercent}>70 %</span>
          </Typography>
        </div>
      </div>
    );
  }
}

SingleCognitiveAbility.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleCognitiveAbility);
