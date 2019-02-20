import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";
import NumericalIcon from "../../../assets/images/numericalreasoning2.png";
import CognitiveSpecialIcon from "../../../assets/images/cognitivespecial2.png";
import LogicalReasoningIcon from "../../../assets/images/logical.png";
import OverAllScoreIcon from "../../../assets/images/scoreboard.png";
import UniqueConginitiveAbility from "./uniqueconginitiveability/UniqueConginitiveAbility";

const styles = theme => ({
  cognitivePaper: {
    // width: 345,
    height: 378,
    paddingTop: 14,
    paddingLeft: 14,
    marginBottom: 10,
    [theme.breakpoints.up("md")]: {
      marginRight: 15
    }
  },
  heading: {
    fontWeight: "300"
  },
  containerPadding: {
    paddingTop: 22
  },
  itempaddingTop: {
    paddingTop: 12
  }
});

class CognitiveAbility extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.cognitivePaper}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.heading}>
              Cognitive Ability
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.containerPadding}>
          <Grid item xs={6}>
            <UniqueConginitiveAbility
              cognitiveIcon={
                <img src={NumericalIcon} alt="numerical reasoning icon" />
              }
              CognitiveAbilityTitle="Numerical Reasoning"
            />
          </Grid>
          <Grid item xs={6}>
            <UniqueConginitiveAbility
              cognitiveIcon={
                <img src={CognitiveSpecialIcon} alt="cognitive special icon" />
              }
              CognitiveAbilityTitle="Cognitive Special Ability"
            />
          </Grid>
          <Grid item xs={6} className={classes.itempaddingTop}>
            <UniqueConginitiveAbility
              cognitiveIcon={
                <img src={LogicalReasoningIcon} alt="logical reasoning icon" />
              }
              CognitiveAbilityTitle="Logical Reasoning"
            />
          </Grid>
          <Grid item xs={6} className={classes.itempaddingTop}>
            <UniqueConginitiveAbility
              cognitiveIcon={
                <img src={OverAllScoreIcon} alt="OverAll Score Icon" />
              }
              CognitiveAbilityTitle="Overall Score"
            />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

CognitiveAbility.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CognitiveAbility);
