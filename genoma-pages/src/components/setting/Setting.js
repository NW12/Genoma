import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import NavbarDashboard from "../layout/navbarDashboard/NavbarDashboard";
import FooterDashboard from "../layout/footerDashboard/FooterDashboard";
const styles = {
  root: {
    paddingLeft: 220,
    paddingTop: 130,
    paddingBottom: 70,
    paddingRight: 20,
    backgroundColor: "#eeeeee"
  },

  heading: {
    fontWeight: "300",
    fontSize: 30,
    marginBottom: 30
  },

  "@media (max-width: 600px)": {
    root: {
      paddingLeft: 15,
      paddingTop: 90,
      paddingBottom: 20,
      paddingRight: 12
    }
  }
};

const Setting = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <NavbarDashboard />
      <div className={classes.root}>
        <Typography component="h3" className={classes.heading}>
          Setting
        </Typography>
      </div>
      <FooterDashboard />
    </React.Fragment>
  );
};

Setting.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Setting);
