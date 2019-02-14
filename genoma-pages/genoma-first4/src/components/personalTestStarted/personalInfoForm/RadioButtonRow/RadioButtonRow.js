import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";

import { RadioButtonUnchecked, RadioButtonChecked } from "@material-ui/icons";

const styles = {
  // root: {
  //   backgroundColor: "#e84a78",
  //   borderRadius: "100%",
  //   color: "transparent",
  //   width: 25,
  //   height: 25,
  //   "&$checked": {
  //     backgroundColor: "#e84a78",
  //     color: "#ffffff"
  //   },
  //   "&:hover": {
  //     backgroundColor: "#e84a78"
  //   }
  // },
  // checked: {},
  AgreeIconStyle: {
    backgroundColor: "#e84a78",
    borderRadius: "100%",
    color: "transparent"
  },
  AgreeIconCheckedStyle: {
    backgroundColor: "#e84a78",
    borderRadius: "100%",
    color: "#ffffff"
  },
  DisAgreeIconStyle: {
    backgroundColor: "#30bdce",
    borderRadius: "100%",
    color: "transparent"
  },
  DisAgreeIconCheckedStyle: {
    backgroundColor: "#30bdce",
    borderRadius: "100%",
    color: "#ffffff"
  },
  UnsureIconStyle: {
    backgroundColor: "#cccccc",
    borderRadius: "100%",
    color: "transparent"
  },
  UnsureIconCheckedStyle: {
    backgroundColor: "#cccccc",
    borderRadius: "100%",
    color: "#ffffff"
  },
  title: {
    fontSize: 21,
    fontWeight: 500,
    color: "#454545",
    margin: "0 auto",
    paddingBottom: "10px"
  },

  RadioDescription: {
    fontSize: 17,
    fontWeight: 500,
    paddingTop: 52
  },
  RadioDescAgreeColor: {
    color: "#e84a78"
  },

  RadioDescDisAgreeColor: {
    color: "#30bdce"
  },
  flexForm: {
    display: "flex",
    flexDirection: "row",
    justify: "flex-start",
    alignItems: "center"
  },
  noPadMargin: {
    marginRight: 0,
    paddingRight: 0
  },
  "@media (max-width: 600px)": {
    title: {
      fontSize: 17,
      paddingBottom: 0
    },
    RadioDescription: {
      display: "none"
    },
    root: {
      width: 20
    }
  },
  "@media (min-width: 600px)": {
    flexForm: {
      display: "none"
    }
  }
};

class RadioButtons extends Component {
  state = {
    selectedValue: "Strongly Agree"
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
    console.log("value", this.state.selectedValue);
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center">
        <List className={classes.flexForm}>
          <ListItem>
            <ListItemIcon className={classes.noPadMargin}>
              <RadioButtonUnchecked
                style={{
                  fontSize: "20px"
                }}
                className={classes.AgreeIconStyle}
              />
            </ListItemIcon>
            <ListItemText primary="Agree" />
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.noPadMargin}>
              <RadioButtonUnchecked
                style={{ fontSize: "20px" }}
                className={classes.DisAgreeIconStyle}
              />
            </ListItemIcon>
            <ListItemText primary="Disagree" />
          </ListItem>
        </List>

        <FormLabel
          component="label"
          className={classes.RadioDescAgreeColor}
          classes={{ root: classes.RadioDescription }}
        >
          Agree
        </FormLabel>
        <FormControl component="fieldset">
          <FormLabel
            component="legend"
            // style={{ margin: "0 auto", paddingBottom: "10px" }}
            className={classes.title}
          >
            {this.props.RadioGroupLabel}
          </FormLabel>
          <RadioGroup
            aria-label="position"
            name="position"
            value={this.state.selectedValue}
            onChange={this.handleChange}
            row
          >
            <Radio
              classes={{ root: classes.root }}
              value="Strongly Agree"
              name="radio-button-demo"
              aria-label="Strongly Agree"
              icon={
                <RadioButtonUnchecked
                  style={{
                    fontSize: "35px"
                  }}
                  className={classes.AgreeIconStyle}
                />
              }
              checkedIcon={
                <RadioButtonChecked
                  style={{ fontSize: "35px", fill: "#ffffff" }}
                  className={classes.AgreeIconCheckedStyle}
                />
              }
            />
            <Radio
              classes={{ root: classes.root }}
              value="Mostly Agree"
              name="radio-button-demo"
              aria-label="Mostly  Agree"
              icon={
                <RadioButtonUnchecked
                  style={{ fontSize: "32px" }}
                  className={classes.AgreeIconStyle}
                />
              }
              checkedIcon={
                <RadioButtonChecked
                  style={{ fontSize: "32px" }}
                  className={classes.AgreeIconCheckedStyle}
                />
              }
            />
            <Radio
              classes={{ root: classes.root }}
              value="Slightly Agree"
              name="radio-button-demo"
              aria-label="C"
              icon={
                <RadioButtonUnchecked
                  style={{ fontSize: "27px" }}
                  className={classes.AgreeIconStyle}
                />
              }
              checkedIcon={
                <RadioButtonChecked
                  style={{ fontSize: "27px" }}
                  className={classes.AgreeIconCheckedStyle}
                />
              }
            />
            <Radio
              classes={{ root: classes.root }}
              value="Unsure"
              color="default"
              name="radio-button-demo"
              aria-label="Unsure"
              icon={
                <RadioButtonUnchecked
                  style={{ fontSize: "23px" }}
                  className={classes.UnsureIconStyle}
                />
              }
              checkedIcon={
                <RadioButtonChecked
                  style={{ fontSize: "23px" }}
                  className={classes.UnsureIconCheckedStyle}
                />
              }
            />
            <Radio
              classes={{ root: classes.root }}
              value="Slightly Disagree"
              color="default"
              name="radio-button-demo"
              aria-label="Slightly Disagree"
              icon={
                <RadioButtonUnchecked
                  style={{ fontSize: "27px" }}
                  className={classes.DisAgreeIconStyle}
                />
              }
              checkedIcon={
                <RadioButtonChecked
                  style={{ fontSize: "27px" }}
                  className={classes.DisAgreeIconCheckedStyle}
                />
              }
            />
            <Radio
              classes={{ root: classes.root }}
              value="Mostly Disagree"
              color="default"
              name="radio-button-demo"
              aria-label="Mostly Disagree"
              icon={
                <RadioButtonUnchecked
                  style={{ fontSize: "32px" }}
                  className={classes.DisAgreeIconStyle}
                />
              }
              checkedIcon={
                <RadioButtonChecked
                  style={{ fontSize: "32px" }}
                  className={classes.DisAgreeIconCheckedStyle}
                />
              }
            />
            <Radio
              classes={{ root: classes.root }}
              value="Strongly Disagree"
              color="default"
              name="radio-button-demo"
              aria-label="Strongly Disagree"
              icon={
                <RadioButtonUnchecked
                  style={{ fontSize: "35px" }}
                  className={classes.DisAgreeIconStyle}
                />
              }
              checkedIcon={
                <RadioButtonChecked
                  style={{ fontSize: "35px" }}
                  className={classes.DisAgreeIconCheckedStyle}
                />
              }
            />
            {/* <FormLabel
              component="label"
              className={classes.RadioDescDisAgreeColor}
              classes={{ root: classes.RadioDescription }}
            >
              Disagree
            </FormLabel> */}
          </RadioGroup>
        </FormControl>
        <FormLabel
          component="label"
          className={classes.RadioDescDisAgreeColor}
          classes={{ root: classes.RadioDescription }}
        >
          Disagree
        </FormLabel>
      </Grid>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadioButtons);
