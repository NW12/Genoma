import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import JobPositionButtons from "./jobpositionbuttons/JobPositionButtons";
import CandidateCards from "./candidatecards/CandidateCards";
import NavbarDashboard from "../layout/navbarDashboard/NavbarDashboard";
import FooterDashboard from "../layout/footerDashboard/FooterDashboard";

const styles = theme => ({
  root: {
    padding: "130px 20px 70px 220px",
    backgroundColor: "#eeeeee",
    [theme.breakpoints.down("xs")]: {
      padding: "90px 15px 20px 15px"
    }
  }
});

const JobsListing = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <NavbarDashboard />
      <div className={classes.root}>
        <JobPositionButtons />
        <CandidateCards />
      </div>
      <FooterDashboard />
    </React.Fragment>
  );
};

JobsListing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobsListing);
