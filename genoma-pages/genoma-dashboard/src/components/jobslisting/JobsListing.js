import React from "react";
import JobsListingButtons from "./jobslistingbuttons/JobsListingButtons";
import JobsListingTable from "./jobslistingtable/JobsListingTable";
import { withStyles } from "@material-ui/core/styles";
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

  "@media (max-width: 600px)": {
    root: {
      paddingLeft: 15,
      paddingTop: 90,
      paddingBottom: 20,
      paddingRight: 12
    }
  }
};

const JobsListing = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <NavbarDashboard />
      <div className={classes.root}>
        <JobsListingButtons />
        <JobsListingTable />
      </div>
      <FooterDashboard />
    </React.Fragment>
  );
};

JobsListing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobsListing);
