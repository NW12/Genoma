import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import SingleReasoningGame1 from "./singlereasoninggame1/SingleReasoningGame1";
import CareBGame from "../../../../../../../assets/images/carebpointgame.png";
import iowaGame from "../../../../../../../assets/images/iowapointgame.png";

const styles = theme => ({
  gameHead: {
    marginBottom: 28,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 14
    }
  },
  heading: {
    fontWeight: 300
  },
  numbGame: {
    textAlign: "right",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    }
  },
  showSpan: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  paddingLeftRight: {
    paddingRight: 5,
    paddingLeft: 5,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 5,
      paddingBottom: 5
    },
    [theme.breakpoints.up("xl")]: {
      paddingRight: 9,
      paddingLeft: 9
    }
  }
});

class ReasoningGames1 extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container className={classes.gameHead}>
          <Grid item xs={11} sm={6}>
            <Typography variant="h6" className={classes.heading}>
              REASONING GAMES
            </Typography>
          </Grid>
          <Grid item xs={1} sm={6} className={classes.numbGame}>
            <Typography variant="h6" className={classes.heading}>
              (02) <span className={classes.showSpan}>GAMES</span>
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            lg={2}
            xl={2}
            classes={{ item: classes.paddingLeftRight }}
          >
            <SingleReasoningGame1
              img={CareBGame}
              altImg="Care B Game"
              titleImg="Care B Game"
              titleCard="Care"
              addGame={true}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            lg={2}
            xl={2}
            classes={{ item: classes.paddingLeftRight }}
          >
            <SingleReasoningGame1
              img={iowaGame}
              altImg="Iowa Game"
              titleImg="Iowa Game"
              titleCard="Iowa"
              addGame={false}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

ReasoningGames1.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReasoningGames1);
