import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import React from "react";
import { PropTypes } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Slider from "rc-slider";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const styles = {
  root: {
    paddingTop: 15
  },
  sliderTitle: {
    fontSize: 13,
    fontWeight: "700"
  },
  sliderPercent: {
    fontSize: 12,
    fontWeight: "300",
    textAlign: "right",
    marginRight: "auto"
  },
  rangeWrapper: {
    width: "100%"
  }
};

class CustomIconSlider extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={6}>
            <Typography id="slider-image" className={classes.sliderTitle}>
              {this.props.title}{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Typography id="slider-image" className={classes.sliderPercent}>
              100%
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.rangeWrapper}>
          <Range
            min={0}
            max={100}
            value={[this.props.value1, this.props.value2]}
            count={1}
            tabIndex={[0, 1]}
            handleStyle={[
              { backgroundColor: "#ff008a", borderColor: "#ffffff" },
              { backgroundColor: "#13b9ce", borderColor: "#ffffff" }
            ]}
            trackStyle={[{ backgroundColor: "#e1e1e1" }]}
            railStyle={{ backgroundColor: ' "#e1e1e1"' }}
          />
        </div>
      </div>
    );
  }
}

CustomIconSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomIconSlider);
