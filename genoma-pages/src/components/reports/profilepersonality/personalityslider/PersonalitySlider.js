import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Slider from "rc-slider";
import SubMenu from "../submenu/SubMenu";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const styles = theme => ({
  root: {
    paddingTop: 10
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
});

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
            value={[this.props.value]}
            count={0}
            tabIndex={[0]}
            handleStyle={[
              { backgroundColor: "#ff008a", borderColor: "#ffffff" }
            ]}
            trackStyle={[{ backgroundColor: "#e1e1e1" }]}
            railStyle={{ backgroundColor: ' "#e1e1e1"' }}
          />
        </div>
        <Grid container>
          <Grid item xs={12} style={{ textAlign: "right" }}>
            <SubMenu />
          </Grid>
        </Grid>
      </div>
    );
  }
}

CustomIconSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomIconSlider);
