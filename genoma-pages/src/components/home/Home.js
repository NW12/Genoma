import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import NavbarDashboard from "../layout/navbarDashboard/NavbarDashboard";
import FooterDashboard from "../layout/footerDashboard/FooterDashboard";

const styles = theme => ({
  root: {
    padding: "130px 20px 70px 220px",
    backgroundColor: "#eeeeee",
    [theme.breakpoints.down("xs")]: {
      padding: "90px 15px 20px 15px"
    }
  },

  heading: {
    fontWeight: "300",
    fontSize: 30,
    marginBottom: 30
  }
});

const Home = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <NavbarDashboard />
      <div className={classes.root}>
        <Typography component="h3" className={classes.heading}>
          Home
        </Typography>
      </div>
      <FooterDashboard />
    </React.Fragment>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
