import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Button } from "@material-ui/core";
import AnchorLink from "../../common/RouterLink/AnchorLink";
import { ArrowDropDown, Check } from "@material-ui/icons";

const styles = {
  StepsProcessPaper: {
    // width: 280,
    height: 184,
    padding: "14px 19px 18px 18px",
    marginBottom: 22
  },
  StepsProcessHeading: {
    fontWeight: "300"
  },
  linkStyle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#ff008a",
    textDecoration: "none",
    display: "block"
  },
  rightIcon: {
    marginLeft: 6
  },
  buttonQualified: {
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 12
  },
  checkIcon: {
    display: "block",
    color: "#439f24",
    fontSize: 46,
    margin: "0 auto"
  }
};

class StepsProcess extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.StepsProcessPaper}>
        <Typography variant="h6" className={classes.StepsProcessHeading}>
          Steps in Process
        </Typography>

        <div style={{ textAlign: "center", marginTop: 15 }}>
          <Check className={classes.checkIcon} />
          <Button variant="text" className={classes.buttonQualified}>
            QUALIFIED
            <ArrowDropDown className={classes.rightIcon} />
          </Button>
          <AnchorLink to="/viewlog" className={classes.linkStyle}>
            View Log
          </AnchorLink>{" "}
        </div>
      </Paper>
    );
  }
}

StepsProcess.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StepsProcess);
