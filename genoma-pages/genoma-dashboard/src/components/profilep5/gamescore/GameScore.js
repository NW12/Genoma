import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import GameScoreChart from "./gamescorechart/GameScoreChart";

const styles = theme => ({
  gameScorePaper: {
    // width: 387,
    height: 715,
    paddingTop: 20,
    position: "relative",
    marginBottom: 10,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 10
    }
  },
  gameScoreChart: {
    position: "absolute",
    left: "-2px"
  },
  heading: {
    fontWeight: "300",
    marginBottom: 19,
    padding: "0px 19px 0px 21px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 9px 0px 11px"
    }
  }
});

class GameScore extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.gameScorePaper}>
          <Typography variant="h6" className={classes.heading}>
            Score in Game 1
          </Typography>
          <GameScoreChart />
        </Paper>
      </div>
    );
  }
}

GameScore.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameScore);
