import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import GamesLineScoreChart from "./gameslinescorechart/GamesLineScoreChart";

const styles = theme => ({
  gameScorePaper: {
    height: 650,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 15,
      marginTop: 15
    }
  },
  gameScoreChart: {
    position: "absolute",
    left: "-4px"
  },
  heading: {
    fontWeight: "300",
    marginBottom: 10,
    padding: "14px 19px 0px 14px",
    [theme.breakpoints.down("sm")]: {
      padding: "14px 9px 0px 11px"
    }
  }
});

class GamesLineScore extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.gameScorePaper}>
          <Typography variant="h6" className={classes.heading}>
            Score In Game 1
          </Typography>
          <GamesLineScoreChart />
        </Paper>
      </div>
    );
  }
}

GamesLineScore.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GamesLineScore);
