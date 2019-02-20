import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import SingleCognitiveGame from "./singlecognitivegame/SingleCognitiveGame";
import CareBGame from "../../../../../../../assets/images/carebpointgame.png";
import diceGame from "../../../../../../../assets/images/dicepointgame.png";
import iowaGame from "../../../../../../../assets/images/iowapointgame.png";
import towrGame from "../../../../../../../assets/images/towrpointgame.png";
import strpGame from "../../../../../../../assets/images/strppointgame.png";
import tnumGame from "../../../../../../../assets/images/tnumpointgame.png";

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

class CognitiveGames extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container className={classes.gameHead}>
          <Grid item xs={11} sm={6}>
            <Typography variant="h6" className={classes.heading}>
              COGNITIVE GAMES
            </Typography>
          </Grid>
          <Grid item xs={1} sm={6} className={classes.numbGame}>
            <Typography variant="h6" className={classes.heading}>
              (06) <span className={classes.showSpan}>GAMES</span>
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
            <SingleCognitiveGame
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
            <SingleCognitiveGame
              img={diceGame}
              altImg="Dice Game"
              titleImg="Dice Game"
              titleCard="Dice"
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
            <SingleCognitiveGame
              img={iowaGame}
              altImg="Iowa Game"
              titleImg="Iowa Game"
              titleCard="Iowa"
              addGame={false}
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
            <SingleCognitiveGame
              img={towrGame}
              altImg="Towr Game"
              titleImg="Towr Game"
              titleCard="Towr"
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
            <SingleCognitiveGame
              img={strpGame}
              altImg="Strp Game"
              titleImg="Strp Game"
              titleCard="Strp"
              addGame={false}
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
            <SingleCognitiveGame
              img={tnumGame}
              altImg="Tnum Game"
              titleImg="Tnum Game"
              titleCard="Tnum"
              addGame={false}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

CognitiveGames.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CognitiveGames);
