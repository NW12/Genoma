import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { LinearProgress, Typography, Grid } from "@material-ui/core";

const styles = {
  progresSec: {
    paddingBottom: 40
  },
  progressMeasurement: {
    height: 23,
    width: 269,
    border: "1px solid #999999",
    borderRadius: 4
  },
  progressTitle: {
    fontWeight: "300",
    fontSize: 45,
    paddingTop: 10
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15
  },

  "@media (max-width: 600px)": {
    progresSec: {
      paddingBottom: 20
    }
  },
  "@media (min-width: 600px)": {
    container: {
      maxWidth: 594
    }
  },
  "@media (min-width: 960px)": {
    container: {
      maxWidth: 938
    }
  },
  "@media (min-width: 1280px)": {
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

class LinearBuffer extends React.Component {
  state = {
    completed: 0,
    buffer: 10
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed > 100) {
      this.setState({ completed: 0, buffer: 10 });
    } else {
      const diff = Math.random() * 10;
      const diff2 = Math.random() * 10;
      this.setState({
        completed: completed + diff,
        buffer: completed + diff + diff2
      });
    }
  };

  render() {
    const { classes } = this.props;
    // const { completed, buffer } = this.state;
    return (
      <Grid container justify="center" className={classes.progresSec}>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.container}
        >
          <Grid item xs={12}>
            <LinearProgress
              variant="buffer"
              value={20}
              valueBuffer={30}
              className={classes.progressMeasurement}
            />
            <Typography variant="h3" className={classes.progressTitle}>
              My Progress
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

LinearBuffer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LinearBuffer);
