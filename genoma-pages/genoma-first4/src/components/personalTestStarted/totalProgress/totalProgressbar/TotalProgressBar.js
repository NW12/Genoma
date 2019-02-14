import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import { Grid, MobileStepper, Typography, Button } from "@material-ui/core";
import { Grid, MobileStepper, Typography } from "@material-ui/core";
// import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const styles = {
  progressBar: {
    backgroundColor: "#cccccc",
    width: 933,
    height: 8
  },
  progresSec: {
    paddingBottom: 40
  },
  progressTitle: {
    fontWeight: "300",
    fontSize: 45,
    paddingBottom: 26,
    paddingLeft: 6
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15
  },

  "@media (max-width: 600px)": {
    progressTitle: {
      fontWeight: "300",
      fontSize: 30,
      paddingBottom: 13,
      paddingLeft: 6
    },
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

class ProgressMobileStepper extends React.Component {
  state = {
    activeStep: 1
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <Grid container justify="center" className={classes.progresSec}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          <Grid item xs={12}>
            <Typography variant="h3" classes={{ h3: classes.progressTitle }}>
              Personal Test
            </Typography>
            <MobileStepper
              variant="progress"
              steps={6}
              position="static"
              activeStep={this.state.activeStep}
              classes={{
                progress: classes.progressBar
              }}
              // nextButton={
              //   <Button
              //     size="small"
              //     onClick={this.handleNext}
              //     disabled={this.state.activeStep === 5}
              //   >
              //     Next
              //     {theme.direction === "rtl" ? (
              //       <KeyboardArrowLeft />
              //     ) : (
              //       <KeyboardArrowRight />
              //     )}
              //   </Button>
              // }
              // backButton={
              //   <Button
              //     size="small"
              //     onClick={this.handleBack}
              //     disabled={this.state.activeStep === 0}
              //   >
              //     {theme.direction === "rtl" ? (
              //       <KeyboardArrowRight />
              //     ) : (
              //       <KeyboardArrowLeft />
              //     )}
              //     Back
              //   </Button>
              // }
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

ProgressMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ProgressMobileStepper);
