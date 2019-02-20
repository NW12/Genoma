import React from "react";
import PropTypes from "prop-types";
import { withStyles, CircularProgress, Typography } from "@material-ui/core";
import DeleteAlert from "../deleteAlert/DeleteAlert";

function IconTest(props) {
  return (
    <Typography
      component="i"
      style={{
        position: "absolute",
        top: "23%",
        left: "25%"
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
    height: 77,
    width: 77,
    border: "1px solid #999999",
    borderRadius: "100%",
    margin: "0 auto"
  },
  wrapper: {
    height: 69,
    width: 69,
    margin: 3,
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
  delete: {
    visibility: "inherit",
    position: "absolute",
    content: "",
    width: 22,
    height: 22,
    right: -3,
    borderRadius: "100%"
  }
};

class CircularTab extends React.Component {
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
          size={76}
          thickness={2.5}
          value={this.props.progressValue}
        />

        <div className={classes.wrapper}>
          <div
            className={`${classes.delete} ${this.props.backgroundDelete}`}
            style={this.props.styleDeleteIcon}
          >
            <DeleteAlert deleteIcon={this.props.deleteIcon} />
          </div>
          <IconTest>{this.props.iconUsed}</IconTest>
        </div>
      </div>
    );
  }
}

CircularTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularTab);
